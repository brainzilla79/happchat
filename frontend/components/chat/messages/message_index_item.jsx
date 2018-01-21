import React from "react";
import moment from "moment";

export default class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const createdAt = this.props.message.created_at;
    return (
      <li className="msg">
        <div className="msg-username">
          {this.props.message.username}
          <span className='created-at'>{moment(createdAt).calendar()}</span>
        </div>
        <div className="msg-body">{this.props.message.body}</div>
      </li>
    );
  }
}
