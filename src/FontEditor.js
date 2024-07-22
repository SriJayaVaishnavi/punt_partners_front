import React, { Component } from 'react';
import fonts from './fonts_req.json';

class FontEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      fontSize: props.fontSize,
      fontColor: props.fontColor,
      fontFamily: props.fontFamily,
      fontStyle: 'normal',
      fontWeight: 'normal',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleFontColorChange = this.handleFontColorChange.bind(this);
    this.handleFontFamilyChange = this.handleFontFamilyChange.bind(this);
    this.handleFontStyleChange = this.handleFontStyleChange.bind(this);
    this.handleFontWeightChange = this.handleFontWeightChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleFontSizeChange(event) {
    this.setState({ fontSize: event.target.value });
  }

  handleFontColorChange(event) {
    this.setState({ fontColor: event.target.value });
  }

  handleFontFamilyChange(event) {
    const fontFamily = event.target.value;
    this.setState({ fontFamily });
    const fontLink = fonts[fontFamily].link;
    if (fontLink) {
      const link = document.createElement('link');
      link.rel = 'tylesheet';
      link.href = fontLink;
      document.head.appendChild(link);
    }
  }

  handleFontStyleChange(event) {
    this.setState({ fontStyle: event.target.value });
  }

  handleFontWeightChange(event) {
    this.setState({ fontWeight: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          style={{
            fontSize: this.state.fontSize,
            color: this.state.fontColor,
            fontFamily: this.state.fontFamily,
            fontStyle: this.state.fontStyle,
            fontWeight: this.state.fontWeight,
          }}
        />
        <br />
        <label>
          Font Size:
          <input
            type="number"
            value={this.state.fontSize}
            onChange={this.handleFontSizeChange}
          />
        </label>
        <br />
        <label>
          Font Color:
          <input
            type="color"
            value={this.state.fontColor}
            onChange={this.handleFontColorChange}
          />
        </label>
        <br />
        <label>
          Font Family:
          <select value={this.state.fontFamily} onChange={this.handleFontFamilyChange}>
            {Object.keys(fonts).map(fontFamily => (
              <option key={fontFamily} value={fontFamily}>
                {fontFamily}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Font Style:
          <select value={this.state.fontStyle} onChange={this.handleFontStyleChange}>
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
          </select>
        </label>
        <br />
        <label>
          Font Weight:
          <select value={this.state.fontWeight} onChange={this.handleFontWeightChange}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
            <option value="bolder">Bolder</option>
          </select>
        </label>
      </div>
    );
  }
}

export default FontEditor;