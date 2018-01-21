import React from "react";

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.getElementById('msg-input').focus();
  }

  handleSubmit() {
    const message = { body: this.state.body, channel_id: this.props.channel.id };
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
            id='msg-input'
            className="msg-form-body"
            placeholder={`Message #${this.props.channel.name}`}
          />
          {/* <input type="submit" value="Send" className="msg-form-submit" /> */}
        </form>
      </div>
    );
  }
}
