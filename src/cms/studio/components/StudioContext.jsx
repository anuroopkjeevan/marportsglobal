import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const StudioContext = createContext(null);

export const StudioProvider = ({ initialContent, children, onContentChange }) => {
  const [editMode, setEditMode] = useState(true);
  const [content, setContent] = useState(initialContent || {});
  const [selectedElement, setSelectedElement] = useState({ id: '', type: '', value: '' });

  useEffect(() => {
    setContent(initialContent || {});
  }, [initialContent]);

  const updateContent = (nextContent) => {
    setContent(nextContent);
    onContentChange?.(nextContent);
  };

  const updateElement = (id, value) => {
    const next = { ...content, [id]: value };
    updateContent(next);
    if (selectedElement.id === id) {
      setSelectedElement((prev) => ({ ...prev, value }));
    }
  };

  const selectElement = (id, type) => {
    const value = content[id] ?? '';
    setSelectedElement({ id, type, value });
  };

  const value = useMemo(
    () => ({
      editMode,
      setEditMode,
      content,
      setContent: updateContent,
      updateElement,
      selectedElement,
      setSelectedElement,
      selectElement,
    }),
    [editMode, content, selectedElement],
  );

  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>;
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used inside StudioProvider');
  }
  return context;
};
