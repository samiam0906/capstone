import React, { Component } from 'react';
import { connect } from 'react-redux';

// connected component bc we need data from store
class FlashMessage extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.onClick
  // }

  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;

    return (
      <div>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    )
  }
}

// FlashMessage.propTypes = {
//   messages: React.PropTypes.array.isRequired.,
//   deleteFlashMessage: React.PropTypes.func.isRequired.
// }

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps)(FlashMessage);
