/* 
Idea: create two staes: current debit and debit description. We update those two states based off of user input
then we call a method which would call another component. The debit and description will be passed as props for that.

For calling two functions on submit: do {() => {  two functions }}

 */
import AmountBalance from "./AmountBalance";
import React, {useState} from 'react';
import ItemList from "./ItemList";
const Debits = ({debit, setDebit, credit, balance}) => {
    const [debitAmt, setDebitAmt] = useState("");
    const [debitDesc, setDebitDesc] = useState("");
    const [comp, setComp] = useState([]);

    //Onsubmit functions
    const addItem = (event) => {
        event.preventDefault();
        const amount = parseFloat(debitAmt);
        setDebit(debit + amount);
        
    }
    const addArr = () => {
        const component =  <ItemList debit={debitAmt} desc={debitDesc} />;
        setComp([...comp, component])
    }

    return(
        <div className="Page">
            <h1> Debits Page</h1>
            <AmountBalance debit={debit} credit={credit} balance={balance} />
            
            <form onSubmit = {(event) => {
                    addItem(event);
                    addArr();
            }}>
                <label> Enter Amount</label>
                <input type="number" className="amt-debit" onChange={(e)=>{setDebitAmt(e.target.value)}}></input>
                <label> Enter Description</label>
                <input type="text" className="desc-debit" onChange={(e)=>{setDebitDesc(e.target.value)}}></input>
                <button type="submit" > Add Debit</button>  
            </form>
            <p> Your total debt: ${debit} </p>
                {/* Array that displays components  */}
                {comp.map((com, index) => {
                     return(<div key={index}> {com}</div>);
                })}
        </div>   
    );
}

export default Debits;
