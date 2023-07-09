import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>
        Check The Bag with <br />
        <span>BagCheck</span>
      </h1>
      <div className="transactionsLink"><Link to="/transactions">View Transactions Here</Link></div>
    </div>
  );
}

export default Home;
