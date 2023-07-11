import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Transactions.css";

let url =
  process.env.NODE_ENV === "production"
    ? "https://bagcheckxbackend.onrender.com/"
    : "http://localhost:3001/";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  let balColor = {
    color: "white",
  };

  useEffect(() => {
    fetchData();
  }, [transactions]);

  if (balance < 0) {
    balColor.color = "red";
  } else if (balance <= 1000) {
    balColor.color = "yellow";
  } else {
    balColor.color = "green";
  }
  async function fetchData() {
    try {
      let result = await axios.get(`${url}summary`);
      setTransactions(result.data);
      getBalance();
    } catch (e) {
      console.log(e);
    }
  }

  function getBalance() {
    let currentBalance = 0;
    transactions.forEach(({ amount }) => {
      currentBalance += Number(amount);
    });
    setBalance(currentBalance);
  }

  return (
    <div>
      <h2 className="trans-h2">Transactions</h2>

      <div className="balance" style={balColor}>
        Balance: {balance}
      </div>

      <div className="transactions">
        <table id="transactions-table">
          <tbody>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>Amount</th>
            </tr>
            {transactions.map(({ id, date, from, amount }) => {
              return (
                <tr id="trans-row" key={id}>
                  <td>
                    <Link to={`/transactions/${id}`}>{date}</Link>
                  </td>
                  <td>
                    <Link to={`/transactions/${id}`}>{from}</Link>
                  </td>
                  <td>
                    <Link to={`/transactions/${id}`}>{amount}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
