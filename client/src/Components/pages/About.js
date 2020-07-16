import React from "react";
import PropTypes from "prop-types";

import Barber from "../../assets/about_img.jpg";
import Burgers from "../../assets/about_img2.jpg";
import HairSalon from "../../assets/about_img3.jpg";
import Bars from "../../assets/about_img4.jpg";
import Dentist from "../../assets/about_img5.jpg";
import Mechanics from "../../assets/about_img6.jpg";

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
        dentists, hair stylists and mechanics.With unmatched local business
        information, photos and review content, Vibe provides a one-stop local
        platform for consumers to discover, connect and transact with local
        businesses of all sizes. As so many local businesses goes unrecognized
        Vibe's mission is to make all businesses known which will help them with
        the marketing of their business but also grow a substantial business
        growth and a continous growing client base.
      </p>
      <div className="grid-2">
        <img src={Barber} alt="avatar" />
        <img src={Burgers} alt="avatar" />
        <img src={HairSalon} alt="avatar" />
        <img src={Bars} alt="avatar" />
        <img src={Dentist} alt="avatar" />
        <img src={Mechanics} alt="avatar" />
      </div>
    </div>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

About.defaultProps = {
  title: "Vibe",
  icon: "fa fa-vimeo-square",
};

export default About;
