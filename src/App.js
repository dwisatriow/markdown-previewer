import React from 'react';
import './App.scss';
import Header from './components/Header.js';
import Editor from './components/Editor.js';
import Footer from './components/Footer.js';
import placeholderText from './placeholderText.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      md: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ md: event.target.value});
  }

  componentDidMount() {
    let formattedText = "";
    for (const line in placeholderText) {
      formattedText = formattedText.concat(placeholderText[line]+"\n");
    }
    this.setState({ md: formattedText});
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Editor md={this.state.md} handleChange={this.handleChange} />
        <Footer />
      </div>
    );
  }
}

export default App;