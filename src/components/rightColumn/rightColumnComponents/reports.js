import React from "react";
import Cards from "./reportcard";
const report = () => {
  return (
    <div class="col-12 mb-3 box1 px-3 py-3">
      <h5 class="mb-4">Reports</h5>
      <div class="row">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};
export default report;
