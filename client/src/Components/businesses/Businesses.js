import React from "react";
import BusinessItem from "./BusinessItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Businesses = ({ businesses, category, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {businesses
          .filter((business) =>
            category ? business.category === category : business
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
  category: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Businesses;
