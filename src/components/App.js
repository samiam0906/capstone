import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
