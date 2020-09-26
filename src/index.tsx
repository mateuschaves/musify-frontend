import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MusicsScreen from "./pages/MusicsScreen";
import SignupScreen from "./pages/SignupScreen";
import SigninScreen from "./pages/SignupScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <MusicsScreen />
        </Route>
        <Route exact path="/musics">
          <MusicsScreen />
        </Route>
        <Route exact path="/signup">
          <SignupScreen />
        </Route>
        <Route exact path="/signin">
          <SigninScreen />
        </Route>
      </Switch>
    </Router>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
