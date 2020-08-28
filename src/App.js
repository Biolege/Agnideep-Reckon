import React from "react";
import "./App.css";
import BookingCard from "./Components/bookingCard";
import BookAppointment from "./Components/bookAppointment";

function App() {
  return (
    <div className="App">
      <BookingCard />
      <BookAppointment />
      <BookingCard />
      <BookAppointment />
    </div>
  );
}

export default App;
