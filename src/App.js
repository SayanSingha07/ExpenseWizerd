import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import IncomeExpance from "./Component/IncomeExpance";
import Transjaction from "./Component/Transjaction";
import AddTranjuction from "./Component/AddTranjuction";
import { Globalprovider } from "./contextt/GlobalState";

function App() {
  return (
    <>
      <Globalprovider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpance />
          <Transjaction />
          <AddTranjuction />
        </div>
      </Globalprovider>
    </>
  );
}

export default App;
