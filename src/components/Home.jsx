import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Debits from "./Debits";
import Credits from "./Credits";
import AmountBalance from "./AmountBalance";
const Home = ({ debit, setDebit, credit, balance }) => {
  return (
    <div className="Home">
      <h1> HomePage </h1>

      <ul>
        <li>
          <Link to="/debits"> Debits </Link>
        </li>
        <li>
          <Link to="/credits"> Credits</Link>
        </li>
      </ul>
      <Routes></Routes>

      <div>
        {/* <AmountBalance debit={debit} credit={credit} balance={balance}/> */}
      </div>
    </div>
  );
};

export default Home;
