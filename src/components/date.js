import React from "react";

const date = () => {
  return (
    <div class="my-3">
      <div class="d-flex justify-content-between">
        <div>
          <i class="far fa-calendar-alt"></i>
          <h5 class="d-inline mx-3">April 23,2020</h5>
        </div>
        <button class="chevron w">
          <i class="fas fa-chevron-circle-down"></i>
        </button>
      </div>
    </div>
  );
};

export default date;
