import React from "react";
import "./App.css";
import Date from "./components/date";
import Calender from "./components/calender";
import Clinic from "./components/clinic";
import Schedule from "./components/schedule";

function App() {
  return (
    <div className="App container">
      <Date />
      <Calender />
      <Clinic />
      <Schedule />
    </div>
  );
}

export default App;
