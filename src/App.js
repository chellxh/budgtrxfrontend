import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
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
    <div className="App">
      {transactions.map((transaction) => {
        return (
          <div key={transaction.id}>
            {transaction.date} / {transaction.category} / {transaction.amount}
          </div>
        );
      })}
    </div>
  );
}

export default App;
