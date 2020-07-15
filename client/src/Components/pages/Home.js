import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Home = ({ title, icon }) => {
  // AuthContext
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.load_user();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home-container">
      <h1 className="bg-dark">
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
