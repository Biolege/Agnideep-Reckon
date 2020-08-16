import React from "react";
import "./App.css";
import Header from "./components/header/header";
import LeftColumn from "./components/leftColumn/leftColumn";
import RightColumn from "./components/rightColumn/rightColumn";
function App() {
  return (
    <div className="App container">
      <Header />
      <div class="row justify-content-around">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
