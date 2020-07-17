import React from "react";

const SearchBar = () => {
  return (
    <form className="form">
      <div className="search-wrapper">
        <span className="search-span">Search</span>
        <input
          className="search-input"
          type="text"
          name="text"
          placeholder="What are you looking for..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
