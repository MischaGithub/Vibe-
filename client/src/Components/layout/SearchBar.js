import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({
  searchCategory,
  showClear,
  clearBusinesses,
  setAlert,
}) => {
  // State
  const [catergory, setCatergory] = useState("");

  //  onChange
  const onChange = (e) => {
    setCatergory(e.target.value);
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (catergory === "") {
      setAlert("Please enter a category", "dark");
    } else {
      searchCategory(catergory);
      setCatergory("");
    }
  };

  return (
    <div className="conatiner">
      <form onSubmit={onSubmit}>
        <div className="search-wrapper">
          <span className="search-span">Search</span>
          <input
            type="text"
            name="catergory"
            placeholder="What are you looking for..."
            value={catergory}
            onChange={onChange}
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </div>
      </form>
      {showClear && (
        <button
          className="clear-btn btn-dark btn-block"
          onClick={clearBusinesses}
        >
          {" "}
          Clear Search
        </button>
      )}
    </div>
  );
};

// Proptypes
SearchBar.propTypes = {
  searchCategory: PropTypes.func.isRequired,
  clearBusinesses: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default SearchBar;
