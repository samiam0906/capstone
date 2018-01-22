import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
import SecretPage from './SecretPage';
import TripSearch from './TripSearch';
import LandingPage from './LandingPage';
import NewEventPage from './NewEventPage';

import requireAuth from './require_auth';
import noRequireAuth from './no_require_auth';

import { AUTHENTICATED } from '../actions/userActions';

const user = localStorage.getItem('user');

// if (user) {
//   store.dispatch({ type: AUTHENTICATED });
// }

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/search" component={TripSearch} />

          <Route path="/secret" component={requireAuth(SecretPage)} />

          <Route path="/new-event" component={NewEventPage} />

          <Route exact path="/" component={noRequireAuth(LandingPage)} />
        </Switch>
      </div>
    );
  }
}

export default App;
