import React from "react";
import MessageIndexItem from "./message_index_item";
import MessageFormContainer from "./message_form_container";

export default class MessagesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.channelId) {
      this.props.getChannelMessages(this.props.match.params.channelId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.channelId !== nextProps.match.params.channelId
    ) {
      this.props.getChannelMessages(nextProps.match.params.channelId);
    }
  }

  render() {
    if (this.props.channel) {
      const messages = this.props.messages.map(message => (
        <MessageIndexItem key={message.id} message={message} />
      ));
      return <div className="msg-index">
          <div className='msg-header'>
            <h1 className="channel-name">{this.props.channel.name}</h1>
          </div>
          <div className="msg-container">
            <ul className="msg-list">{messages}</ul>
            <MessageFormContainer />
          </div>
        </div>;
    } else {
      return <div />;
    }
  }
}
