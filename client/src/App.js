import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/TopNav";
import Alerts from "./Components/layout/Alerts";
import "./App.css";

import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alerts/AlertState";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />

            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
