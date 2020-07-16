import React from "react";

const SearchBar = () => {
  return (
    <form className="form">
      <div className="search-wrapper">
        <button className="btn btn-dark">Location</button>
        <input type="text" name="text" placeholder="Where..." />
      </div>
    </form>
  );
};

export default SearchBar;
