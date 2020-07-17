import React, { Component } from "react";

const placesPlaceholder = [
  { name: "Coffee", review_count: 20, rating: 3, image_url: "whatever_url" },
  { name: "Coffee", review_count: 20, rating: 3 },
  { name: "Coffee", review_count: 20, rating: 3 },
  { name: "Coffee", review_count: 20, rating: 3 },
  { name: "Coffee", review_count: 20, rating: 3 },
];

class BusinessItem extends Component {
  state = {
    id: "E8RJkjfdcwgtyoPMjQ_Olg",
    review_count: 1738,
    name: "Four Barrel Coffee",
    url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
    image_url:
      "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
    rating: 4,
    is_closed: false,
  };

  render() {
    // Pulling out from state
    const { image_url, name, review_count, rating } = this.state;
    return (
      <div className="container">
        <div className="card grid-2 bg-dark ">
          <p>Burgers , New York</p>
          <p>Showing Results 1-50 out of 100 results</p>
        </div>
        <div className="card grid-2  ">
          <img src={image_url} alt="" style={{ width: "80px" }} />

          <div className="text-left">
            <h3 className="left-header">{name}</h3>
            <p>review: {review_count}</p>
            <p>rating: {rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessItem;
