import React, { useContext, useRef, useEffect } from "react";
import BusinessContext from "../../context/business/businessContext";

const SearchBar = () => {
  // Context
  const businessContext = useContext(BusinessContext);

  // Pull from businessContext
  const { searchBusiness, clearSearch, search } = businessContext;

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="search-wrapper">
        <span className="search-span">Search</span>
        <input
          className="search-input"
          type="text"
          placeholder="What are you looking for..."
        />
        <button type="submit" className="search-btn" t>
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
