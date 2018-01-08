import React from 'react';

export default class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
      <div>{this.props.message.user.username}</div>
      <div>{this.props.message.body}</div>
      </li>
    );
  }
}