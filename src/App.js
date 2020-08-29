import React from "react";
import "./App.css";
import Appointment from "./components/appointment/appointment";
import Tabs from "./components/tabs/tabs";

function App() {
  return (
    <div className="App">
      <Appointment />
      <div class="row d-sm-none d-block">
        <div class="col-sm-4 col-12 offset-sm-9">
          <button
            type="button"
            class="btn btn-warning btn-sm px-3 btn-block-xs-only"
          >
            <b>Book Appointment</b>
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default App;
