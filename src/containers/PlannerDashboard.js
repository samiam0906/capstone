import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlannerDashboardHeader from '../components/Headers/PlannerDashboardHeader';

class PlannerDashboard extends Component {
  render() {
    return (
      <div>
        <PlannerDashboardHeader />
        Welcome to your Planning Dashboard

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

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ action: action }, dispatch);
}


// Making this container and making it aware of the applications store
// or user data and then exporting it
// Now this is a smart component aka container.
export default connect(mapStateToProps, mapDispatchToProps)(PlannerDashboard);
