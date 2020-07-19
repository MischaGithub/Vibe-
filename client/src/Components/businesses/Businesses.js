import React, { Component } from "react";
import BusinessItem from "./BusinessItem";

class Businesses extends Component {
  state = {
    businesses: [
      {
        _id: "1",
        image_url: "https://www.tashascafe.com/tashas.jpg",
        name: "Tasha",
        review_count: "1452",
        phone: "021 421 4350",
        rating: "4.3",
        address:
          "Shop 7117, Victoria & Alfred Waterfront, Victoria & Alfred Waterfront, Cape Town, 8001",
        location: "Cape Town",
      },
      {
        _id: "2",
        image_url:
          "https://famousbrands.co.za/wp-content/uploads/2017/02/steers_1.jpg",
        name: "Steers",
        review_count: "18",
        phone: "079 125 7228",
        rating: "2.8",
        address:
          "Shop 122 & 123, Kenilworth Centre, Doncaster Rd, Kenilworth, Cape Town, 7745",
        location: "Cape Town",
      },
      {
        _id: "3",
        image_url:
          "https://b.zmtcdn.com/data/pictures/2/6400312/17edc59b7ad624e8fd5c684a725845b3.jpg",
        name: "Mac Donalds",
        review_count: "1944",
        phone: "021 761 2706",
        rating: "3.7",
        address: "Doncaster Rd, Kenilworth, Cape Town, 7708",
        location: "Cape Town",
      },
    ],
  };
  render() {
    return (
      <div style={businessStyle}>
        {this.state.businesses.map((business) => (
          <BusinessItem key={business._id} business={business} />
        ))}
      </div>
    );
  }
}
const businessStyle = {
  display: "card",
  gridTemplateColumn: "repeat(3, 1fr)",
};
export default Businesses;
