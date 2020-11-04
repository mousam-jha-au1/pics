import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Pics</h2>
      </Link>
      <Link to="/cart">
        <h2>Cart</h2>
      </Link>
    </header>
  );
}

export default Header;
