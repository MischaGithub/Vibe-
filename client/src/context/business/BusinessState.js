import React, { useReducer } from "react";
import axios from "axios";

import BusinessContext from "../business/businessContext";
import businessReducer from "../business/businessReducer";
import {
  SEARCH_BUSINESS,
  CLEAR_SEARCH,
  GET_BUSINESS,
  CLEAR_BUSINESS,
  BUSINESS_ERROR,
} from "../types";

const BusinessState = (props) => {
  const initialState = {
    businesses: [],
    error: null,
    search: null,
  };

  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Get Business
  const getBusiness = async () => {
    try {
      const res = await axios.get("/api/businesses");

      dispatch({
        type: GET_BUSINESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BUSINESS_ERROR,
        payload: err.response.msg,
      });
    }
  };
  // Search Business
  // Find a business based on its catergory
  const searchBusiness = (catergory) => {
    dispatch({ type: SEARCH_BUSINESS, payload: catergory });
  };

  // Clear Search
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  // Set Current Business

  return (
    <BusinessContext.Provider
      value={{
        businesses: state.businesses,
        search: state.search,
        searchBusiness,
        clearSearch,
        getBusiness,
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessState;
