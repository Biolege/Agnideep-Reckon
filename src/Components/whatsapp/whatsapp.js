import React from "react";
import Logo2 from "./carousal5.svg";
const whatsapp = () => {
  return (
    <div>
      <div class="container-fluid border-light border10 shad mb-5">
        <div class="mt-5">
          <img src={Logo2} alt="whatsapp" />
        </div>
        <div
          class="mt-md-n5 ml-md-5 mt-md-5 d-flex justify-content-between align-items-center"
          id="notSure"
        >
          <button class="btn btn-3">Upload prescription</button>
          <span class="sml">or</span>
          <div class="d-flex align-items-center">
            <i class="fab fa-whatsapp text-success mr-1"></i>
            <div class="">
              <small class="sml">WhatApp us prescription</small>
              <h6 class="d-block sml">6003119049</h6>
            </div>
          </div>
          <span class="sml">or</span>
          <div class="d-flex">
            <i class="fa fa-phone-alt contact-icon sml"></i>
            <div>
              <small class="sml">Call us</small>
              <h6 class="d-block sml">6003119049</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default whatsapp;
