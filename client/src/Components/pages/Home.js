import React, { Fragment, Component } from "react";
import SearchBar from "../layout/SearchBar";
import SearchSuggestion from "../layout/SearchSuggestion";
import Businesses from "../businesses/Businesses";
import BusinessState from "../../context/business/BusinessState";
import axios from "axios";

class Home extends Component {
  state = {
    businesses: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("/api/businesses");

    this.setState({ businesses: res.data, loading: false });
  }

  // searchCatergory of what the user inserts
  searchCatergory = async (catergory) => {
    const res = await axios.get(`/api/businesses/catergory?${catergory}`);

    this.setState({ businesses: res.data.items, loading: false });
  };
  render() {
    return (
      <BusinessState>
        <Fragment>
          {/*The search and location bar */}
          <div className="search-container">
            <SearchBar searchCatergory={this.searchCatergory} />
          </div>

          {/* This is the suggestion icons */}
          <div className="suggestion-container">
            <SearchSuggestion />
          </div>

          <div className="container">
            <Businesses
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
