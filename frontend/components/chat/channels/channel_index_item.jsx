import React from "react";
import { Link } from "react-router-dom";

export default class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/channels/${this.props.channel.id}/messages`}>
          {this.props.channel.name}
        </Link>
      </li>
    );
  }
}
