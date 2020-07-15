import React from "react";
import PropTypes from "prop-types";
import Navbar from "../layout/TopNav";

const Home = ({ title, icon }) => {
  return (
    <div>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Home.defaultProps = {
  title: "Vibe",
  icon: "fa fa-vimeo-square",
};
export default Home;
