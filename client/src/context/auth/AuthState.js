import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

import {
  USER_LOADED,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  LOGOUT,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const load_user = async () => {
    // Check localStorage
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      // Get req
      const res = await axios.get("/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Sign Up User
  const sign_up = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Response
      const res = await axios.post("/api/users", formData, config);

      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
      });

      load_user();
    } catch (err) {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login_user = () => console.log("Login user");

  // Logout
  const logout_user = () => console.log("Logout user");

  // Clear Errors
  const clear_errors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        sign_up,
        load_user,
        login_user,
        logout_user,
        clear_errors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
