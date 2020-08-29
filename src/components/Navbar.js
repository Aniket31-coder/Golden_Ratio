import React from "react";
import Logo from "./images/Logo_phi.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top trn navbar-expand-md navbar-light bg-light bg-dark">
        <img src={Logo} alt="Logoimage" className="navbar-brand"></img>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/human">
                Human Anatomy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/design">
                Design
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/architecture">
                Architecture
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nature">
                Nature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
