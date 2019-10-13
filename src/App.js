import React, { Component } from "react";
import "./App.css";

import Alert, { AnimatedAlert, DismissableAlert } from "./ui-components/Alert";

class App extends Component {

  constructor() {
    super();
    this.state = {
      showAlert: true
    };
  }

  toggleAlert = () => {
    this.setState({
      showAlert: !this.state.showAlert
    })
  }

  render() {
    return (
      <div className="container">
        <Alert type="success" message="just want to check the message" toggleAlert={this.toggleAlert} show={this.state.showAlert}>
          <p>
            Welcome to react page!!!
          </p>
        </Alert>
        <DismissableAlert type="info" message="This is dismissable alert component" toggleAlert={this.toggleAlert} show={this.state.showAlert} />
        <AnimatedAlert type="warning" message="This is animated alert component" toggleAlert={this.toggleAlert} show={this.state.showAlert} />
      </div>
    );
  }
}

export default App;
