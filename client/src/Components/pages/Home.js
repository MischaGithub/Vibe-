import React, { Fragment, useState } from "react";
import SearchBar from "../layout/SearchBar";
import SearchSuggestion from "../layout/SearchSuggestion";
import SearchAlert from "../layout/SearchAlert";
import Businesses from "../businesses/Businesses";
import BusinessState from "../../context/business/BusinessState";
import axios from "axios";

const Home = () => {
  // States
  const [businesses, setBusinesses] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const state = [(businesses: [])];
  // searchCatergory of what the user inserts
  const searchCategory = async (catergory) => {
    setLoading(true);
    const res = await axios.get("/api/businesses");

    useState((businesses: res.dat));
    setLoading(false);

    setCategory({
      category: catergory.charAt(0).toUpperCase() + catergory.substring(1),
    });
  };

  // Clear search from state
  const clearBusinesses = () => {
    setBusinesses([]);
    setLoading(false);
  };

  // Set Alert
  const Alert = (msg, type) => {
    setAlert({ alert: { msg, type } });

    // Timeout
    setTimeout(() => setAlert(null), 1000);
  };

  return (
    <BusinessState>
      <Fragment>
        <SearchAlert alert={alert} />
        {/*The search and location bar */}
        <div className="search-container">
          <SearchBar
            searchCategory={searchCategory}
            clearBusinesses={clearBusinesses}
            showClear={businesses.length > 0 ? true : false}
            setAlert={Alert}
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
};

export default Home;
