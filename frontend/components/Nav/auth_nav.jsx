import React from "react";
import { Link } from "react-router-dom";

export default class AuthNav extends React.Component {
  render() {
    if (this.props.currentUser) {
      return <div className="auth-nav">
          <div id="logout" className="nav-link" onClick={this.props.logout}>
            Logout
          </div>
        </div>;
    } else {
      return (
        <div className="auth-nav">
          <ul>
            <li>
              <Link className="nav-link" to={`/signup`}>
                Register
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={`/login`}>
                Log In
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}
