import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './message_form';
import { createChannelMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  channelId: ownProps.match.params.channelId
});

const mapDispatchToProps = state => dispatch => ({
  createChannelMessage: message => dispatch(createChannelMessage(message))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm));