import React from 'react';
import { useStudio } from './StudioContext';

const EditableImage = ({ id, src, alt = '', className = '' }) => {
  const { editMode, selectedElement, selectElement, content } = useStudio();
  const isSelected = editMode && selectedElement.id === id;
  const imageValue = content[id] && typeof content[id] === 'object' ? content[id] : { src, alt };

  const handleClick = (event) => {
    if (!editMode) return;
    event.preventDefault();
    event.stopPropagation();
    selectElement(id, 'image');
  };

  return (
    <img
      data-id={id}
      data-type="image"
      src={imageValue.src || src}
      alt={imageValue.alt || alt}
      onClick={handleClick}
      className={`${className} transition-all ${
        editMode ? 'outline outline-2 outline-transparent hover:outline-blue-400 cursor-pointer' : ''
      } ${isSelected ? 'outline-orange-400' : ''}`}
    />
  );
};

export default EditableImage;
