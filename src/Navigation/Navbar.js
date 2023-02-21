import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({changeBg}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" onClick={() => changeBg("#99f7e0")}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/shrine" onClick={() => changeBg("#416070")}>Shrine</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar