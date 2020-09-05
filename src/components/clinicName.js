import React from "react";
import Date from "./date";
import Time from "./time";
const clinicName = () => {
  return (
    <div class="container px-3 py-3 border border-light bordrup shad">
      <h5 class="mb-5 mt-3 ml-4">Clinic Name</h5>
      <h5 class="my-3 ml-4">
        <b>Date</b>
      </h5>
      <Date />
      <h5 class="mt-5 mb-3 ml-4">
        <b>Time</b>
      </h5>
      <div class="text-secondary mb-4 ml-4">
        <p class="mb-1">Morning</p>
        <Time />
      </div>
      <div class="text-secondary mb-4 ml-4">
        <p class="mb-1">Morning</p>
        <Time />
      </div>
      <div class="d-flex justify-content-end mr-3">
        <button class="btn btn-warning rounded-pill mb-2">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default clinicName;
