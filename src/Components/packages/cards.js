import React from "react";
const cards = () => {
  return (
    <div class="tile wsize">
      <div class="tile__media wsize">
        <div class="card mx-2 wsize">
          <div class="card-body pb-1">
            <h5 class="card-title ml-n1 kpro">
              <b>Kidney Profile</b>
            </h5>
          </div>
          <div class="d-flex justify-content-between">
            <ul class="list-group card-list pl-2">
              <li class="list-group-item crd-list-items text-muted mt-n3 tpro">
                {" "}
                <b>22 test included</b>
              </li>
              <div class="d-none d-md-block">
                <li class="list-group-item crd-list-items mt-n1">Urea</li>
                <li class="list-group-item crd-list-items mt-n2">Creatinine</li>
                <li class="list-group-item crd-list-items mt-n2">Uric acid</li>
                <li class="list-group-item crd-list-items mt-n2">Albumin</li>
                <li class="list-group-item crd-list-items mt-n2">Uric acid</li>
                <li class="list-group-item crd-list-items mt-n2">
                  <b>
                    <small>+ More</small>
                  </b>
                </li>
              </div>
            </ul>
            <div>
              <div class="doctor ml-3 mt-4 mr-4 d-none d-md-block">
                <svg
                  class="red-dna"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  height="1.5em"
                  width="1.5em"
                  data-icon="dna"
                  class="svg-inline--fa fa-dna fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M.1 494.1c-1.1 9.5 6.3 17.8 15.9 17.8l32.3.1c8.1 0 14.9-5.9 16-13.9.7-4.9 1.8-11.1 3.4-18.1H380c1.6 6.9 2.9 13.2 3.5 18.1 1.1 8 7.9 14 16 13.9l32.3-.1c9.6 0 17.1-8.3 15.9-17.8-4.6-37.9-25.6-129-118.9-207.7-17.6 12.4-37.1 24.2-58.5 35.4 6.2 4.6 11.4 9.4 17 14.2H159.7c21.3-18.1 47-35.6 78.7-51.4C410.5 199.1 442.1 65.8 447.9 17.9 449 8.4 441.6.1 432 .1L399.6 0c-8.1 0-14.9 5.9-16 13.9-.7 4.9-1.8 11.1-3.4 18.1H67.8c-1.6-7-2.7-13.1-3.4-18.1-1.1-8-7.9-14-16-13.9L16.1.1C6.5.1-1 8.4.1 17.9 5.3 60.8 31.4 171.8 160 256 31.5 340.2 5.3 451.2.1 494.1zM224 219.6c-25.1-13.7-46.4-28.4-64.3-43.6h128.5c-17.8 15.2-39.1 30-64.2 43.6zM355.1 96c-5.8 10.4-12.8 21.1-21 32H114c-8.3-10.9-15.3-21.6-21-32h262.1zM92.9 416c5.8-10.4 12.8-21.1 21-32h219.4c8.3 10.9 15.4 21.6 21.2 32H92.9z"
                  ></path>
                </svg>
                <span>
                  <em>Dr Lal Pathlabs</em>
                </span>
              </div>
            </div>
          </div>
          <div class="card-body p-2 pl-3 mt-n2 d-none d-md-block">
            <span>Laboratory</span>
            <strong class="ml-2">Dr Lal Pathlabs</strong>
          </div>
          <div class="my-1 d-flex justify-content-between">
            <div class="ml-3 mt-4 w-100 px-3 d-flex justify-content-between d-md-block align-items-center">
              <div class="d-md-none">
                <div class="doctor d-md-none py-0 px-0">
                  <svg
                    class="red-dna"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    height="0.5em"
                    width="0.5em"
                    data-icon="dna"
                    class="svg-inline--fa fa-dna fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M.1 494.1c-1.1 9.5 6.3 17.8 15.9 17.8l32.3.1c8.1 0 14.9-5.9 16-13.9.7-4.9 1.8-11.1 3.4-18.1H380c1.6 6.9 2.9 13.2 3.5 18.1 1.1 8 7.9 14 16 13.9l32.3-.1c9.6 0 17.1-8.3 15.9-17.8-4.6-37.9-25.6-129-118.9-207.7-17.6 12.4-37.1 24.2-58.5 35.4 6.2 4.6 11.4 9.4 17 14.2H159.7c21.3-18.1 47-35.6 78.7-51.4C410.5 199.1 442.1 65.8 447.9 17.9 449 8.4 441.6.1 432 .1L399.6 0c-8.1 0-14.9 5.9-16 13.9-.7 4.9-1.8 11.1-3.4 18.1H67.8c-1.6-7-2.7-13.1-3.4-18.1-1.1-8-7.9-14-16-13.9L16.1.1C6.5.1-1 8.4.1 17.9 5.3 60.8 31.4 171.8 160 256 31.5 340.2 5.3 451.2.1 494.1zM224 219.6c-25.1-13.7-46.4-28.4-64.3-43.6h128.5c-17.8 15.2-39.1 30-64.2 43.6zM355.1 96c-5.8 10.4-12.8 21.1-21 32H114c-8.3-10.9-15.3-21.6-21-32h262.1zM92.9 416c5.8-10.4 12.8-21.1 21-32h219.4c8.3 10.9 15.4 21.6 21.2 32H92.9z"
                    ></path>
                  </svg>
                  <span class="sml">
                    <em>Dr Lal Pathlabs</em>
                  </span>
                </div>
              </div>
              <div>
                <h3 class="d-inline tpro">
                  <b>
                    <i class="fas fa-rupee-sign"></i>700
                  </b>
                </h3>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-4 mt-3">
            <a href="#" class="btn btn-3 px-4">
              <strong>Book Now</strong>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
