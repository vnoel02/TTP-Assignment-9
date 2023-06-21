import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import AmountBalance from "./components/AmountBalance";
import axios from "axios";
import "./App.css";

import Home from "./components/Home";


function App() {
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function getDebit() {
      try {
        const amount = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
        );
        setDebit(amount.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDebit();
  }, []);

  useEffect(() => {
    async function getCredit() {
      try {
        const amount = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
        );
        setCredit(amount.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCredit();
  }, []);

  useEffect(() => {
    async function getBalance() {
      try {
        setBalance(credit - debit);
      } catch (error) {
        console.error(error);
      }
    }
    getBalance();
  });
  console.log(balance);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/debits"> Debits </Link>
            </li>
            <li>
              <Link to="/credits"> Credits</Link>
            </li>
          </ul>
        </nav>

        {/* Router */}
        <Routes>
          <Route
            path="/*"
            element={
              <Home
                debit={debit}
                setDebit={setDebit}
                setCredit={setCredit}
                credit={credit}
                balance={balance}
              />
            }
          />
          <Route
            path="/debits/"
            element={
              <Debits debit={debit} setDebit={setDebit} balance={balance} />
            }
          />
          <Route
            path="/credits/"
            element={
              <Credits
                credit={credit}
                setCredit={setCredit}
                balance={balance}
              />
            }
          />
          {/* <Route path="/userProfile/*" element={<UserProfile/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

/*
axios.get('url', {
        headers: {
          'Access-Control-Allow-Origin': true,
          ‘Content-Type’: ‘application/json'
        },
        })

*/

export default App;
