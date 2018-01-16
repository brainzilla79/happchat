import React from "react";
import ChannelIndexContainer from "./channels/channel_index_container";
import MessagesIndexContainer from "./messages/messages_index_container";

export default class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.addSocket = this.addSocket.bind(this);
  }

  componentDidMount() {
    this.props.getAllChannels();
  }

  setSockets(channels) {
    console.log(channels);
    channels.forEach(channel => this.setSocket(channel.id));
  }

  setSocket(channelId) {
    if (window.App.channel) {
      this.removeSocket();
    }
    this.addSocket(channelId);
  }

  removeSocket() {
    window.App.cable.subscriptions.remove(window.App.channel);
  }

  addSocket(channelId) {
    window.App.channel = window.App.cable.subscriptions.create(
      { channel: "MessagesChannel", channel_id: channelId },
      {
        connected: () => {},
        disconnected: () => {},
        received: message => {
          this.props.receiveMessage(message);
        }
      }
    );
  }

  render() {
    this.setSockets(this.props.channels);
    return (
      <div className="chat-view-container">
        <ChannelIndexContainer />
        <MessagesIndexContainer />
      </div>
    );
  }
}
