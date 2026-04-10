import React, { useEffect, useRef, useState } from 'react';
import { useStudio } from './StudioContext';

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

const getEventElement = (target) => {
  if (!target) return null;
  if (target.nodeType === 1) return target;
  if (target.nodeType === 3) {
    return target.parentElement;
  }
  return null;
};

const isTextLabelButtonElement = (el) => {
  if (!el || el.nodeType !== 1) return false;
  if (!el.matches(BUTTON_SELECTORS)) return false;
  if (el.querySelector(MEDIA_SELECTORS)) return false;
  return (el.textContent || '').trim().length > 0;
};

const Preview = ({ pagePath }) => {
  const iframeRef = useRef(null);
  const handlersRef = useRef({ hover: null, out: null, click: null, pointerDown: null });
  const idCounterRef = useRef(1);
  const selectedRef = useRef(null);
  const [frameReadyTick, setFrameReadyTick] = useState(0);
  const { editMode, content, updateElement, selectElement, selectedElement } = useStudio();

  const getDoc = () => {
    try {
      return iframeRef.current?.contentDocument || null;
    } catch (error) {
      return null;
    }
  };

  const getRoot = () => {
    const doc = getDoc();
    if (!doc) return null;
    return doc.body;
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
    if (!el) return '';
    let id = el.getAttribute('data-id');
    if (!id) {
      const explicitId = el.getAttribute('id');
      if (explicitId) {
        id = `${type}:id:${explicitId}`;
      } else {
        const path = buildStablePath(el, root);
        id = `${type}:path:${path || `el_${idCounterRef.current++}`}`;
      }
      el.setAttribute('data-id', id);
    }
    el.setAttribute('data-type', type);
    return id;
  };

  const isEditableFieldElement = (el) => {
    if (!el || el.nodeType !== 1) return false;
    return el.matches(FIELD_SELECTORS);
  };

  const hasEditableDirectText = (el) => {
    const directText = Array.from(el.childNodes || []).some(
      (node) => node.nodeType === 3 && (node.textContent || '').trim().length > 0,
    );
    if (!directText) return false;

    const blockChild = Array.from(el.children || []).find((child) => !INLINE_TAGS.has(child.tagName));
    return !blockChild;
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

  const pickEditableCandidate = (rawTarget, root) => {
    let current = getEventElement(rawTarget);
    while (current && current !== root && root.contains(current)) {
      const existingType = current.getAttribute('data-type');
      if (existingType && current.getAttribute('data-id')) {
        return { el: current, type: existingType };
      }
      const type = classifyEditableType(current);
      if (type) {
        return { el: current, type };
      }
      current = current.parentElement;
    }
    return null;
  };

  const getTextStyleFromDom = (el) => {
    const view = el?.ownerDocument?.defaultView;
    const computed = view?.getComputedStyle(el);
    if (!computed) {
      return {
        fontWeight: '400',
        fontStyle: 'normal',
        textDecoration: 'none',
        color: '#111827',
        textAlign: 'left',
      };
    }

    return {
      fontWeight: Number(computed.fontWeight) >= 600 ? '700' : '400',
      fontStyle: computed.fontStyle === 'italic' ? 'italic' : 'normal',
      textDecoration: computed.textDecorationLine?.includes('underline') ? 'underline' : 'none',
      color: computed.color || '#111827',
      textAlign: computed.textAlign || 'left',
    };
  };

  const applyTextStyle = (el, style = {}) => {
    el.style.fontWeight = style.fontWeight || '';
    el.style.fontStyle = style.fontStyle || '';
    el.style.textDecoration = style.textDecoration || '';
    el.style.color = style.color || '';
    el.style.textAlign = style.textAlign || '';
  };

  const clearSelectedOutline = () => {
    if (!selectedRef.current) return;
    selectedRef.current.style.outline = '';
    selectedRef.current.style.outlineOffset = '';
    selectedRef.current = null;
  };

  const applyContentToDom = () => {
    const doc = getDoc();
    const root = getRoot();
    if (!doc || !root) return;
    bootstrapEditableDom(root);

    Object.entries(content || {}).forEach(([id, value]) => {
      const el = doc.querySelector(`[data-id="${id}"]`);
      if (!el) return;
      const type = el.getAttribute('data-type');

      if (type === 'image' && value && typeof value === 'object') {
        if (value.src) el.setAttribute('src', value.src);
        el.setAttribute('alt', value.alt || '');
        return;
      }

      if (type === 'button' && value && typeof value === 'object') {
        const shouldApplyLabel = (value.labelEditable ?? isTextLabelButtonElement(el)) !== false;
        if (shouldApplyLabel && typeof value.label === 'string') {
          el.textContent = value.label;
        }
        if (el.tagName.toLowerCase() === 'a') {
          el.setAttribute('href', value.link || '#');
          if (value.target) {
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
            el.setAttribute('placeholder', value.placeholder);
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

  const refreshSelectedOutline = () => {
    const doc = getDoc();
    if (!doc) return;
    clearSelectedOutline();
    if (!selectedElement?.id) return;
    const el = doc.querySelector(`[data-id="${selectedElement.id}"]`);
    if (!el) return;
    el.style.outline = '2px solid #7c83ff';
    el.style.outlineOffset = '2px';
    selectedRef.current = el;
  };

  useEffect(() => {
    applyContentToDom();
    refreshSelectedOutline();
  }, [content, selectedElement, frameReadyTick]);

  useEffect(() => {
    const root = getRoot();
    if (!root) return;
    bootstrapEditableDom(root);
    applyContentToDom();
    refreshSelectedOutline();
  }, [frameReadyTick, pagePath]);

  useEffect(() => {
    const doc = getDoc();
    const root = getRoot();
    if (!doc || !root) return;

    const removeHandlers = () => {
      const { hover, out, click, pointerDown } = handlersRef.current;
      if (hover) root.removeEventListener('mouseover', hover, true);
      if (out) root.removeEventListener('mouseout', out, true);
      if (click) root.removeEventListener('click', click, true);
      if (pointerDown) root.removeEventListener('pointerdown', pointerDown, true);
      handlersRef.current = { hover: null, out: null, click: null, pointerDown: null };
      clearSelectedOutline();
      root.style.outline = '';
      root.style.outlineOffset = '';
      root.style.userSelect = '';
    };

    removeHandlers();

    if (!editMode) {
      return undefined;
    }

    root.style.outline = '2px dashed #5b66ff';
    root.style.outlineOffset = '-2px';
    root.style.userSelect = 'text';

    const pointerDown = (event) => {
      const picked = pickEditableCandidate(event.target, root);
      if (!picked) return;
      event.preventDefault();
      event.stopPropagation();
    };

    const hover = (event) => {
      const picked = pickEditableCandidate(event.target, root);
      if (!picked) return;
      const candidate = picked.el;
      if (candidate === selectedRef.current) return;
      candidate.style.outline = '1px solid #5b66ff';
      candidate.style.outlineOffset = '1px';
    };

    const out = (event) => {
      const picked = pickEditableCandidate(event.target, root);
      if (!picked) return;
      const candidate = picked.el;
      if (candidate === selectedRef.current) return;
      candidate.style.outline = '';
      candidate.style.outlineOffset = '';
    };

    const click = (event) => {
      const picked = pickEditableCandidate(event.target, root);
      if (!picked) return;
      const { el, type } = picked;

      event.preventDefault();
      event.stopPropagation();

      const id = ensureDataId(el, type, root);
      selectElement(id, type);

      if (type === 'image') {
        updateElement(id, {
          src: el.getAttribute('src') || '',
          alt: el.getAttribute('alt') || '',
        });
      } else if (type === 'button') {
        const labelEditable = isTextLabelButtonElement(el);
        updateElement(id, {
          label: labelEditable ? (el.textContent || '') : '',
          link: el.getAttribute('href') || '#',
          target: el.getAttribute('target') || '_self',
          labelEditable,
        });
      } else if (type === 'field') {
        const tag = el.tagName.toLowerCase();
        if (tag === 'select') {
          const options = Array.from(el.querySelectorAll('option')).map((option) => ({
            label: option.textContent || '',
            value: option.value || '',
          }));
          updateElement(id, {
            tag,
            value: el.value || '',
            name: el.getAttribute('name') || '',
            options,
          });
        } else {
          updateElement(id, {
            tag,
            value: el.value || '',
            placeholder: el.getAttribute('placeholder') || '',
            type: el.getAttribute('type') || (tag === 'textarea' ? 'textarea' : 'text'),
            name: el.getAttribute('name') || '',
          });
        }
      } else {
        const existing = content[id];
        if (isStyledTextEntry(existing)) {
          updateElement(id, {
            text: el.textContent || '',
            style: existing.style || getTextStyleFromDom(el),
          });
        } else {
          updateElement(id, {
            text: el.textContent || '',
            style: getTextStyleFromDom(el),
          });
        }
      }

      refreshSelectedOutline();
    };

    handlersRef.current = { hover, out, click, pointerDown };
    root.addEventListener('pointerdown', pointerDown, true);
    root.addEventListener('mouseover', hover, true);
    root.addEventListener('mouseout', out, true);
    root.addEventListener('click', click, true);

    return removeHandlers;
  }, [editMode, selectElement, updateElement, frameReadyTick, pagePath, content]);

  return (
    <iframe
      ref={iframeRef}
      title="Live page preview"
      src={pagePath}
      className="h-full w-full border-0"
      onLoad={() => {
        setFrameReadyTick((prev) => prev + 1);
        applyContentToDom();
        refreshSelectedOutline();
      }}
    />
  );
};

export default Preview;
