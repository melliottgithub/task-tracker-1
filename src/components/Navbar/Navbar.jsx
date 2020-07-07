import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.css";

const Navbar = ({ saved }) => {
  return (
    <nav className="header_nav">
      <ul className="header_list">
        <li className="header_item">
          <Link className="header_link" to="home">
            Home
          </Link>
        </li>
        <li className="header_item">
          <Link className="header_link" to="about">
            About
          </Link>
        </li>
        <li className="header_item">
          <Link className="header_link" to="blog">
            Blog
          </Link>
        </li>
        <li className="header_item">
          <span>{saved.length}</span>{" "}
          <Link className="header_link" to="saved">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const getSavedItems = (state) => {
  return {
    saved: state.savedList.saved,
  };
};

export default connect(getSavedItems)(Navbar);
