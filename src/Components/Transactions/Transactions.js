import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/summary");
      setTransactions(result.data);
      getBalance();
    } catch (e) {
      console.log(e);
    }
  }

  function getBalance() {
    let newBalance = 0;
    transactions.forEach(({ id, amount }) => {
      if (id) {
        newBalance += amount;
      }
    });
    setBalance(newBalance);
  }

  return (
    <div>
      <h2 className="trans-h2">Transactions</h2>
      <h3 className="balance">Current Balance - {balance}</h3>
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
