import React from "react";

const SearchBar = () => {
  return (
    <form className="form">
      <div className="search-wrapper">
        <span className="search-span">Location</span>
        <input
          className="search-input"
          type="text"
          name="text"
          placeholder="Where..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
