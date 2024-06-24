import React from 'react'
import { useState } from 'react'


function AddTranjuction() {
  const[text,setText]=useState(" ");
  const[Amount,setAmount]=useState(0)
  return (
    <>
  <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlForfor="text">Text</label>
          <input type="text" 
          id="text" 
          placeholder="Enter text..." 
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"
           id="amount" 
           placeholder="Enter amount..." 
          value={Amount}
          onChange={(e)=>{
            setAmount(e.target.value)} }
          
          
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>


    </>
  )
}

export default AddTranjuction