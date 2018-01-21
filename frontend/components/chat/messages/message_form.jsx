import React from "react";

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleSubmit() {
    const message = { body: this.state.body, channel_id: this.props.channelId };
    this.props.createChannelMessage(message);
    this.setState({ body: "" });
  }

  update() {
    return e => this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div>
        <form className='msg-form' onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update()}
            className="msg-form-body"
          />
          <input type="submit" value="Send" className="msg-form-submit" />
        </form>
      </div>
    );
  }
}
