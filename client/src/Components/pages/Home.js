import React, { Fragment, Component } from "react";
import SearchBar from "../layout/SearchBar";
import SearchSuggestion from "../layout/SearchSuggestion";
import SearchAlert from "../layout/SearchAlert";
import Businesses from "../businesses/Businesses";
import BusinessState from "../../context/business/BusinessState";
import axios from "axios";
import PropTypes from "prop-types";

class Home extends Component {
  // PropTypes
  static defaultProps = {
    title: "Vibe",
    icon: "fa fa-vimeo-square",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  // States
  state = {
    businesses: [],
    loading: false,
    filterText: "",
    alert: null,
  };

  // searchCatergory of what the user inserts
  searchCategory = async (filterText) => {
    this.setState({ loading: true });
    const res = await axios.get("/api/businesses");
    this.setState({
      businesses: res.data,
      loading: false,
      filterText: filterText.toLowerCase().trim(),
    });
    // this.setState({
    //   filterText: filterText.toLowerCase().trim(),
    //   // filterText.charAt(32).toLowerCase() + filterText.trim().substring(1),
    // });
  };

  // Clear search from state
  clearBusinesses = () =>
    this.setState({ businesses: [], loading: false, filterText: "" });
  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    // Timeout
    setTimeout(() => this.setState({ alert: null }), 1000);
  };
  render() {
    return (
      <BusinessState>
        <Fragment>
          <div className="home-container">
            <h1 className="bg-dark">
              <i className={this.props.icon} /> {this.props.title}
            </h1>
          </div>

          {/*The search and location bar */}
          <SearchAlert alert={this.state.alert} />
          <div className="search-container">
            <SearchBar
              searchCategory={this.searchCategory}
              clearBusinesses={this.clearBusinesses}
              showClear={this.state.businesses.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
          </div>
          {/* This is the suggestion icons */}
          <div className="suggestion-container">
            <SearchSuggestion />
          </div>

          {/* Business container */}
          <div className="container">
            <Businesses
              filterText={this.state.filterText}
              loading={this.state.loading}
              businesses={this.state.businesses}
            />
          </div>
        </Fragment>
      </BusinessState>
    );
  }
}

export default Home;
