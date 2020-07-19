import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="search-wrapper">
        <span className="search-span">Search</span>
        <input
          className="search-input"
          type="text"
          name="text"
          placeholder="What are you looking for..."
        />
        <button className="search-btn">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
