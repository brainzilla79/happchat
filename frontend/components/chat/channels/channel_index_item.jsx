import React from "react";
import { Link } from "react-router-dom";

export default class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        # <Link to={`/messages/${this.props.channel.id}`}>
          {this.props.channel.name}
        </Link>
      </li>
    );
  }
}
