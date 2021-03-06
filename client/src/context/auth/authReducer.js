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

    // ALL SUCCESS CASES
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      // Set THE token to localStorage
      localStorage.setItem("token", action.payload.token);
      return {
        // State
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    // ALL FAIL CASES & LOGOUT
    case SIGN_UP_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
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
    // CLEAR ERRORS
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
