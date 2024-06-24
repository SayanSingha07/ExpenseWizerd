import { useContext } from "react";
import React from "react";
import { GlobalContext } from "../contextt/GlobalState";

function Transjaction() {
  const { transjaction } = useContext(GlobalContext);
  


 
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {transjaction.map((transaction) => (
          <li key={transaction.id} className={transaction.price<0 ?  'minus' : 'plus'} >


            {transaction.text} <span>{ transaction.price < 0 ? '-' : '+'}${ Math.abs(transaction.price)}</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Transjaction;
