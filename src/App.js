import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// 🎮
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Transaction from "./Components/Transaction/Transaction";
import Transactions from "./Components/Transactions/Transactions";
import EditTransaction from "./Components/Transaction/EditTransaction";
import NewForm from "./Components/NewForm/NewForm";

function App() {


  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewForm />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<Transaction />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
