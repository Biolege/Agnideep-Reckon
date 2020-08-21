import React from "react";
import Logo from "./thyro.svg";
const mobileview = () => {
  return (
    <div class="col-12 my-3 box1 px-2 py-3 d-lg-none">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column px-3">
          <div>
            <img src={Logo} />
          </div>
          <div class="my-1">
            <small class="text-secondary">Test ordered</small>
            <p>PPBS Thyroid profile Lipid profile</p>
          </div>
          <div class="my-1">
            <small class="text-secondary">Lab</small>
            <p>Dr Lal Pathlabs</p>
          </div>
          <div class="my-1">
            <small class="text-secondary">Ordered on</small>
            <p>April 03, 2020</p>
          </div>
          <div class="my-1">
            <small class="text-secondary">Price</small>
            <p>
              <i class="fas fa-rupee-sign"></i> 480
            </p>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-between">
          <p>Order Details</p>
          <p>
            View report <i class="fas fa-arrow-circle-right"></i>
          </p>
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between px-2">
        <p class="text-success">Delivered</p>
        <p>
          <i class="fas fa-redo-alt"></i> Test again
        </p>
      </div>
    </div>
  );
};
export default mobileview;
