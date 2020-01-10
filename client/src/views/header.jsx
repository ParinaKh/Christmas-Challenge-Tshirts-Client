import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import "../styles/home.css";

const Header = () => {
  return (
    <nav className="nav-main">
      <div className="nav-link">
        <NavLink exact className="link" activeClassName="is-active" to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink className="link" activeClassName="is-active" to="/addTshirt">
          Add a T-shirt
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
