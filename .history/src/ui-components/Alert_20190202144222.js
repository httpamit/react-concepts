import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div class={`alert alert-${this.props.type}`} role="alert">
        {this.props.message}
        {this.props.children}
      </div>
    );
  }
}

export default Alert;
