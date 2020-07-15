import axios from "axios";

// setAuthToken which is going to take in a token
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // Delete the token
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
