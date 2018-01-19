import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Redirect } from 'react-router-dom';

// import TripSearchHeader from './Headers/LandingHeader';

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

class TripSearch extends Component {
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
        {/* <LandingHeader /> */}

        {/* <h2>Application Name</h2> */}
        <form onSubmit={this.handleSubmit}>
          <div className="enterBudget">
            <label>Budget</label>
            <input type="number" name="budget" placeholder="Enter your budget"/>
          </div>

          <div className="numTravelers">
            <label>Number of Travelers</label>
            <input type="number" name="numTravelers" placeholder="Enter your party size"/>
          </div>

          <br/>

          <h4>Explore</h4>
          <div>
            <input type="text" name="departureCity" placeholder="From" />
            <input type="text" name="arrivalCity" placeholder="To" />
            <input type="date" name="departureDate" />
            <input type="date" name="returnDate" />
          </div>

          <div className="enterDestination">
            <input type="text" name="destination" placeholder="Enter Destination" />
          </div>

          <input type="submit" name="submit" value="Search"/>
        </form>

      </div>
    );
  }
}

export default TripSearch;
