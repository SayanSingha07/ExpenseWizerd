import React, { useCallback } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import AppReducer from "../Component/AppReducer";
import { computeHeadingLevel } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  DemoData: [
    { id: 1, text: "apple", price: 10 },
    { id: 2, text: "banana", price: -5 },
    { id: 3, text: "book", price: 300 },
    { id: 3, text: "phonebill", price: -150 },
    
            ],
  
};
export const GlobalContext = createContext(initialState);
//provider component
export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //delete action
  function deleteTransaction(id) {
    dispatch({
      type: 'Delete_Transaction',
      payload: id
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transjaction: state. DemoData,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
