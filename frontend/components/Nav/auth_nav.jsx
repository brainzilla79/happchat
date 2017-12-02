import React from "react";
import { Link } from "react-router-dom";

export default class AuthNav extends React.Component {
  render() {
    if (this.props.currentUser) {
      return <div />;
    } else {
      return (
        <div className="auth-nav">
          <ul>
            <li><Link to={`/signup`}>Register</Link></li>
            <li><Link to={`/login`}>Log In</Link></li>
          </ul>
        </div>
      );
    }
  }
}
