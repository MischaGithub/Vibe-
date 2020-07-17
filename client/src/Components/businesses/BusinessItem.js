import React, { Component } from "react";

class BusinessItem extends Component {
  constructor() {
    super();
    this.state = {
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      rating: 4,
      is_closed: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="card text-center ">
          <h3>{this.state.name}</h3>
          <p className="p-1">review: {this.state.review_count}</p>
          <p className="p-1">rating: {this.state.rating}</p>

          <div className="card text-left">
            <img src={this.state.image_url} alt="" style={{ width: "80px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessItem;
