import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import validateInput from '../server/shared/validations/logIn';
import { logIn, signInAction } from '../actions/userActions';


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
      this.props.logIn(this.state).then(
        // Redirect users after successful login
        () => {
          this.props.history.push('/search');
        },
        (err) => {
          console.log(err)
          this.setState({ errors: err.response.data })
        }
      )
    }
  }

  errorMessage = () => {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      )
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

          { errors.form && <div>{errors.form}</div>}
        </form>



        {/* {this.errorMessage()} */}

        {/* <Link className="google-btn" to="/auth/google">Google+</Link>

        <Link to="/protected">Protected Page</Link> */}
      </div>
    )
  }
}

// Takes a piece of application store / state and passes it in
// to your component as a property (props)
// We are connecting your main state (or part of the apps store) and passing it
// into the container as properties
function mapStateToProps(state) {
  return {
    userData: state,
    // errorMessage: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logIn: logIn,
    // signInAction: signInAction
  },
  dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
