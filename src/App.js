import React from "react";
import Footer from "./Components/footer/footer";
import Whatsapp from "./Components/whatsapp/whatsapp";
import Download from "./Components/download/download";
import Membership from "./Components/membership/membership";
import Selecttest from "./Components/selectTest/selectTest";
import Packages from "./Components/packages/packages";
import Profile from "./Components/profiles/profile";
import Tests from "./Components/tests/tests";
import Book from "./Components/book/book";
import Carousel from "./Components/carousel/carousel";
import Frequent from "./Components/frequent/frequent";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Carousel />
      <div className="px-2">
        <Frequent />
        <Book />
        <Tests />
        <Profile />
        <Packages />
        <Selecttest />
        <Membership />
        <Whatsapp />
        <Download />
      </div>

      <Footer />
    </div>
  );
};

export default App;
