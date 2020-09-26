import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./pages/App";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
