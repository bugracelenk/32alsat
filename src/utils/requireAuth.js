import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        browserHistory.push("/");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        browserHistory.push("/");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.loggedIn
    };
  }

  return connect(mapStateToProps)(Authenticate);
}