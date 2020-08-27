import React from "react";

import "./App.css";
import OrderDetails from "./Components/OrderDetails/orderDetails";
import OrderNumber from "./Components/InnerComponents/orderNumber";
import SampleCollection from "./Components/InnerComponents/sampleCollection";
function App() {
  return (
    <div className="App container">
      <h3 class="my-5">Diagnostics</h3>
      <div class="container px-5 py-3 box">
        <OrderDetails />
        <div class="container my-4 border py-5 px-5">
          <OrderNumber />
          <SampleCollection />
        </div>
      </div>
    </div>
  );
}

export default App;
