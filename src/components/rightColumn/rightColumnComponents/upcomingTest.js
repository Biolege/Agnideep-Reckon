import React from "react";
import Logo from "./Group 395.svg";
const upcomingTest = () => {
  return (
    <div class="col-12 mb-3 box1 px-3 py-3">
      <h5 class="mb-4">Upcoming tests</h5>
      <div class="d-flex justify-content-between">
        <div>
          <div class="my-2">
            <small class="text-secondary">Tests</small>
            <span class="d-block">PPBS, Thyroid profile</span>
          </div>
          <div class="my-2">
            <small class="text-secondary">Lab</small>
            <span class="d-block">Thyrocare</span>
          </div>
          <div class="my-2">
            <small class="text-secondary">Price</small>
            <span class="d-block">
              <i class="fas fa-rupee-sign"></i> 480
            </span>
          </div>
        </div>
        <div>
          <div class="my-2">
            <img src={Logo} alt="Throcare"></img>
          </div>
          <div class="my-2">
            <small class="text-secondary">Date</small>
            <span class="d-block">April 03, 2020</span>
          </div>
          <div class="my-2">
            <small class="text-secondary">Time</small>
            <span class="d-block">08:30 am</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default upcomingTest;
