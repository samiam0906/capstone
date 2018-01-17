import React, { Component } from 'react';
import SignUpHeader from './Headers/SignUpHeader';

class SignUp extends Component {
  render() {
    return (
      <div>
        <SignUpHeader />

        <h3>Sign Up</h3>
        <form>
          <input type="text" name="firstName" placeholder="First name" />
          <input type="text" name="lastName" placeholder="Last name" />
          <input type="text" name="email" placeholder="email" />
          <input type="submit" name="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default SignUp;
