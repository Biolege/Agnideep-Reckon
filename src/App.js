import React from "react";
import "./App.css";
import Address from "./Components/address/address";
import Odetails from "./Components/odetails/odetails";
import Mdetails from "./Components/mdetails/mdetails";
import Navbar from "./Components/navbar/navbar";

const App = () => {
  return (
    <div className="App container">
      <Navbar />
      <Mdetails />
      <Odetails />
      <Address />
    </div>
  );
};

export default App;
