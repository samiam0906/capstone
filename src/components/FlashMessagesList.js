import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../actions/deleteFlashMessage';

// connected component bc we need data from store
class FlashMessagesList extends Component {
  render() {
    const messages = this.props.messages.map(message => <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />);

    return (
      <div>
        {messages}
      </div>
    )
  }
}

// FlashMessagesList.propTypes = {
//   messages: React.PropTypes.array.isRequired,
//   deleteFlashMessage: React.PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteFlashMessage: deleteFlashMessage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList);
