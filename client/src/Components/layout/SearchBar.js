import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    catergory: "",
  };

  //  onChange
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchCatergory(this.state.catergory);
    this.setState({ catergory: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="search-wrapper">
          <span className="search-span">Search</span>
          <input
            type="text"
            name="catergory"
            placeholder="What are you looking for..."
            value={this.state.catergory}
            onChange={this.onChange}
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
