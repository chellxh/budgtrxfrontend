import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTransaction() {
  const { id } = useParams();
  const [nameS, setNameS] = useState("");
  const [amountS, setAmountS] = useState(0);
  const [dateS, setDateS] = useState("");
  const [fromS, setFromS] = useState("");
  const [categoryS, setCategoryS] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:3001/summary/${id}`);

      //   console.log(result.data.data);

      const { name, amount, date, from, category } = result.data.data;

      // console.log(category);

      setNameS(name);
      setAmountS(amount);
      setDateS(date);
      setFromS(from);
      setCategoryS(category);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.put(`http://localhost:3001/summary/${id}`, {
        name: nameS,
        amount: amountS,
        date: dateS,
        from: fromS,
        category: categoryS,
      });
      alert("Transaction Updated!");
      navigate(`/transactions/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
  // console.log(categoryS);

  function handleBack() {
    navigate(`/transactions/${id}`);
  }

  return (
    <div className="edit">
      <div>
        <h2>Edit Transaction</h2>
      </div>
      <div className="editForm">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={nameS}
              onChange={(e) => setNameS(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              value={amountS}
              onChange={(e) => setAmountS(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="date">Date: </label>
            <input
              type="text"
              value={dateS}
              placeholder="ex. July 27 2023"
              onChange={(e) => setDateS(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="from">From: </label>
            <input
              type="text"
              value={fromS}
              onChange={(e) => setFromS(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="category">Category: </label>
            <select onChange={(e) => setCategoryS(e.target.value)}>
              <option>{categoryS}</option>
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
              <option value="income">Income</option>
              <option value="work">Work</option>
            </select>

            <br />
          </div>
          <button onClick={handleBack}>Back</button>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditTransaction;
