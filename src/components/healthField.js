import React from "react";

const healthField = () => {
  return (
    <div class="container mt-sm-4 mb-5">
      <div class="row">
        <div class="col-12">
          <h4>Post a health feed</h4>
        </div>
        <div class="col-12 mt-sm-3">
          <div class="card bg-light border-dark bordrup">
            <h4 class="card-title d-flex mt-3 ml-5">
              <div class="circle rounded-circle"></div>
              <a class="mt-3 ml-3">Dr. Harshvardhan</a>
            </h4>
            <div class="card-body">
              <div class="row">
                <div class="offset-1 col-11 mt-n3">
                  <textarea
                    class="form-control border-light bg-light"
                    placeholder="Write something to make people aware...."
                    rows="2"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="card-footer border-light bg-light mb-1">
              <div class="d-flex justify-content-end">
                <div>
                  <button
                    type="button"
                    class="btn btn-sm rounded-pill px-4 attach mx-1"
                  >
                    <h7>Attach Photo</h7>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-sm rounded-pill px-5 save mx-1"
                  >
                    <h7>Post</h7>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default healthField;
