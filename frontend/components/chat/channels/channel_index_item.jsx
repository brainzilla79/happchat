import React from 'react';

export default class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.channel.name}</div>
  }
}