import React from "react";
import Logo1 from "./carausel1.svg";
import Logo2 from "./carousel 3.svg";
import Logo3 from "./membership carousel.svg";
const carousel = () => {
  return (
    <div>
      <div class="container-fluid slider-2 my-4 mx-1">
        <div>
          <img src={Logo1} />
        </div>
        <div>
          <img src={Logo2} />
          <div class="d-flex justify-content-start ml-lg-5 mt-n5 mt-4">
            <button class="btn btn-2 px-md-4 btn-sm mt-3 mt-md-0 mr-3 mr-md-0">
              Book Now
            </button>
          </div>
        </div>
        <div>
          <img src={Logo3} />
          <div class="d-flex justify-content-end mr-lg-5 mt-n5 mt-4">
            <button class="btn btn-1 px-md-4 btn-sm mt-2 mt-md-0">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default carousel;
