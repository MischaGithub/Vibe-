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
            filterText ? business.category === filterText : business
          )
          .map((filteredBusiness) => (
            <BusinessItem
              key={filteredBusiness._id}
              business={filteredBusiness}
            />
          ))}
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
