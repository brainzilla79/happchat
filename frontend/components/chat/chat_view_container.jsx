import { connect } from 'react-redux';
import ChatView from './chat_view';
import { getAllChannels } from '../../actions/channel_actions';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = state => ({
  channels: Object.values(state.channels)
});

const mapDispatchToProps = state => dispatch => ({
  getAllChannels: () => dispatch(getAllChannels()),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);
