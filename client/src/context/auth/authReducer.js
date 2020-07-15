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

export default (state, action) => {
  switch (action.type) {
    // USER LOADED
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    // SIGN_UP SUCCESS
    case SIGN_UP_SUCCESS:
      // Set THE token to localStorage
      localStorage.setItem("token", action.payload.token);
      return {
        // State
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    // SIGN_UP FAIL
    case SIGN_UP_FAIL:
    case AUTH_ERROR:
      // Remove the token from localStorage
      localStorage.removeItem("token");
      return {
        // State
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      // All errors
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
