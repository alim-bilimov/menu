import React from "react";
import logo from "../../images/image 2.png";
import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <img src={logo} alt="" />

            <nav>
              <NavLink to="/">Menu</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <NavLink to="/admin">Admin</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
