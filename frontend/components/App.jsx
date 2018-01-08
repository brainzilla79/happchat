import React from "react";
import Header from "./header/header";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import Footer from "./footer/footer";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import ChatViewContainer from "./chat/chat_view_container";
import ChatView from "./chat/chat_view";
import SplashPage from "./splash_page/splash_page";

const App = () => (
  <div>
    <Header />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/messages" component={ChatView} />
    </Switch>
    <Footer />
  </div>
);

export default App;
