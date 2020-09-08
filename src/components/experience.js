import React from "react";

const experience = () => {
  return (
    <div class="my-5 mx-2">
      <div>
        <h6 class="mb-3">Experience</h6>

        <div class="ml-4">
          <h6
            type="button"
            class="text-success"
            data-toggle="modal"
            data-target="#exampleModal3"
          >
            + Add experience
          </h6>

          <div
            class="modal"
            id="exampleModal3"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog h-100 my-0 mx-auto d-flex flex-column justify-content-center">
              <div class="modal-content m-2">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add experience
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div class="form-group">
                      <label for="cn">Title</label>
                      <input type="text" class="form-control" id="cn" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <div class="form-group">
                        <label for="cn">Start year</label>
                        <input type="text" class="form-control" id="cn" />
                      </div>
                      <div class="form-group">
                        <label for="rn">End year</label>
                        <input type="text" class="form-control" id="rn" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="cn">Organization</label>
                      <input type="text" class="form-control" id="cn" />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <submit type="button" class="btn btn-primary">
                    Save changes
                  </submit>

                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h6>
            <li>Experience - no. of years</li>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default experience;
