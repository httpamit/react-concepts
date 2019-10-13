import React, { Component } from "react";

import PropTypes from "prop-types";

const Alert = ({ type, message, children }) => {
  return (
    <div class={`alert alert-${this.props.type}`} role="alert">
      {this.props.message}
      {this.props.children}
    </div>
  );
};

Alert.prototype = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Alert;
