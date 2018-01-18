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
function mapStateToProps(state) {
  return {

  }
}


// Making this container and making it aware of the applications store
// or user data and then exporting it
// Now this is a smart component aka container.
export default connect(mapStateToProps)(PlannerDashboard);
