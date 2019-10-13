import React, { Component } from "react";
import "./App.css";

import Alert from "./ui-components/Alert";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Alert type="success" message="just want to check the message">
          <p>
            Welcome to react page!!!
          </p>
        </Alert>
      </div>
    );
  }
}

export default App;
