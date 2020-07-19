import React, { Fragment, useContext } from "react";
import BusinessItem from "./BusinessItem";
import BusinessContext from "../../context/business/businessContext";

const Businesses = () => {
  // Initializing the context
  const businessContext = useContext(BusinessContext);

  // Pulling out the details
  const { businesses } = businessContext;

  return (
    <Fragment>
      {businesses.map((business) => (
        <BusinessItem key={business.id} business={business} />
      ))}
    </Fragment>
  );
};
export default Businesses;
