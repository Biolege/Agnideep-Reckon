import React from "react";
import Logo from "../Assets/Group 50.svg";

const appointment = () => {
  return (
    <div class="row py-3">
      <div class="col-12">
        <div class="d-flex justify-content-between flex-column flex-md-row">
          <div class="px-5">
            <h3 class="px-5 mb-5">No more waiting in queue</h3>
            <ul>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Book appointment
                from home
              </li>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Book through app,
                Whatsapp, call.
              </li>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Select your own
                timing
              </li>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Walk in
                appointment
              </li>
            </ul>
            <button class="btn btn-warning rounded-pill px-5 ml-md-5">
              Book appointment
            </button>
          </div>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default appointment;
