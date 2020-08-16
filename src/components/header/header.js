import React from "react";
const header = () => {
  return (
    <div class="d-flex justify-content-between my-3">
      <h5>
        <span class="d-inline d-lg-none">My</span>
        <span> Diagnostics</span>
      </h5>
      <h5 class="d-none d-lg-inline">
        My family <i class="fas fa-chevron-circle-down"></i>
      </h5>
    </div>
  );
};
export default header;
