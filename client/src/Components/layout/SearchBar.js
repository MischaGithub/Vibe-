import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({
  searchCategory,
  showClear,
  clearBusinesses,
  setAlert,
}) => {
  // State
  const [filterText, setFilterText] = useState("");

  //  onChange
  const onChange = (e) => {
    setFilterText(e.target.value);
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (filterText === "") {
      setAlert("Please enter a category", "dark");
    } else {
      searchCategory(filterText);
      setFilterText("");
    }
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={onSubmit}>
        <div className="search-wrapper">
          <span className="search-span">Search</span>
          <input
            type="text"
            name="catergory"
            placeholder="Burgers, Sushi, Bar, Beer, Clubs..."
            value={filterText}
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
