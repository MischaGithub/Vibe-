import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import "./App.css";

import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
