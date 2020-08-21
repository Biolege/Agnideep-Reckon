import React from "react";
import Testordercards from "./testorderscards";
const testorders = () => {
  return (
    <div class="box1 px-3 py-3">
      <h5 class="mb-2">Test orders</h5>
      <div class="row d-none d-lg-flex">
        <Testordercards />
        <Testordercards />
        <Testordercards />
      </div>
    </div>
  );
};
export default testorders;
