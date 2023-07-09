import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Transaction() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/summary/${id}`);
      setTransaction(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="transaction">
      <h2>Show Transaction</h2>

      <div className="trans-info">
        Date: {transaction?.date}
        ID: {transaction?.id}
        Name: {transaction?.name}
        From: {transaction?.from}
        Category: {transaction?.category}
      </div>
      <div className="trans-buttons">
        <button>Back</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Transaction;
