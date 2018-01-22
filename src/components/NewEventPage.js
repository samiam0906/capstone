import React, { Component } from 'react';
import EventForm from './EventForm';

// move this component to events folder in re-org
class NewEventPage extends Component {
  render() {
    return (
      <div>
        <EventForm />
      </div>
    );
  }
}

export default NewEventPage;
