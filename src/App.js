import React from "react";
import "./App.css";
import Profile from "./components/profile";
import Medical from "./components/medicalEdu";
import Specialization from "./components/specialization";
import Experience from "./components/experience";
import Member from "./components/member";
function App() {
  return (
    <div className="App container">
      <Profile />
      <Medical />
      <Specialization />
      <Experience />
      <Member />
    </div>
  );
}

export default App;
