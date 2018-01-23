import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignUpRequest, doesUserExist } from '../actions/userActions';
import { addFlashMessage } from '../actions/addFlashMessage';
import { withRouter } from 'react-router-dom';
import validateInput from '../server/shared/validations/signUp';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      hashed_password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
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

  checkUserExists = (e) => {
    const field = e.target.name;
    const val = e.target.value;

    if (val !== '') {
      this.props.doesUserExist(val).then(res => {
        let errors = this.state.errors;
        if (res.data.user) {
          errors[field] = "There is user with such " + field;
        } else {
          errors[field] = '';
        }
        this.setState({ errors })
      })
    }
  }

// Post new user to users table
  onSubmit = (e) => {
    e.preventDefault();

    // if state isValid (returns true) we make this ajax request
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.userSignUpRequest(this.state).then(
        // Redirect users after a successful signup
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have signed up successfully. Welcome!'
          })
          this.props.history.push('/search');
        },
        (err) => {
          console.log(err.response)
          this.setState({ errors: err.response.data })
        }
      )
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit} >
          <div>
            <input type="text" name="firstName" placeholder="First name" onChange={this.onChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>

          <div>
            <input type="text" name="lastName" placeholder="Last name" onChange={this.onChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>

          <div>
            <input type="text" name="email" placeholder="email" onChange={this.onChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div>
            <input type="password" name="hashed_password" placeholder="Create Password" onChange={this.onChange} />
            {errors.hashed_password && <span>{errors.hashed_password}</span>}
          </div>

          <div>
            <input type="password" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.onChange} />
            {errors.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
          </div>

          <div>
            <input type="submit" name="submit" value="Create Account" onChange={this.onChange} />
          </div>
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
  return bindActionCreators({
    userSignUpRequest: userSignUpRequest,
    doesUserExist: doesUserExist,
    addFlashMessage: addFlashMessage
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
