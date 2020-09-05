import React from "react";

const calender = () => {
  return (
    <div class="collapsible2">
      <div class="text-center border px-5 my-3 border-light bordrup shad">
        <h5 class="my-3">March</h5>

        <div class="row d-flex justify-content-between">
          <div class="col-4 col-md-1">
            <i class="fas fa-chevron-left"></i>
          </div>

          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1 d-flex flex-column border">
            <span>23</span>
            <span class="text-secondary">Wed</span>
          </div>
          <div class="col-4 col-md-1">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <h5 class="my-3">Today</h5>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-12 col-lg-3 border border-light shad bordrup my-2">
          <h5 class="mt-3 mb-n3">Total appointments</h5>
          <h5 class="float-right mt-3">25</h5>
        </div>
        <div class="col-12 col-lg-3 border border-light shad bordrup my-2">
          <h5 class="mt-3 mb-n3">Completed</h5>
          <h5 class="float-right mt-3">19</h5>
        </div>
        <div class="col-12 col-lg-3 border border-light shad bordrup my-2">
          <h5 class="mt-3 mb-n3">Pending</h5>
          <h5 class="float-right mt-3">09</h5>
        </div>
      </div>
    </div>
  );
};

export default calender;
