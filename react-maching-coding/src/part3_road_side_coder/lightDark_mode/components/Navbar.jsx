import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Toggle from "./Toggle";


const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <Link
          className="navbar__link"
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>
        <Link
          className="navbar__link"
          to={{
            pathname: "/contactus",
          }}
        >
          Contact Us
        </Link>
        <Link
          className="navbar__link"
          to={{
            pathname: "/aboutus",
          }}
        >
          About Us
        </Link>
        <Toggle   />
      </ul>
    </nav>
  );
};

export default Navbar;
