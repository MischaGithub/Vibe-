import React from "react";
import BusinessItem from "./BusinessItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Businesses = ({ businesses, filterText, loading }) => {
  const filteredBusinesses = businesses.filter((business) =>
    filterText ? business.category.includes(filterText) : business
  );

  const displayNoResults = filteredBusinesses.length !== 0 || !filterText;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
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
            <p className=" text-center bg-dark">
              Oops! Check spelling and avoid spaces the category you looking for
            </p>
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
