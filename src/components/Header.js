import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink className="nav-link" to="/">
        <i className="ri-image-line ri-fw ri-2x"></i>
      </NavLink>
      <NavLink className="nav-link" to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </NavLink>
    </header>
  );
}

export default Header;
