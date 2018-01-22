import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// If a user is already authenticated and thus signed in, they will be
// redirected to their own dashboards instead of signup pages when they
// go to the '/signup' url

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/secret');
      }
    }

    componentWillUpdate() {
      if (this.props.authenticated) {
        this.props.history.push('/secret');
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

  return connect(mapStateToProps)(NotAuthentication);
}
