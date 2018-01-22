import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

class Navbar extends Component {

  logout = (e) => {
    e.preventDefault();
    // logout action will go below
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">Sign Up</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container">

          <div className="navbar-header">
            <Link to="/" className="navbar-brand"><span className="brand">Auth-app</span></Link>
          </div>

          <div className="collapse navbar-collapse">
            {/* conditionally render links */}
            { isAuthenticated ? userLinks : guestLinks }
          </div>

        </div>
      </nav>
    );
  }
}

// Navbar.propTypes = {
//   auth : React.PropTypes.object.isRequired,
//   logout: React.PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: logout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
