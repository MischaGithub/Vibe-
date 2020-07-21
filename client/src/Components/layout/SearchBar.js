import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    catergory: "",
  };

  // Proptypes
  static propTypes = {
    searchCategory: PropTypes.func.isRequired,
    clearBusinesses: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  //  onChange
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.catergory === "") {
      this.props.setAlert("Please enter a category", "dark");
    } else {
      this.props.searchCategory(this.state.catergory);
      this.setState({ catergory: "" });
    }
  };
  render() {
    const { showClear, clearBusinesses } = this.props;
    return (
      <div className="conatiner">
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
  }
}

export default SearchBar;
