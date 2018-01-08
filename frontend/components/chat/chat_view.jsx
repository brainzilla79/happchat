import React from 'react';
import ChannelIndexContainer from './channels/channel_index_container';
import MessagesIndexContainer from './messages/messages_index_container';

export default class ChatView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="chat-view-container">
      <ChannelIndexContainer />
      <MessagesIndexContainer/>
      {/* <MessagesFormContainer/> */}
    </div>
    );
  }
}