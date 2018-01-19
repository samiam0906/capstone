import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Email</label>
            <input type="text" name="email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>

          <div>
            <input type="submit" name="submit" value="Log In" />
          </div>
        </form>
      </div>
    )
  }
}

// Takes a piece of application store / state and passes it in
// to your component as a property (props)
// We are connecting your main state (or part of the apps store) and passing it
// into the container as properties
// function mapStateToProps(state) {
//   return {
//
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ logIn: logIn }, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default LogIn;
