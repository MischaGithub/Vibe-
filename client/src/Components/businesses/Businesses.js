import React, { Component, Fragment } from "react";
import BusinessItem from "./BusinessItem";

class Businesses extends Component {
  render() {
    return (
      <div style={businessStyle}>
        {this.props.businesses.map((business) => (
          <BusinessItem key={business._id} business={business} />
        ))}
      </div>
    );
  }
}

const businessStyle = {
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Businesses;
