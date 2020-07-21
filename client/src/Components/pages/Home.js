import React, { Fragment, Component } from "react";
import SearchBar from "../layout/SearchBar";
import SearchSuggestion from "../layout/SearchSuggestion";
import SearchAlert from "../layout/SearchAlert";
import Businesses from "../businesses/Businesses";
import BusinessState from "../../context/business/BusinessState";
import axios from "axios";

class Home extends Component {
  state = {
    businesses: [],
    loading: false,
    category: "",
    alert: null,
  };

  // searchCatergory of what the user inserts
  searchCategory = async (catergory) => {
    this.setState({ loading: true });
    const res = await axios.get("/api/businesses");

    this.setState({ businesses: res.data, loading: false });

    this.setState({
      category: catergory.charAt(0).toUpperCase() + catergory.substring(1),
    });
  };

  // Clear search from state
  clearBusinesses = () => this.setState({ businesses: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    // Timeout
    setTimeout(() => this.setState({ alert: null }), 1000);
  };
  render() {
    const { businesses, loading, category } = this.state;
    return (
      <BusinessState>
        <Fragment>
          <SearchAlert alert={this.state.alert} />
          {/*The search and location bar */}
          <div className="search-container">
            <SearchBar
              searchCategory={this.searchCategory}
              clearBusinesses={this.clearBusinesses}
              showClear={businesses.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
          </div>

          {/* This is the suggestion icons */}
          <div className="suggestion-container">
            <SearchSuggestion />
          </div>

          <div className="container">
            <Businesses
              category={category}
              loading={loading}
              businesses={businesses}
            />
          </div>
        </Fragment>
      </BusinessState>
    );
  }
}

export default Home;
