import React from "react";
import Specialist from "./Components/specialist";
import DoctorCard from "./Components/doctorCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Specialist />
      <DoctorCard />
      <DoctorCard />
    </div>
  );
}

export default App;
