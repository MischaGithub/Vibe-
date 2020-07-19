import React, { Component } from "react";

class BusinessItem extends Component {
  state = {
    _id: "id",
    image_url: "https://www.tashascafe.com/tashas.jpg",
    name: "Tasha",
    review_count: "1452",
    phone: "021 421 4350",
    rating: "4.3",
    address:
      "Shop 7117, Victoria & Alfred Waterfront, Victoria & Alfred Waterfront, Cape Town, 8001",
    location: "Cape Town",
  };

  render() {
    return (
      <div className="container">
        <div className="card grid-2 bg-dark">
          <p>Cafe, Cape Town</p>
          <p>Showing Results out of 1-20 </p>
        </div>
        <div className="card grid-3">
          <div>
            <img src={this.state.image_url} alt="" />
          </div>

          <div className=" text-left">
            <h3 className="left-header">{this.state.name}</h3>
            <p className="my-1">Review count: {this.state.review_count}</p>
            <p className="my-1">Phone: {this.state.phone}</p>
            <p className="my-1">Rating: {this.state.rating}</p>
          </div>

          <div className="text-left">
            <h4 className="left-header">Physical Address</h4>
            <p className="my-1">Address: {this.state.address}</p>
            <p className="my-1">Location: {this.state.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessItem;
