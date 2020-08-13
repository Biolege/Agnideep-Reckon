import React from "react";
import Cards from "../packages/cards";
const profile = () => {
  return (
    <div>
      <div class="d-flex justify-content-between mt-md-3 align-items-center">
        <div class="pt-md-5 pl-md-4 fsize frequent mt-md-2">Profiles</div>
        <a href="#" class="pt-md-5">
          View all
        </a>
      </div>
      <div class="pl-md-4 d-flex align-items-center">
        <small class="lab font-weight-bold">Labs available</small>
        <select
          class="form-control d-md-none ml-2"
          id="exampleFormControlSelect1"
        >
          <option>
            <a class="btn btn-sm" href="#" role="button">
              Thyrocare
            </a>
          </option>
          <option>
            <a class="btn btn-sm" href="#" role="button">
              Dr Lal Pathlabs
            </a>
          </option>
          <option>
            <a class="btn btn-sm" href="#" role="button">
              HAMM
            </a>
          </option>
        </select>
        <div class="d-none d-md-block">
          <a class="btn pill px-3 m-2 btn-sm" href="#" role="button">
            Dr Lal Pathlabs
          </a>
          <a class="btn pill px-3 m-2 btn-sm" href="#" role="button">
            Thyrocare
          </a>
          <a class="btn pill px-3 m-2 btn-sm" href="#" role="button">
            HAMM
          </a>
        </div>
      </div>
      <div class="row row1 mb-4 slide">
        <div class="row__inner slide">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};
export default profile;
