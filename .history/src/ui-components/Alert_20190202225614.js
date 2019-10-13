import React, { Component } from "react";

import PropTypes from "prop-types";

const Alert = ({ type, message, children }) => {
  return (
    <div className={`alert alert-${type}`}>{message ? message : children}</div>
  );
};

Alert.prototype = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Alert;
