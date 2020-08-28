import React from "react";

const congrats = () => {
  return (
    <div class="container ">
      <div class="row my-4 border-light shad p-3 mb-5 bg-white py-5 mt-5 mx-3">
        <div class="col-sm-12 text-center mt-4 d-md-block d-none d-sm-none ">
          <h3>Congratulations your booking has been confirmed</h3>
        </div>
        <div class="col-md-12  py-sm-3 text-center my-3">
          <svg
            aria-hidden="true"
            height="12em"
            width="12em"
            focusable="false"
            data-prefix="fas"
            data-icon="check-circle"
            class="svg-inline--fa fa-check-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#02BD7A"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
        </div>
        <div class="col-sm-12 text-center mt-4 d-md-none d-lg-none d-xl-none">
          <h6>Congratulations your booking has been confirmed</h6>
        </div>
        <div class="col-sm-12 text-center mb-4 d-md-block d-none d-sm-none">
          <h5 class="muted">
            Please arrive 15 mins before your appointment time
          </h5>
        </div>
        <div class="col-sm-12 text-center mb-4 d-md-none d-lg-none d-xl-none">
          <h7>Please arrive 15 mins before your appointment time</h7>
        </div>
      </div>
    </div>
  );
};

export default congrats;
