import React from "react";

const search = () => {
  return (
    <div class="row">
      <div class="col-12 search text-center py-5 d-flex flex-column justify-content-center align-items-center">
        <h3 class="mt-5 my-3 book">Book your appointment from home</h3>
        <div class="d-flex justify-content-between flex-column align-items-center w-50 my-3">
          <div>
            <h2 className="place">HOJAI</h2>
          </div>
          <div>
            <h4 className="date">August 27</h4>
          </div>
        </div>
        <div class="rounded-pill search-bar px-5 py-1 my-3">
          <form action="">
            <input
              type="text"
              class="search-inp mx-md-4"
              placeholder="Search for doctors"
            />
            <i class="fas fa-search" type="button"></i>
          </form>
        </div>
      </div>
    </div>
  );
};

export default search;
