import React, { Fragment, Component } from "react";
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
import setAuthToken from "./utils/setAuthToken";

// Check localStorage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
  render() {
    return (
      <AuthState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />

              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </AuthState>
    );
  }
}

export default App;
