import { connect } from 'react-redux';
import { getAllChannels } from '../../../actions/channel_actions';
import ChannelIndex from './channel_index';

const mapStateToProps = state => ({
  channels: Object.values(state.channels)
});

const mapDispatchToProps = state => dispatch => ({
  getAllChannels: () => dispatch(getAllChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);