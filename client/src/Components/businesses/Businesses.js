import React from "react";
import BusinessItem from "./BusinessItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Businesses = ({ businesses, filterText, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {businesses
          .filter((business) =>
            filterText ? business.category.includes(filterText) : business
          )
          .map((filteredBusiness) => (
            <BusinessItem
              key={filteredBusiness._id}
              business={filteredBusiness}
            />
          ))}
        {/* So here if the business category does not match anything in the db then so a h1 with No Match */}
        {businesses.length === 0 ? (
          businesses.category
        ) : (
          <h1 className="text-center bg-dark">
            <i
              className="fa fa-exclamation-circle"
              style={{ marginRight: "0.5rem" }}
            />
            No Match
          </h1>
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
