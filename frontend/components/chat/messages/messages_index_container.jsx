import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessagesIndex from "./messages_index";
import { getChannelMessages } from "../../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.values(state.messages),
    channel: state.channels[ownProps.match.params.channelId]
  };
};

const mapDispatchToProps = state => dispatch => ({
  getChannelMessages: channelId => dispatch(getChannelMessages(channelId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MessagesIndex)
);
