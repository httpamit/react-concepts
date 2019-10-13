import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Alert from "./ui-components/Alert";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Alert type="success">
          <h4 className="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr>
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
        <Alert type="info" message="Oh no" />
      </div>
    );
  }
}

export default App;
