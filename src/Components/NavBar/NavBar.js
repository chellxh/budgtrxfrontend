import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./NavBar.css";

function NavBar() {
  const [balance, setBalance] = useState(0);
  const [trans, setTrans] = useState([]);
  let balColor = "white";

  useEffect(() => {
    fetchData();
  }, [balance]);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/summary");
      setTrans(result.data);
      getBalance();
    } catch (e) {
      console.log(e);
    }
  }

  function getBalance() {
    let newBalance = 0;
    trans.forEach(({ id, amount }) => {
      if (id) {
        newBalance += amount;
      }
      if (newBalance <= 0) {
        balColor = "red";
      } else if (newBalance <= 1000) {
        balColor = "yellow";
      } else {
        balColor = "green";
      }
    });
    setBalance(newBalance);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <span className="title">BagCheck</span>
      </Link>

      <Link to="/transactions">
        <div className="balance" style={{ color: balColor }}>
          Balance: {balance}
        </div>
      </Link>

      <button className="button">
        <Link to="create-new-transaction">New Transaction</Link>
      </button>
    </nav>
  );
}

export default NavBar;
