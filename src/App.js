import React from "react";
import Security from "./Components/security";
import Android from "./Components/android";
import Appointment from "./Components/appointment";
import Chat from "./Components/chat";
import Teleapp from "./Components/teleapp";
import Search from "./Components/search";
import Carousel from "./Components/carousel";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Search />
      <Carousel />
      <Teleapp />
      <Chat />
      <Appointment />
      <Android />
      <Security />
    </div>
  );
}

export default App;
