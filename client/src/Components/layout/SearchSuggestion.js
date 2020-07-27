import React from "react";

const SearchSuggestion = () => {
  return (
    // Displaying suggestion icons
    <div className="suggestions">
      <span className="suggestions-span ">
        Restaurants
        <i className="fa fa-cutlery" aria-hidden="true" />
      </span>
      <span className="suggestions-span ">
        NightLife
        <i className="fa fa-glass" aria-hidden="true" />
      </span>
    </div>
  );
};

export default SearchSuggestion;
