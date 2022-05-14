import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const isActiveStyle = (navData) =>
    navData.isActive ? "nav-link active" : "nav-link";
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={isActiveStyle} to="/" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={isActiveStyle}
                  to="/about"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={isActiveStyle}
                  to="/login"
                  aria-current="page"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
