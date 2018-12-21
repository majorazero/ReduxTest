import React, { Component } from 'react';
import Homepage from "./components/Homepage.js";
import Form from "./components/Form.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Homepage />
      </div>
    );
  }
}

export default App;
