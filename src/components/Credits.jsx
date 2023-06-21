import AmountBalance from "./AmountBalance";
import React, { useState } from "react";
import Home from "./Home";
import ItemList from "./ItemList";

const Credits = ({ debit, setCredit, credit, balance }) => {
  const [creditAmt, setCreditAmt] = useState("");
  const [creditDesc, setCreditDesc] = useState("");
  const [comp, setComp] = useState([]);

  //Onsubmit functions
  const addItem = (event) => {
    event.preventDefault();
    const amount = parseFloat(creditAmt);
    setCredit(credit + amount);
  };
  const addArr = () => {
    const component = <ItemList debit={creditAmt} desc={creditDesc} />;
    setComp([...comp, component]);
  };

  return (
    <div className="Page">
      <h1> Credits Page</h1>
      <AmountBalance debit={debit} credit={credit} balance={balance} />

      <form
        onSubmit={(event) => {
          addItem(event);
          addArr();
        }}
      >
        <label> Enter Amount</label>
        <input
          type="number"
          className="amount"
          onChange={(e) => {
            setCreditAmt(e.target.value);
          }}
        ></input>
        <label> Enter Description</label>
        <input
          type="text"
          className="description"
          onChange={(e) => {
            setCreditDesc(e.target.value);
          }}
        ></input>
        <button type="submit"> Add Debit</button>
      </form>
      <p> Your total credit: ${credit} </p>
      {/* Array that displays components  */}
      {comp.map((com, index) => {
        return <div key={index}> {com}</div>;
      })}
    </div>
  );
};

export default Credits;
