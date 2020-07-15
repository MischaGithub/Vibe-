import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ title, icon }) => {
  // State
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // onChange
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");
  };

  const { email, password } = user;

  return (
    <div className="form-container">
      <h1>
        <h1 className="bg-dark">
          <i className={icon} /> {title}
        </h1>
        Account <span className="text-danger">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <input type="submit" value="Login" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};

Login.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Login.defaultProps = {
  title: "Vibe",
  icon: "fa fa-vimeo-square",
};

export default Login;
