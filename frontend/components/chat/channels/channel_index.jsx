import React from "react";
import ChannelIndexItem from './channel_index_item';

export default class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getAllChannels();
  }

  render() {
    const channels = this.props.channels.map(channel => (
      <ChannelIndexItem key={channel.id} channel={channel} />
    ));
    return (<div>
      <h1>Channels</h1>
      <div>{channels}</div>
    </div>);
  }
}
