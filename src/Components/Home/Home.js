import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>
        Check The Bag with <br />
        <span>BagCheck</span>
        <br />
        <Link to="/transactions">ᗆ View Transactions Here ᗉ</Link>
      </h1>
    </div>
  );
}

export default Home;
