import React from "react";

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav">
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
  );
};

export default TopNav;
