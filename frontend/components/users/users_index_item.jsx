import React from 'react';

export default class UsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={this.props.user.id}>{this.props.user.username}</option>
    );
  }
}