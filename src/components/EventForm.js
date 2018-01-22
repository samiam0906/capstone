import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      errors: {}
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { title, errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Event</h1>

        <label>Event Title</label>
        <input type="text" name="title" />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    )
  }
}

// EventForm.propTypes = {
//   createEvent: React.PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createEvent: createEvent
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
