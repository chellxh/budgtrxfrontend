import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="title">BagCheck</span>
      </Link>

      <button className="button">
        <Link to="create-new-transaction">New Transaction</Link>
      </button>
    </nav>
  );
}

export default NavBar;
