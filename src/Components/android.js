import React from "react";
import Logo from "../Assets/Group.svg";

const android = () => {
  return (
    <div class="row app py-3">
      <div class="col-12">
        <div class="d-flex justify-content-between flex-column flex-md-row">
          <img src={Logo} alt="" />
          <div class="px-5">
            <h3 class="px-5">
              Maintain all your medical health records in one app.
            </h3>
            <ul>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Prescription
              </li>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Diagnostics report
              </li>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Doctor appointment
                history
              </li>
              <li>
                <i class="fas fa-check-circle blue-tick"></i> Medicine
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default android;
