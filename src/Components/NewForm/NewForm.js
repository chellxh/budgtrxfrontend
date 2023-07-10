import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./NewForm.css";

function NewForm() {
  const [newData, setNewData] = useState({
    id: uuidv4(),
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    type: true,
  });

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/summary", {
        ...newData,
      });
      alert("New Transaction Created!");
      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="new">
      <div>
        <h2>New Transaction</h2>
      </div>
      <div className="new-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={newData.name}
              onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              value={newData.amount}
              onChange={(e) =>
                setNewData({ ...newData, amount: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <label htmlFor="date">Date: </label>
            <input
              type="text"
              value={newData.date}
              placeholder="ex. July 27 2023"
              onChange={(e) => setNewData({ ...newData, date: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label htmlFor="from">From: </label>
            <input
              type="text"
              value={newData.from}
              onChange={(e) => setNewData({ ...newData, from: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label htmlFor="category">Category: </label>
            <select onChange={(e) => setNewData({ ...newData, category: e.target.value })}>
              <option value=""> - Choose A Category</option>
              <option value="general entertainment">
                General Entertainment
              </option>
              <option value="general services">General Services</option>
              <option value="general shopping">General Shopping</option>
              <option value="gaming">Gaming</option>
              <option value="gas">Gas</option>
              <option value="groceries">Groceries</option>
              <option value="pay anyone transfer">Pay Anyone Transfer</option>
              <option value="restaurant">Restaurant</option>
              <option value="work">Work</option>
            </select>
            </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewForm;
