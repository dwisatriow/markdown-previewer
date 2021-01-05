import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import './Editor.scss';
import Preview from './Preview.js';

function Editor(props) {
  const html = marked(props.md);
  const parsedHTML = ReactHtmlParser(html);

  return (
    <div className="container">
      <div id="editor-previewer" className="row no-gutters">
        <div id="container-wrapper" className="col-md-12 col-lg-6 pr-md-0 pr-lg-4 mb-5 mb-lg-0">
          <div id="editor-container">
            <h2>Editor</h2>
            <textarea id="editor" value={props.md} onChange={props.handleChange} />
          </div>
        </div>
        <div id="container-wrapper" className="col-md-12 col-lg-6 pl-md-0 pl-lg-4 mb-4 mb-lg-0">
          <div id="preview-container">
            <h2>Preview</h2>
            <div id="preview">
              <Preview parsedHTML={parsedHTML} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor;
