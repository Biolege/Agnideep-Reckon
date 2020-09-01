import React from "react";
import Logo from "../Assets/objects.svg";
const chat = () => {
  return (
    <div class="row trusted py-3">
      <div class="col-12">
        <div class="d-flex justify-content-between flex-column flex-md-row">
          <img src={Logo} alt="" />
          <div class="px-5">
            <h5 class="px-5">Verified doctors</h5>
            <h5 class="px-5">Chat with doctors</h5>
            <button class="btn btn-warning rounded-pill px-5 ml-md-5 mt-5">
              Chat now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chat;
