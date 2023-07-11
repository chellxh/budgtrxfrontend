import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Transaction.css";

function Transaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://bagcheckxbackend.onrender.com/summary/${id}`
          : `http://localhost:3001/summary/${id}`;
      let result = await axios.get(url);
      setTransaction(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  function handleBack() {
    navigate("/transactions");
  }

  function handleEdit(id) {
    navigate(`/transactions/${id}/edit`);
  }

  async function handleDeleteById(id) {
    try {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://bagcheckxbackend.onrender.com/summary/${id}`
          : `http://localhost:3001/summary/${id}`;
      await axios.delete(url);
      alert("Transaction Deleted!");
      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="transaction">
      <h2>Show Transaction</h2>

      <div className="trans-info">
        <p id="id">ID: {transaction?.id}</p>
        <p>Date: {transaction?.date}</p>

        <h4 className="trans-name">Name: {transaction?.name}</h4>
        <p>Amount: {transaction?.amount}</p>
        <p id="from">From: {transaction?.from}</p>
        <p>Category: {transaction?.category}</p>
      </div>
      <div className="trans-buttons">
        <button onClick={handleBack}>Back</button>
        <button
          onClick={() => {
            handleEdit(id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDeleteById(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Transaction;
