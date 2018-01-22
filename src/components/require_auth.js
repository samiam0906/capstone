// Higher-Order Component (HOC) will wrap a specific component
// and extend its functionality
// This HOC will check and see if user is AUTHENTICATED
// If not, the HOC will redirect to another route (e.g. LandingPage)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {

    // When the component is mounting or updating
    // (because of changes to props or state) there is an if statement
    // that checks if the user is authenticated
    // If the user is not, the HOC will redirect to the signin landing Page
    // url at '/'
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
