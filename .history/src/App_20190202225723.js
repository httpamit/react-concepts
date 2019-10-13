import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Alert from "./ui-components/Alert";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Alert type="success" />
        <Alert type="info" message="Oh no" />
      </div>
    );
  }
}

export default App;
