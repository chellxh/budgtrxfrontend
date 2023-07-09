import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

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
      let result = await axios.get(`http://localhost:3001/summary/${id}`);
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
      await axios.delete(`http://localhost:3001/summary/${id}`);
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
        <p>From: {transaction?.from}</p>
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
