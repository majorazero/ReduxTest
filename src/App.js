import React, { Component } from 'react';
import Homepage from "./components/Homepage.js";
import Form from "./components/Form.js";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form />
          <Homepage />
        </div>
      </Provider>
    );
  }
}

export default App;
