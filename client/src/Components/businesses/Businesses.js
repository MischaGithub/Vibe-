import React, { Fragment, useContext, useEffect } from "react";
import BusinessItem from "./BusinessItem";
import BusinessContext from "../../context/business/businessContext";

const Businesses = () => {
  // Initializing the context
  const businessContext = useContext(BusinessContext);

  // Pulling out the details
  const { businesses, search, getBusiness, loading } = businessContext;

  useEffect(() => {
    getBusiness();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {search !== null
        ? search.map((business) => (
            <BusinessItem key={business._id} business={business} />
          ))
        : businesses.map((business) => (
            <BusinessItem key={business._id} business={business} />
          ))}
    </Fragment>
  );
};
export default Businesses;
