import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Editor from './components/Editor.js';
import Footer from './components/Footer.js';

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