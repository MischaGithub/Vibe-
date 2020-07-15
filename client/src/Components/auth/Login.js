import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";
import PropTypes from "prop-types";

const Login = (props, { title, icon }) => {
  // Alert Context
  const alertContext = useContext(AlertContext);

  // Auth Context
  const authContext = useContext(AuthContext);

  // Set Alert
  const { setAlert } = alertContext;

  // Sign_up
  const { login_user, error, clear_errors, isAuthenticated } = authContext;

  // UseEffect
  useEffect(() => {
    // Checking if isAuthenticated and then redirect to the home page
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clear_errors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

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

    // Check if fields are filled in
    if (email === "" || password === "") {
      setAlert("Please make sure all fields are filled in", "danger");
    } else {
      login_user({
        email,
        password,
      });
    }
  };

  const { email, password } = user;

  return (
    <div className="form-container">
      <h1 className="bg-dark">
        <i className={icon} /> {title}
      </h1>
      <h1>
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
