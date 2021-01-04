import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import './Editor.scss';

function Editor(props) {
  const html = marked(props.md);

  return (
    <div id="editor-previewer">
      <div id="editor-container">
        <h2>Editor</h2>
        <textarea id="editor" value={props.md} onChange={props.handleChange} />
      </div>
      <div id="preview-container">
        <h2>Preview</h2>
        <div id="preview">
          {ReactHtmlParser(html)}
        </div>
      </div>
    </div>
  )
}

export default Editor;
