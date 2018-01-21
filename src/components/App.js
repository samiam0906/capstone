import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TripSearch from './TripSearch';
import LandingPage from './LandingPage';
// import SignUp from './SignUp';
// import LogIn from './LogIn';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/search" component={TripSearch} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
