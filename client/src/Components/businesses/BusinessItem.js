import React from "react";
import PropTypes from "prop-types";

const BusinessItem = ({
  business: { name, image_url, review_count, rating, address, phone, location },
}) => {
  return (
    // This is all the fields that will be displayed on the cards after search is done
    <div className="container">
      <div className="card grid-3">
        <div>
          <img src={image_url} alt="" />
        </div>

        <div className=" text-left">
          <h3 className="left-header">{name}</h3>
          <ul className="List">
            <li className="my-1">
              Reviews:
              {review_count}
            </li>
            <li className="my-1">
              Rating
              {rating}
            </li>
            <li className="my-1">Phone: {phone}</li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="left-header">Physical Address</h4>
          <ul className="List">
            <li className="my-1">Address: {address}</li>
            <li className="my-1">Location: {location}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Business PropTypes
BusinessItem.propTypes = {
  business: PropTypes.object.isRequired,
};

export default BusinessItem;
