import React from "react";
import BusinessItem from "./BusinessItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Businesses = ({ businesses, category, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={businessStyle}>
        {businesses
          .filter((business) =>
            category ? business.catergory === category : business
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

const businessStyle = {
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Businesses;
