import React from "react";
import Logo from "../Assets/Group 55.svg";

const security = () => {
  return (
    <div class="row trusted py-3">
      <div class="col-12">
        <div class="d-flex justify-content-between flex-column flex-md-row">
          <h3 class="px-5">
            Keep all your medical reports secured in one place.
          </h3>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default security;
