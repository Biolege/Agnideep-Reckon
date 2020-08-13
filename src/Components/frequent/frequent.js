import React from "react";
import Kidney from "./kidney";
const frequent = () => {
  return (
    <div>
      <div class="py-md-5 frequent my-2 my-md-0 pl-md-4 fsize">
        Frequent Tests
      </div>
      <div class="container-fluid border border-light shad border10 ">
        <div class="row slider my-md-5">
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
          <Kidney />
        </div>
      </div>
    </div>
  );
};
export default frequent;
