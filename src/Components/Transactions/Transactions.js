import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:3001/summary");
      setTransactions(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2 className="trans-h2">Transactions</h2>

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

// color change on balance

export default Transactions;
