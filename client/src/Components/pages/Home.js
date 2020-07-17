import React, { useContext, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import SearchBar from "../layout/SearchBar";
import LocationBar from "../layout/LocationBar";
import SearchSuggestion from "../layout/SearchSuggestion";

const Home = ({ title, icon }) => {
  // AuthContext
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.load_user();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {/* Website icon */}
      <div className="home-container">
        <h1 className="bg-dark">
          <i className={icon} /> {title}
        </h1>
      </div>

      {/*The search and location bar */}
      <div className="search-container">
        <SearchBar />
        <LocationBar />
        <button className="search-btn">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>

      {/* This is the suggestion icons */}
      <div className="suggestion-container">
        <SearchSuggestion />
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Home.defaultProps = {
  title: "Vibe",
  icon: "fa fa-vimeo-square",
};
export default Home;
