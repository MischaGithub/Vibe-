import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form className="form">
        <div className="search-wrapper">
          <button className="btn btn-dark">Search</button>
          <input
            type="text"
            name="text"
            placeholder="What are you looking for..."
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
