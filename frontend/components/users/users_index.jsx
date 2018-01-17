import React from "react";
import UsersIndexItem from "./users_index_item";

export default class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const users = this.props.users.map(user => (
      <UsersIndexItem key={user.id} user={user} />
    ));
    return (
      <select multiple name="users" id="users-select">
        {users}
      </select>
    );
  }
}
