import React, { useContext } from 'react'
import { GlobalContext } from "../contextt/GlobalState";

function Balance() {
  const data = useContext(GlobalContext);
  
  const amount = data.transjaction.map(t=>(t.price));
  console.log( amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
    <h4>Your Balance</h4>
      <h1>${total}</h1>
      </>
  )
}

export default Balance