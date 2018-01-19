import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../actions/userActions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

// Post new user to users table
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUpRequest(this.state);
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="firstName" placeholder="First name" onChange={this.onChange} />
          <input type="text" name="lastName" placeholder="Last name" onChange={this.onChange} />
          <input type="text" name="email" placeholder="email" onChange={this.onChange} />
          <input type="text" name="password" placeholder="Create Password" onChange={this.onChange} />
          <input type="text" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.onChange} />
          <input type="submit" name="submit" value="Create Account" onChange={this.onChange} />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userSignUpRequest: userSignUpRequest }, dispatch);
}

// SignUpForm.propTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
