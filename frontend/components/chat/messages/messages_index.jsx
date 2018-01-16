import React from "react";
import MessageIndexItem from "./message_index_item";
import MessageFormContainer from './message_form_container';

export default class MessagesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getChannelMessages(this.props.match.params.channelId);
  }

  render() {
    const messages = this.props.messages.map(message => (
      <MessageIndexItem key={message.id} message={message} />
    ));
    return (
      <div className="message-index">
        <h1></h1>
        <ul className="message-list">{messages}</ul>
        <MessageFormContainer />
      </div>
    );
  }
}
