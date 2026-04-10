import React from 'react';
import { useStudio } from './StudioContext';

const EditableButton = ({ id, className = '', defaultLabel = 'Button', defaultLink = '#' }) => {
  const { editMode, selectedElement, selectElement, content } = useStudio();
  const isSelected = editMode && selectedElement.id === id;
  const value = content[id] && typeof content[id] === 'object' ? content[id] : { label: defaultLabel, link: defaultLink };

  const handleClick = (event) => {
    event.preventDefault();
    if (!editMode) return;
    event.stopPropagation();
    selectElement(id, 'button');
  };

  return (
    <a
      data-id={id}
      data-type="button"
      href={value.link || '#'}
      onClick={handleClick}
      className={`${className} transition-all ${
        editMode ? 'outline outline-2 outline-transparent hover:outline-blue-400 cursor-pointer' : ''
      } ${isSelected ? 'outline-orange-400' : ''}`}
    >
      {value.label || defaultLabel}
    </a>
  );
};

export default EditableButton;
