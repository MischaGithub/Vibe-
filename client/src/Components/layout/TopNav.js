import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const TopNav = () => {
  // AuthContext
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout_user, user } = authContext;

  // onLogout
  const onLogout = () => {
    logout_user();
  };

  // authLinks
  const authLinks = (
    <Fragment>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li className="hide-sm">Hello {user && user.name}</li>
          <li>
            <a onClick={onLogout} href="/login">
              <i className="fas fa-sign-out-alt" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  // guestLinks
  const guestLinks = (
    <Fragment>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Sign-up</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
  return <ul>{isAuthenticated ? authLinks : guestLinks}</ul>;
};

export default TopNav;
