import React from "react";
import Btn from "./testbtn";
const tests = () => {
  return (
    <div>
      <div class="d-flex justify-content-between align-items-center pt-md-5">
        <div class="pl-md-4 fsize frequent">All Tests</div>
        <a href="#">View all</a>
      </div>
      <div class="row row1 ml-n1 mb-md-4 h">
        <div class="row__inner" id="allTest">
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
        </div>
      </div>
    </div>
  );
};
export default tests;
