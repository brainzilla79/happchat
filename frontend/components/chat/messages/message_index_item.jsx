import React from "react";

export default class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="msg">
        <div className="msg-username">{this.props.message.username}</div>
        <div className="msg-body">{this.props.message.body}</div>
      </li>
    );
  }
}
