import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";

const Alert = ({ type, message, children, show, toggleAlert }) => {
  return (
    <Fragment>
      {
        show &&
        <div onClick={toggleAlert} className={`alert alert-${type}`} role="alert">
          {message ? message : children}
        </div>
      }
    </Fragment>
  );
};

Alert.prototype = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string,
  show: PropTypes.bool,
  toggleAlert: PropTypes.func
};

Alert.defaultProps = {
  message: null,
  show: true,
  toggleAlert() { }
};

const withAnimation = (Component) => {
  const AnimatedComponent = (props) => {
    return (
      <div className="wow bounceInUp">
        <Component {...props} />
      </div>
    )
  }

  return AnimatedComponent;
}

const withDismiss = (Component) => {
  class DismissableComponent extends React.Component {

    componentDidMount() {
      setTimeout(() => {
      }, 2000)
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return DismissableComponent;
}

export const AnimatedAlert = withAnimation(Alert);
export const DismissableAlert = withDismiss(AnimatedAlert)

export default Alert;
