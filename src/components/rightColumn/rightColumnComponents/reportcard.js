import React from "react";
const reportcard = () => {
  return (
    <div class="col-12 my-3">
      <div class="headline text-white d-flex justify-content-between px-2 py-2">
        <div>April 03, 2020</div>
        <div>HAMM</div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="py-2">
          <h6 class="my-2">PPBS</h6>
          <h6 class="my-2">Thyriod Profile</h6>
          <h6 class="my-2">Lipid Profile</h6>
        </div>
        <div class="d-flex flex-column justify-content-end py-2">
          <h6>
            Test Again <i class="fas fa-arrow-circle-right"></i>
          </h6>
          <h6>
            View report <i class="fas fa-arrow-circle-right"></i>
          </h6>
        </div>
      </div>
    </div>
  );
};
export default reportcard;
