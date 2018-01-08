import React from "react";
import ChannelIndexItem from './channel_index_item';

export default class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllChannels();
  }

  render() {
    const channels = this.props.channels.map(channel => (
      <ChannelIndexItem key={channel.id} channel={channel} />
    ));
    return <div className="channels-sidebar">
        <div className="channels-header">
          <h1>Channels</h1>
          <i className="fa fa-plus" aria-hidden="true" />
        </div>
        <ul className="channels-list">{channels}</ul>
      </div>;
  }
}
