import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">AUM Learn</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
