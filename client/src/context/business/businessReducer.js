import { SEARCH_BUSINESS, CLEAR_SEARCH, GET_BUSINESS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BUSINESS:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_BUSINESS:
      return {
        ...state,
        loading: false,
        search: state.businesses.filter((business) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return business.category.match(regex);
        }),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    default: {
      return state;
    }
  }
};
