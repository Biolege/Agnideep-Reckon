import React from "react";

const details = () => {
  return (
    <div>
      <div class="row mt-5">
        <div class="col-12 col-md-4 mt-3">
          <h6 class="text-secondary">Age</h6>
          <h6 class="text-secondary">Blood group</h6>
          <h6 class="text-secondary">Height</h6>
          <h6 class="text-secondary">Weight</h6>
          <h6 class="text-secondary">Allergies</h6>
          <h6 class="text-secondary">Diseases</h6>
          <h6 class="text-secondary">Last consulted</h6>
        </div>
        <div class="col-12 col-md-8 mt-3">
          <div class="row">
            <div class="col-4">
              <h6 class="text-secondary">Binni Gupta</h6>
            </div>
            <div class="col-4">
              <h6 class="text-secondary">01-10-2019</h6>
            </div>
            <div class="col-4">
              <h6 class="text-secondary">1 week</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-12 px-5 py-5">
              <h6 class="text-secondary">Medicine history</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary rounded-pill mx-2">Add Revisit</button>
        <button class="btn btn-warning rounded-pill mx-2">Completed</button>
      </div>
    </div>
  );
};

export default details;
