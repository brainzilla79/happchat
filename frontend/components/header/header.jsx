import React from "react";
import AuthNavContainer from "../nav/auth_nav_container";

export default class Header extends React.Component {
  render() {
    return <div className="header">
        <div className="logo">
          <div className="logo-img">
            <div className="logo-bar" id="bar3" />
            <div className="logo-bar" id="bar1" />
            <div className="logo-bar" id="bar2" />
          </div>
          <h1 className="logotype">happchat</h1>
        </div>
        <AuthNavContainer />
      </div>;
  }
}
