import React from 'react';
import marked from 'marked';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './Editor.css';

function Editor(props) {
  const html = marked(props.md);

  return (
    <div id="editor-previewer" className="col">
      <div id="editor-container">
        <h2>Editor</h2>
        <textarea id="editor" value={props.md} onChange={props.handleChange} />
      </div>
      <div id="preview-container">
        <h2>Preview</h2><br />
        <div id="preview">
          {ReactHtmlParser(html)}
          {/* {html} */}
        </div>
      </div>
    </div>
  )
}

export default Editor;
