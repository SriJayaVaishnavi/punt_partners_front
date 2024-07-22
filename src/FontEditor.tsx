import React, { useState } from 'react';

const FontEditor = () => {
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontWeight, setFontWeight] = useState('normal');
  const [italic, setItalic] = useState(false);

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.value);
  };

  const handleItalicChange = (e) => {
    setItalic(e.target.checked);
  };

  const previewStyle = {
    fontFamily,
    fontWeight,
    fontStyle: italic ? 'italic' : 'normal',
  };

  return (
    <div>
      <h1>Font Editor</h1>
      <form>
        <label>
          Font Family:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
        <br />
        <label>
          Font Weight:
          <select value={fontWeight} onChange={handleFontWeightChange}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
          </select>
        </label>
        <br />
        <label>
          Italic:
          <input type="checkbox" checked={italic} onChange={handleItalicChange} />
        </label>
      </form>
      <div style={previewStyle}>
        <p>Preview:</p>
        <p>This is a preview of the selected font styles.</p>
      </div>
    </div>
  );
};

export default FontEditor;