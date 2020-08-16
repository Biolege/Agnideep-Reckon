import React from "react";
import HealthCardDetails from "./healthCardDetails";
const healthCards = () => {
  return (
    <div class="d-flex justify-content-between">
      <HealthCardDetails />
      <HealthCardDetails />
      <HealthCardDetails />
    </div>
  );
};
export default healthCards;
