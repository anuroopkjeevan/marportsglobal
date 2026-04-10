import React, { useEffect, useRef, useState } from 'react';
import { fetchCmsPageContent, getCmsPageContent, subscribeCmsContent } from './storage';

const BUTTON_SELECTORS = 'a, button';
const FIELD_SELECTORS = 'input, textarea, select';
const INLINE_TAGS = new Set(['SPAN', 'STRONG', 'EM', 'SMALL', 'B', 'I', 'U', 'BR', 'MARK', 'SUB', 'SUP']);
const MEDIA_SELECTORS = 'img, svg, video, picture, canvas, iframe';
const NON_EDITABLE_TEXT_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'SVG',
  'PATH',
  'G',
  'VIDEO',
  'AUDIO',
  'IFRAME',
  'META',
  'LINK',
  'HEAD',
  'HTML',
  'BODY',
]);

const isStyledTextEntry = (value) => value && typeof value === 'object' && ('text' in value || 'style' in value);

const isTextLabelButtonElement = (el) => {
  if (!el || el.nodeType !== 1) return false;
  if (!el.matches(BUTTON_SELECTORS)) return false;
  if (el.querySelector(MEDIA_SELECTORS)) return false;
  return (el.textContent || '').trim().length > 0;
};

const buildStablePath = (el, root) => {
  const segments = [];
  let current = el;
  while (current && current !== root && current.parentElement) {
    const tag = current.tagName.toLowerCase();
    const sameTagSiblings = Array.from(current.parentElement.children).filter(
      (sibling) => sibling.tagName === current.tagName,
    );
    const index = sameTagSiblings.indexOf(current);
    segments.unshift(`${tag}:${index}`);
    current = current.parentElement;
  }
  return segments.join('/');
};

const ensureDataId = (el, type, root) => {
  if (!el || el.nodeType !== 1) return '';
  let id = el.getAttribute('data-id');
  if (!id) {
    const explicitId = el.getAttribute('id');
    if (explicitId) {
      id = `${type}:id:${explicitId}`;
    } else {
      const path = buildStablePath(el, root);
      id = `${type}:path:${path}`;
    }
    el.setAttribute('data-id', id);
  }
  el.setAttribute('data-type', type);
  return id;
};

const hasEditableDirectText = (el) => {
  const directText = Array.from(el.childNodes || []).some(
    (node) => node.nodeType === 3 && (node.textContent || '').trim().length > 0,
  );
  if (!directText) return false;

  const blockChild = Array.from(el.children || []).find((child) => !INLINE_TAGS.has(child.tagName));
  return !blockChild;
};

const isEditableFieldElement = (el) => {
  if (!el || el.nodeType !== 1) return false;
  return el.matches(FIELD_SELECTORS);
};

const isEditableTextElement = (el) => {
  if (!el || el.nodeType !== 1) return false;
  if (NON_EDITABLE_TEXT_TAGS.has(el.tagName)) return false;
  if (el.tagName === 'IMG') return false;
  if (el.matches(BUTTON_SELECTORS)) return false;
  if (el.matches(FIELD_SELECTORS)) return false;
  if (el.hasAttribute('data-cms-ignore')) return false;

  const text = (el.textContent || '').trim();
  if (!text) return false;

  const childElements = Array.from(el.children).filter((child) => child.tagName !== 'BR');
  if (childElements.length === 0) return true;

  return hasEditableDirectText(el);
};

const classifyEditableType = (el) => {
  if (!el || el.nodeType !== 1) return null;
  if (el.tagName === 'IMG') return 'image';
  if (el.matches(BUTTON_SELECTORS)) return 'button';
  if (isEditableFieldElement(el)) return 'field';
  if (isEditableTextElement(el)) return 'text';
  return null;
};

const bootstrapEditableDom = (root) => {
  const all = root.querySelectorAll('*');
  all.forEach((el) => {
    const type = classifyEditableType(el);
    if (!type) return;
    ensureDataId(el, type, root);
  });
};

const applyTextStyle = (el, style = {}) => {
  el.style.fontWeight = style.fontWeight || '';
  el.style.fontStyle = style.fontStyle || '';
  el.style.textDecoration = style.textDecoration || '';
  el.style.color = style.color || '';
  el.style.textAlign = style.textAlign || '';
};

const captureOriginal = (el, type) => {
  if (type === 'image') {
    return {
      type,
      src: el.getAttribute('src'),
      alt: el.getAttribute('alt'),
    };
  }

  if (type === 'button') {
    const labelEditable = isTextLabelButtonElement(el);
    return {
      type,
      labelEditable,
      textContent: el.textContent || '',
      innerHTML: el.innerHTML,
      href: el.getAttribute('href'),
      target: el.getAttribute('target'),
    };
  }

  if (type === 'field') {
    const tag = el.tagName.toLowerCase();
    if (tag === 'select') {
      return {
        type,
        tag,
        value: el.value || '',
        name: el.getAttribute('name'),
        options: Array.from(el.querySelectorAll('option')).map((option) => ({
          label: option.textContent || '',
          value: option.value || '',
        })),
      };
    }

    return {
      type,
      tag,
      value: el.value || '',
      placeholder: el.getAttribute('placeholder'),
      inputType: el.getAttribute('type'),
      name: el.getAttribute('name'),
    };
  }

  return {
    type: 'text',
    textContent: el.textContent || '',
    style: {
      fontWeight: el.style.fontWeight || '',
      fontStyle: el.style.fontStyle || '',
      textDecoration: el.style.textDecoration || '',
      color: el.style.color || '',
      textAlign: el.style.textAlign || '',
    },
  };
};

const setOrRemoveAttr = (el, attr, value) => {
  if (value === null || value === undefined || value === '') {
    el.removeAttribute(attr);
    return;
  }
  el.setAttribute(attr, value);
};

const restoreOriginal = (doc, id, snapshot) => {
  const el = doc.querySelector(`[data-id="${id}"]`);
  if (!el || !snapshot) return;

  if (snapshot.type === 'image') {
    setOrRemoveAttr(el, 'src', snapshot.src);
    setOrRemoveAttr(el, 'alt', snapshot.alt);
    return;
  }

  if (snapshot.type === 'button') {
    if (snapshot.labelEditable) {
      el.textContent = snapshot.textContent || '';
    } else if (typeof snapshot.innerHTML === 'string') {
      el.innerHTML = snapshot.innerHTML;
    }
    setOrRemoveAttr(el, 'href', snapshot.href);
    setOrRemoveAttr(el, 'target', snapshot.target);
    return;
  }

  if (snapshot.type === 'field') {
    if (snapshot.tag === 'select') {
      if (Array.isArray(snapshot.options)) {
        el.innerHTML = '';
        snapshot.options.forEach((option) => {
          const optionEl = doc.createElement('option');
          optionEl.value = option.value || option.label || '';
          optionEl.textContent = option.label || option.value || '';
          el.appendChild(optionEl);
        });
      }
      if (typeof snapshot.value === 'string') {
        el.value = snapshot.value;
      }
      setOrRemoveAttr(el, 'name', snapshot.name);
      return;
    }

    if (typeof snapshot.value === 'string') {
      el.value = snapshot.value;
    }
    setOrRemoveAttr(el, 'placeholder', snapshot.placeholder);
    setOrRemoveAttr(el, 'type', snapshot.inputType);
    setOrRemoveAttr(el, 'name', snapshot.name);
    return;
  }

  el.textContent = snapshot.textContent || '';
  applyTextStyle(el, snapshot.style || {});
};

const applyPageContent = (doc, pageContent, snapshotMap) => {
  const root = doc.body;
  if (!root) return;

  bootstrapEditableDom(root);

  Object.entries(pageContent || {}).forEach(([id, value]) => {
    if (id === 'html' || id === 'updatedAt') return;

    const el = doc.querySelector(`[data-id="${id}"]`);
    if (!el) return;

    const type = el.getAttribute('data-type');
    if (!type) return;

    if (!snapshotMap.has(id)) {
      snapshotMap.set(id, captureOriginal(el, type));
    }

    if (type === 'image' && value && typeof value === 'object') {
      if (value.src) el.setAttribute('src', value.src);
      setOrRemoveAttr(el, 'alt', value.alt || '');
      return;
    }

    if (type === 'button' && value && typeof value === 'object') {
      const shouldApplyLabel = (value.labelEditable ?? isTextLabelButtonElement(el)) !== false;
      if (shouldApplyLabel && typeof value.label === 'string') {
        el.textContent = value.label;
      }
      if (el.tagName.toLowerCase() === 'a') {
        setOrRemoveAttr(el, 'href', value.link || '#');
        if (value.target && value.target !== '_self') {
          el.setAttribute('target', value.target);
        } else {
          el.removeAttribute('target');
        }
      }
      return;
    }

    if (type === 'field' && value && typeof value === 'object') {
      const tag = el.tagName.toLowerCase();

      if (tag === 'input' || tag === 'textarea') {
        if (typeof value.value === 'string') {
          el.value = value.value;
        }
        if (typeof value.placeholder === 'string') {
          setOrRemoveAttr(el, 'placeholder', value.placeholder);
        }
        if (typeof value.type === 'string' && tag === 'input') {
          setOrRemoveAttr(el, 'type', value.type);
        }
        if (typeof value.name === 'string') {
          setOrRemoveAttr(el, 'name', value.name);
        }
      }

      if (tag === 'select') {
        if (Array.isArray(value.options)) {
          el.innerHTML = '';
          value.options.forEach((option) => {
            const optionEl = doc.createElement('option');
            optionEl.value = option.value || option.label || '';
            optionEl.textContent = option.label || option.value || '';
            el.appendChild(optionEl);
          });
        }
        if (typeof value.value === 'string') {
          el.value = value.value;
        }
        if (typeof value.name === 'string') {
          setOrRemoveAttr(el, 'name', value.name);
        }
      }

      return;
    }

    if (type === 'text' && isStyledTextEntry(value)) {
      el.textContent = typeof value.text === 'string' ? value.text : '';
      applyTextStyle(el, value.style);
      return;
    }

    if (typeof value === 'string') {
      el.textContent = value;
    }
  });
};

const CmsPageOverride = ({ pageId, children }) => {
  const [pageContent, setPageContent] = useState({});
  const [htmlOverride, setHtmlOverride] = useState('');
  const snapshotsRef = useRef(new Map());

  useEffect(() => {
    const load = () => {
      const nextPageContent = getCmsPageContent(pageId);
      const html = typeof nextPageContent.html === 'string' ? nextPageContent.html : '';
      setPageContent(nextPageContent && typeof nextPageContent === 'object' ? nextPageContent : {});
      setHtmlOverride(html);
    };

    load();
    fetchCmsPageContent(pageId).then(load);
    const unsubscribe = subscribeCmsContent(load);
    return unsubscribe;
  }, [pageId]);

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const restoreAll = () => {
      snapshotsRef.current.forEach((snapshot, id) => restoreOriginal(document, id, snapshot));
      snapshotsRef.current.clear();
    };

    restoreAll();

    if (htmlOverride.trim()) {
      return restoreAll;
    }

    const apply = () => {
      restoreAll();
      applyPageContent(document, pageContent, snapshotsRef.current);
    };

    apply();
    const raf = window.requestAnimationFrame(apply);

    return () => {
      window.cancelAnimationFrame(raf);
      restoreAll();
    };
  }, [pageId, pageContent, htmlOverride]);

  if (htmlOverride.trim()) {
    return (
      <div
        className="min-h-screen"
        dangerouslySetInnerHTML={{ __html: htmlOverride }}
      />
    );
  }

  return children;
};

export default CmsPageOverride;
