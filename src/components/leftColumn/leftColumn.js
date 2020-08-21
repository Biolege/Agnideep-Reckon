import React from "react";
import HealthCards from "./leftColumnComponents/healthCards";
import Params from "./leftColumnComponents/params";
import TestOrders from "./leftColumnComponents/testorders";
import MobileView from "./leftColumnComponents/mobileview";
const leftColumn = () => {
  return (
    <div class="col-12 col-lg-7">
      <HealthCards />
      <Params />
      <TestOrders />
      <div class="row px-3">
        <MobileView />
        <MobileView />
      </div>
    </div>
  );
};
export default leftColumn;
