import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  const renderUserName = (user) => {
    if (user && user.user && user.user.name) {
      return (
        <React.Fragment>
          <NavLink className="nav-item nav-link" to="/profile">
            {user.user.name}
          </NavLink>
          <NavLink className="nav-item nav-link" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>
      );
    }
    return <div></div>;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          {renderUserName(user)}
          {(!user || !user.user || !user.user.name) && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {/* {console.log(user,"<---The detail")} */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
