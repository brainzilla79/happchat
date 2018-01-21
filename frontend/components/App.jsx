import React from "react";
import Header from "./header/header";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import Footer from "./footer/footer";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import ChatViewContainer from "./chat/chat_view_container";
import ChannelFormContainer from './chat/channels/channel_form_container';
import SplashPage from "./splash_page/splash_page";

const App = () => (
  <div>
    <Header />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/messages/:channelId?" component={ChatViewContainer} />
      <ProtectedRoute path="/channels/create" component={ChannelFormContainer}/>
    </Switch>
    <Footer />
  </div>
);

export default App;
