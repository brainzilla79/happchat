import React from "react";
import Header from "./header/header";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from './session_form/session_form_container';
import Footer from "./footer/footer";

const App = () => (
  <div>
    <Switch />
    <Header />
    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
    <Footer/>
  </div>
);

export default App;
