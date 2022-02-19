import React from "react";
import PropTypes from "prop-types";
import icon from "../../assets/git5.ico";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary"
    style={{color:'red'}}>
      <h1>
         {title}
        <img
          src={icon}
          alt=""
          className="round-img"
          style={{ width: "60px"}}
        />{" "}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: icon,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
