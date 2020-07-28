import React from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";

const BusinessItem = (props) => {
  const {
    image_url,
    name,
    location,
    rating,
    review_count,
    address,
    phone,
  } = props.business;
  return (
    // This is all the fields that will be displayed on the cards after search is done

    <div className="container">
      <div className="card grid-3">
        <div>
          <img src={image_url} alt="" />
        </div>

        <div className=" text-left">
          <h3 className="left-header">{name}</h3>
          <ul className="list">
            <li className="my-1">
              <i
                class="fa fa-pencil-square"
                aria-hidden="true"
                style={{ paddingRight: "5px" }}
              />
              {review_count}
            </li>
            <li className="my-1">
              <Rating
                emptySymbol="fa fa-star-o fa-1x"
                fullSymbol="fa fa-star fa-1x"
                fractions={2}
                initialRating={rating}
              />
            </li>
            <li className="my-1">
              <i
                class="fa fa-phone-square"
                aria-hidden="true"
                style={{ paddingRight: "5px" }}
              />
              {phone}
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="left-header">Physical Address</h4>
          <ul className="list">
            <li className="my-1">
              <i
                class="fa fa-map-marker"
                aria-hidden="true"
                style={{ paddingRight: "5px" }}
              />
              {address}
            </li>
            <li className="my-1">
              <i
                class="fa fa-location-arrow"
                aria-hidden="true"
                style={{ paddingRight: "5px" }}
              />
              {location}
            </li>
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
