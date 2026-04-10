import React from 'react';
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from 'lucide-react';
import { useStudio } from './StudioContext';

const toolBtnClass = 'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800';

const rgbToHex = (color) => {
  if (!color) return '#111827';
  if (color.startsWith('#')) return color;
  const match = color.match(/\d+/g);
  if (!match || match.length < 3) return '#111827';
  const [r, g, b] = match.slice(0, 3).map((value) => Number(value).toString(16).padStart(2, '0'));
  return `#${r}${g}${b}`;
};

const getTextValue = (raw) => {
  if (raw && typeof raw === 'object' && ('text' in raw || 'style' in raw)) {
    return {
      text: typeof raw.text === 'string' ? raw.text : '',
      style: raw.style && typeof raw.style === 'object' ? raw.style : {},
    };
  }

  if (typeof raw === 'string') {
    return { text: raw, style: {} };
  }

  return { text: '', style: {} };
};

const getButtonValue = (raw) => {
  if (raw && typeof raw === 'object') {
    return {
      label: raw.label || '',
      link: raw.link || '',
      target: raw.target || '_self',
      labelEditable: raw.labelEditable !== false,
    };
  }
  return { label: '', link: '', target: '_self', labelEditable: true };
};

const getFieldValue = (raw) => {
  if (raw && typeof raw === 'object') {
    return {
      tag: raw.tag || 'input',
      value: raw.value || '',
      placeholder: raw.placeholder || '',
      type: raw.type || 'text',
      name: raw.name || '',
      options: Array.isArray(raw.options) ? raw.options : [],
    };
  }

  return {
    tag: 'input',
    value: '',
    placeholder: '',
    type: 'text',
    name: '',
    options: [],
  };
};

const SidePanel = ({ pageName }) => {
  const { selectedElement, content, updateElement } = useStudio();

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file || selectedElement.type !== 'image') return;
    const reader = new FileReader();
    reader.onload = () => {
      const current = typeof content[selectedElement.id] === 'object' ? content[selectedElement.id] : {};
      updateElement(selectedElement.id, { ...current, src: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const textValue = getTextValue(content[selectedElement.id]);
  const textStyle = textValue.style || {};
  const buttonValue = getButtonValue(content[selectedElement.id]);
  const fieldValue = getFieldValue(content[selectedElement.id]);

  const setTextModel = (nextText, nextStyle = textStyle) => {
    updateElement(selectedElement.id, { text: nextText, style: nextStyle });
  };

  const patchTextStyle = (partial) => {
    setTextModel(textValue.text, { ...textStyle, ...partial });
  };

  const setButtonModel = (patch) => {
    updateElement(selectedElement.id, { ...buttonValue, ...patch });
  };

  const setFieldModel = (patch) => {
    updateElement(selectedElement.id, { ...fieldValue, ...patch });
  };

  return (
    <section className="space-y-4">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Element Editor</p>
        <p className="mt-1 text-[11px] text-slate-500">Page: {pageName}</p>
      </div>

      {!selectedElement.id && (
        <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4 text-xs text-slate-300">
          Click any text, image, link, button, or form field in preview to edit it.
        </div>
      )}

      {selectedElement.id && (
        <div className="space-y-4 rounded-xl border border-slate-800 bg-[#070a14] p-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">Selected</p>
            <p className="mt-1 break-all font-mono text-xs text-slate-300">{selectedElement.id}</p>
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Type: {selectedElement.type}</p>
          </div>

          {selectedElement.type === 'text' && (
            <>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Content</label>
                <textarea
                  rows="6"
                  value={textValue.text}
                  onChange={(event) => setTextModel(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm leading-6 text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Formatting</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => patchTextStyle({ fontWeight: textStyle.fontWeight === '700' ? '400' : '700' })}
                    className={`${toolBtnClass} ${textStyle.fontWeight === '700' ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200' : ''}`}
                    title="Bold"
                  >
                    <Bold size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => patchTextStyle({ fontStyle: textStyle.fontStyle === 'italic' ? 'normal' : 'italic' })}
                    className={`${toolBtnClass} ${textStyle.fontStyle === 'italic' ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200' : ''}`}
                    title="Italic"
                  >
                    <Italic size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => patchTextStyle({ textDecoration: textStyle.textDecoration === 'underline' ? 'none' : 'underline' })}
                    className={`${toolBtnClass} ${textStyle.textDecoration === 'underline' ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200' : ''}`}
                    title="Underline"
                  >
                    <Underline size={14} />
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Text Color</label>
                <input
                  type="color"
                  value={rgbToHex(textStyle.color)}
                  onChange={(event) => patchTextStyle({ color: event.target.value })}
                  className="h-10 w-16 cursor-pointer rounded border border-slate-700 bg-slate-900 p-1"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Alignment</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => patchTextStyle({ textAlign: 'left' })}
                    className={`${toolBtnClass} ${textStyle.textAlign === 'left' || !textStyle.textAlign ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200' : ''}`}
                    title="Align Left"
                  >
                    <AlignLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => patchTextStyle({ textAlign: 'center' })}
                    className={`${toolBtnClass} ${textStyle.textAlign === 'center' ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200' : ''}`}
                    title="Align Center"
                  >
                    <AlignCenter size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => patchTextStyle({ textAlign: 'right' })}
                    className={`${toolBtnClass} ${textStyle.textAlign === 'right' ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200' : ''}`}
                    title="Align Right"
                  >
                    <AlignRight size={14} />
                  </button>
                </div>
              </div>
            </>
          )}

          {selectedElement.type === 'image' && (
            <>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Image URL</label>
                <input
                  value={(content[selectedElement.id] && content[selectedElement.id].src) || ''}
                  onChange={(event) => {
                    const current = typeof content[selectedElement.id] === 'object' ? content[selectedElement.id] : {};
                    updateElement(selectedElement.id, { ...current, src: event.target.value });
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Alt Text</label>
                <input
                  value={(content[selectedElement.id] && content[selectedElement.id].alt) || ''}
                  onChange={(event) => {
                    const current = typeof content[selectedElement.id] === 'object' ? content[selectedElement.id] : {};
                    updateElement(selectedElement.id, { ...current, alt: event.target.value });
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Upload Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full rounded-xl border border-slate-700 bg-slate-900 p-2 text-sm text-slate-200" />
              </div>
            </>
          )}

          {selectedElement.type === 'button' && (
            <>
              {buttonValue.labelEditable ? (
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Label</label>
                  <input
                    value={buttonValue.label}
                    onChange={(event) => setButtonModel({ label: event.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-3 text-xs text-slate-300">
                  This link wraps media content. Edit URL/target below.
                </div>
              )}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Link</label>
                <input
                  value={buttonValue.link}
                  onChange={(event) => setButtonModel({ link: event.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Target</label>
                <select
                  value={buttonValue.target || '_self'}
                  onChange={(event) => setButtonModel({ target: event.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                >
                  <option value="_self">Same tab</option>
                  <option value="_blank">New tab</option>
                </select>
              </div>
            </>
          )}

          {selectedElement.type === 'field' && (
            <>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Field Tag</label>
                <input
                  disabled
                  value={fieldValue.tag || 'input'}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-sm text-slate-300 outline-none"
                />
              </div>

              {fieldValue.tag === 'select' ? (
                <>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Options (one per line: label|value)</label>
                    <textarea
                      rows="6"
                      value={fieldValue.options.map((option) => `${option.label || ''}|${option.value || ''}`).join('\n')}
                      onChange={(event) => {
                        const options = event.target.value
                          .split('\n')
                          .map((line) => line.trim())
                          .filter(Boolean)
                          .map((line) => {
                            const [label, value] = line.split('|');
                            return {
                              label: (label || '').trim(),
                              value: (value || label || '').trim(),
                            };
                          });
                        setFieldModel({ options });
                      }}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm leading-6 text-slate-100 outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Selected Value</label>
                    <input
                      value={fieldValue.value}
                      onChange={(event) => setFieldModel({ value: event.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Value</label>
                    <input
                      value={fieldValue.value}
                      onChange={(event) => setFieldModel({ value: event.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Placeholder</label>
                    <input
                      value={fieldValue.placeholder}
                      onChange={(event) => setFieldModel({ placeholder: event.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 outline-none focus:border-indigo-500"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default SidePanel;
