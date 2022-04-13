import React from "react";
import PropTypes from "prop-types";
import icon from "../../assets/git5.ico";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary" style={{ color: "red" }}>
      <h1>
        {title}
        <img
          src={icon}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />{" "}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
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
