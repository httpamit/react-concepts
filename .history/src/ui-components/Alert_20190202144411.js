import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.props.type;
  }

  render() {
    return (
      <div class={`alert alert-${type}`} role="alert">
        {this.props.message}
        {this.props.children}
      </div>
    );
  }
}

export default Alert;
