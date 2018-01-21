import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validateInput from '../server/shared/validations/logIn';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: '',
      errors: {}
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {} });
    }
  }

  render() {
    const {errors, identifier, password } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <div>
            <label>Email</label>
            <input type="text" name="identifier" onChange={this.onChange} />
            {errors.identifier && <span>{errors.identifier}</span>}
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={this.onChange} />
            {errors.password && <span>{errors.password}</span>}
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
