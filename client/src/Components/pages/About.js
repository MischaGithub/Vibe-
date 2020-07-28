import React from "react";
import PropTypes from "prop-types";

import Dining from "../../assets/fine_dining_2.jpg";
import Burgers from "../../assets/about_img2.jpg";
import Burger_Joints from "../../assets/burger_joints.jpg";
import Bars from "../../assets/about_img4.jpg";
import Fine_Dining from "../../assets/fine_dining.jpg";
import Clubs from "../../assets/clubs.jpg";

const About = ({ title, icon }) => {
  return (
    <div className="about-container">
      <h1 className="bg-dark">
        <i className={icon} /> {title}
      </h1>
      {/* Just a small paragraph about the the website */}
      <h1>About this website</h1>
      <p className="my-1">
        Vibe was founded to help people find great local businesses like
        restaurants, burger joints, fine dining, clubs and bars.With unmatched
        local business information, photos and review content, Vibe provides a
        one-stop local platform for consumers to discover, connect and transact
        with local businesses of all sizes. As so many local businesses goes
        unrecognized Vibe's mission is to make all businesses known which will
        help them with the marketing of their business but also grow a
        substantial business growth and a continous growing client base.
      </p>

      {/* Images on the about page */}
      <div className="grid-3">
        <img src={Dining} alt="avatar" />
        <img src={Burgers} alt="avatar" />
        <img src={Fine_Dining} alt="avatar" />
        <img src={Burger_Joints} alt="avatar" />
        <img src={Bars} alt="avatar" />
        <img src={Clubs} alt="avatar" />
      </div>
    </div>
  );
};

// About PropTypes
About.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

About.defaultProps = {
  title: "Vibe",
  icon: "fa fa-vimeo-square",
};

export default About;
