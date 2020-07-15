import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  // Alert Context
  const alertContext = useContext(AlertContext);

  // Auth Context
  const authContext = useContext(AuthContext);

  // Set Alert
  const { setAlert } = alertContext;

  // Sign_up
  const { sign_up, error, clear_errors, isAuthenticated } = authContext;

  // UseEffect
  useEffect(() => {
    // Checking if isAuthenticated and then redirect to the home page
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clear_errors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  // State
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // onChange
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name === "" || email === "" || password === "") {
      setAlert("All fields are required", "danger");
    } else if (password !== password2) {
      setAlert("Passwords does not match", "danger");
    } else {
      sign_up({
        name,
        email,
        password,
      });
    }
  };

  const { name, email, password, password2 } = user;

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-danger">Sign-Up</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>

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
            minLength="8"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="8"
          />
        </div>

        <input
          type="submit"
          value="Sign-up"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
