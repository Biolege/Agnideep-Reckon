import React from "react";
import "./App.css";
import HealthField from "./components/healthField";
import Article from "./components/article";

function App() {
  return (
    <div className="App">
      <HealthField />
      <Article />
      <Article />
    </div>
  );
}

export default App;
