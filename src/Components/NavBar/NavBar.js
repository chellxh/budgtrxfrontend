import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">BagCheck</Link>
      <button>New Transaction </button>
    </nav>
  );
}

export default NavBar;
