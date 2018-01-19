import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Redirect } from 'react-router-dom';

import LandingHeader from './Headers/LandingHeader';
import SignUp from './SignUp';

// Find Todays Date
// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1; // January is month 0
// let yyyy = today.getFullYear();
//
// if (dd < 10) {
//   dd = '0' + dd;
// }
//
// if (mm < 10) {
//   mm = '0' + mm;
// }
//
// today = mm + '/' + dd + '/' + yyyy;

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firedRedirect: false
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ firedRedirect: true });
  //   console.log('Redirect status: ', this.state.firedRedirect);
  // }

  render() {
    // Change the pathname when we search for travel info onSubmit
    // const currentPath = window.location.pathname;
    // if (this.state.firedRedirect && currentPath !== '/search-results') {
    //   return (
    //     <Redirect to="/search-results" />
    //   )
    // }

    return (
      <div>
        <LandingHeader />

        <SignUp></SignUp>
      </div>
    );
  }
}

export default LandingPage;
