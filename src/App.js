import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🎮
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Transaction from "./Components/Transaction/Transaction";
import Transactions from "./Components/Transactions/Transactions";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<Transaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
