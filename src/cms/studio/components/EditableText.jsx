import React, { useRef } from 'react';
import { useStudio } from './StudioContext';

const EditableText = ({ id, as = 'p', className = '', children }) => {
  const { editMode, selectedElement, selectElement, content, updateElement } = useStudio();
  const Tag = as;
  const ref = useRef(null);
  const isSelected = editMode && selectedElement.id === id;
  const value = typeof content[id] === 'string' ? content[id] : children;

  const handleClick = (event) => {
    if (!editMode) return;
    event.preventDefault();
    event.stopPropagation();
    selectElement(id, 'text');
    ref.current?.focus();
  };

  const handleInput = (event) => {
    updateElement(id, event.currentTarget.textContent || '');
  };

  return (
    <Tag
      ref={ref}
      data-id={id}
      data-type="text"
      contentEditable={isSelected}
      suppressContentEditableWarning
      onClick={handleClick}
      onInput={handleInput}
      className={`${className} transition-all ${editMode ? 'outline outline-2 outline-transparent hover:outline-blue-400 cursor-text' : ''} ${
        isSelected ? 'outline-orange-400' : ''
      }`}
    >
      {value}
    </Tag>
  );
};

export default EditableText;
