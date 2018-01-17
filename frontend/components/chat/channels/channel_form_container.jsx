import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  channel: state.channels[ownProps.match.params.channelId]
});

const mapDispatchToProps = (state, ownProps) => dispatch => ({
  createChannel: (channel, userIds) => dispatch(createChannel(channel, userIds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);