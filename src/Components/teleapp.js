import React from "react";
import Logo from "../Assets/Online Doctor-bro 1.svg";
const teleapp = () => {
  return (
    <div class="row py-3">
      <div class="col-12">
        <div class="d-flex justify-content-between flex-column flex-md-row">
          <div class="px-5">
            <h3 class="px-5 mb-5">Introducing tele-medicine</h3>
            <ul>
              <li>
                <i class="fas fa-check-circle orange-tick"></i> Get in touch
                with doctor at instant
              </li>
              <li>
                <i class="fas fa-check-circle orange-tick"></i> Get in touch
                with doctor at instant
              </li>
              <li>
                <i class="fas fa-check-circle orange-tick"></i> Get in touch
                with doctor at instant
              </li>
            </ul>
            <button class="btn btn-warning rounded-pill px-5 ml-md-5">
              Book tele-appointment
            </button>
          </div>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default teleapp;
