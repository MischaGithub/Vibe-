import React, { useContext, useRef, useEffect } from "react";
import BusinessContext from "../../context/business/businessContext";

const SearchBar = () => {
  // Context
  const businessContext = useContext(BusinessContext);

  // useRef
  const catergory = useRef("");

  // Pull from businessContext
  const { searchBusiness, clearSearch, search, getBusiness } = businessContext;

  useEffect(() => {
    if (searchBusiness === null) {
      catergory.current.value = "";
    }
  });

  // onSubmit

  // onChange
  const onChange = (e) => {
    if (catergory.current.value !== "") {
      searchBusiness(e.target.value);
    } else {
      clearSearch();
    }
  };

  return (
    <form>
      <div className="search-wrapper">
        <span className="search-span">Search</span>
        <input
          className="search-input"
          type="text"
          placeholder="What are you looking for..."
          onChange={onChange}
        />
        <button type="submit" className="search-btn">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
