import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Protected = ({ component: Component, path, exact, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const Auth = ({ component: Component, path, exact, loggedIn }) => {
  return (
    <Route
      path={path}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/channels" />
      }
    />
  );
};

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
