import React from "react";
import UsersIndexContainer from "../../users/users_index_container";

export default class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const usersSelect = document.getElementById("users-select");
    const userOptions = Array.from(usersSelect.options);
    const userIds = userOptions
      .filter(option => option.selected)
      .map(opt => opt.value);
    const channel = this.state;
    this.props.createChannel(channel, userIds);
    this.setState({ body: "" });
  }

  update() {
    return e => this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.update()}
            placeholder="Name"
          />
          <UsersIndexContainer />
          <input type="submit" value="Create Channel" />
        </form>
      </div>
    );
  }
}
