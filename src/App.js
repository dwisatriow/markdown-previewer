import React from 'react';
import marked from 'marked';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdText: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mdText: event.target.value});
  }

  render() {
    const htmlText = marked(this.state.mdText);

    return (
      <div>
        <form>
          <label>Editor</label><br />
          <textarea id="editor" value={this.state.mdText} onChange={this.handleChange} />
        </form>
        <div id="preview">
          {ReactHtmlParser(htmlText)}
        </div>
      </div>
    );
  }
}

export default App;