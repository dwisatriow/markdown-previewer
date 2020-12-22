import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import './Editor.css';

function Editor(props) {
  const html = marked(props.md);

  return (
    <div>
      <form>
        <label>Editor</label><br />
        <textarea id="editor" value={props.md} onChange={props.handleChange} />
      </form>
      <div id="preview">
        {ReactHtmlParser(html)}
      </div>
    </div>
  )
}

export default Editor;
