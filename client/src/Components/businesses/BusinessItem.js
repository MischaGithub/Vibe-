import React, { Component } from "react";

class BusinessItem extends Component {
  render() {
    const {
      name,
      image_url,
      review_count,
      rating,
      address,
      phone,
      location,
    } = this.props.business;
    return (
      <div className="container">
        <div className="card grid-3">
          <div>
            <img src={image_url} alt="" />
          </div>

          <div className=" text-left">
            <h3 className="left-header">{name}</h3>
            <p className="my-1">Review count: {review_count}</p>
            <p className="my-1">Phone: {phone}</p>
            <p className="my-1">Rating: {rating}</p>
          </div>

          <div className="text-left">
            <h4 className="left-header">Physical Address</h4>
            <p className="my-1">Address: {address}</p>
            <p className="my-1">Location: {location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessItem;
