import React from "react";
import Tiles from "./tiles";
const selectTest = () => {
  return (
    <div>
      <div class="pt-5 pl-md-4 fsize frequent">Select Tests from labs</div>
      <div class="row row1 path">
        <div class="row__inner" id="select">
          <Tiles />
          <Tiles />
          <Tiles />
          <Tiles />
          <Tiles />
          <Tiles />
        </div>
      </div>
    </div>
  );
};
export default selectTest;
