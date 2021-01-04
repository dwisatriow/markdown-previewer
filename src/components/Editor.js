import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import './Editor.scss';

function Editor(props) {
  const html = marked(props.md);

  return (
    <div className="container">
      <div id="editor-previewer" className="row no-gutters">
        <div id="editor-container" className="col-sm-12 col-md-6 mb-sm-4 mb-md-0 mr-sm-0 mr-md-3">
          <h2>Editor</h2>
          <textarea id="editor" value={props.md} onChange={props.handleChange} />
        </div>
        <div id="preview-container" className="col-sm-12 col-md-6 ml-sm-0 ml-md-3">
          <h2>Preview</h2>
          <div id="preview">
            {ReactHtmlParser(html)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor;
