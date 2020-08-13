import React from "react";
import Cards from "./cards";
const packages = () => {
  return (
    <div>
      <div class="d-flex justify-content-between pt-md-5 my-3 align-items-center">
        <div class="frequent pl-md-4 fsize">Packages</div>
        <a href="#">View all</a>
      </div>
      <div class="pl-md-4 d-flex d-md-block justify-content-between mb-2 align-items-center">
        <div class="d-flex align-items-center">
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
        </div>
        <div class="d-flex d-md-none sml align-items-center">
          <small class="lab font-weight-bold">Type</small>
          <select class="form-control ml-2" id="exampleFormControlSelect1">
            <option>
              <a class="btn btn-sm" href="#" role="button">
                Category
              </a>
            </option>
            <option>
              <a class="btn btn-sm" href="#" role="button">
                Full Body
              </a>
            </option>
            <option>
              <a class="btn btn-sm" href="#" role="button">
                Women
              </a>
            </option>
            <option>
              <a class="btn btn-sm" href="#" role="button">
                Allergy
              </a>
            </option>
            <option>
              <a class="btn btn-sm" href="#" role="button">
                Vitamin
              </a>
            </option>
            <option>
              <a class="btn btn-sm" href="#" role="button">
                Thyrocare
              </a>
            </option>
            <option>
              <a class="btn btn-sm" href="#" role="button">
                HAMM
              </a>
            </option>
          </select>
        </div>

        <div class="d-none d-md-block">
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Dr Lal Pathlabs
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Thyrocare
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            HAMM
          </a>
          <div class="w-100"></div>
          <small class="lab font-weight-bold">Catagory</small>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Full Body
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Women
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Allergy
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Vitamin
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
            Thyrocare
          </a>
          <a class="btn pill px-5 m-2 btn-sm" href="#" role="button">
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
export default packages;
