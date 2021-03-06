import React from "react";
import BusinessItem from "./BusinessItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Businesses = ({ businesses, filterText, loading }) => {
  // filteredBusinesses
  const filteredBusinesses = businesses.filter((business) => {
    return filterText
      ? business.category.toLowerCase().includes(filterText)
      : business;
  });

  // displayNoResults
  const displayNoResults = filteredBusinesses.length !== 0 || !filterText;

  const searchResults = filteredBusinesses.length > 0;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {searchResults ? (
          <div>
            <h2 className="text-center bg-dark">
              <i
                className="fa fa-list-alt"
                aria-hidden="true"
                style={{ marginRight: "0.5rem" }}
              />
              Search Results
            </h2>
          </div>
        ) : (
          businesses.category
        )}
        {/* Mapping through the business and showing results of filteredBusinesses */}
        {filteredBusinesses.map((filteredBusiness) => (
          <BusinessItem
            key={filteredBusiness._id}
            business={filteredBusiness}
          />
        ))}

        {/* So here if the business category does not match anything in the db then so a h1 with No Match */}

        {displayNoResults ? (
          businesses.category
        ) : (
          <div>
            <h1 className="text-center bg-dark">
              <i
                className="fa fa-exclamation-circle"
                style={{ marginRight: "0.5rem" }}
              />
              No Match
            </h1>
          </div>
        )}
      </div>
    );
  }
};

Businesses.propTypes = {
  businesses: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Businesses;
