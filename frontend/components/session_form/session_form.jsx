import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let state;
    if (this.props.formType === "login") {
      state = {
        email: "",
        password: ""
      };
    } else {
      state = { email: "", password: "", username: "" };
    }
    this.state = state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  update(field) {
    return e => this.setState({[field]: e.traget.value });
  }

  render() {
    let title, username;
    if (this.props.formType === "signup") {
      title = "Sign Up";
      username = (
        <input
          className="session-form-txt"
          placeholder="Username"
          type="text"
          value={this.state.username}
          onChange={this.update("username")}
        />
      );
    } else {
      title = "Login";
      username = <div></div>;
    }
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1 className="session-form-title">{title}</h1>
          {username}
          <input 
            className="session-form-txt"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")}
          />
          <input 
            className="session-form-txt"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
          />
          <input type="submit" value={title} className="submit-btn"/>
        </form>
        </div>
    );
  }
}
