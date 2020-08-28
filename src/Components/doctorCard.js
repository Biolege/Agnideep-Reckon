import React from "react";
import User from "./dummy.jpg";
const doctorCard = () => {
  return (
    <div class="container border border-light shad my-4 doc-card">
      <div class="row">
        <img
          src={User}
          class="col-3 col-sm-2 img-fluid mt-sm-5 mt-4 ml-sm-4 mr-sm-5"
          alt="Responsive image"
        />

        <div class="col-9 mt-sm-5 mt-3 doc-details">
          <div class="row">
            <div class="col-sm-6">
              <div class="row">
                <div class="col-12 d-flex">
                  <div class="col-7 col-sm-12 ml-n3 mt-sm-0 mt-3">
                    <h5 class="Doc-name">Dr Radhaswami Iyer</h5>
                  </div>
                  <div
                    class="ml-auto text-primary col-5 Available d-md-none d-lg-none d-xl-none"
                    style={{ fontSize: "10px" }}
                  >
                    Available Today
                  </div>
                </div>
                <div class="col-sm-12 text-muted mt-sm-1">Speciality</div>
                <div class="col-sm-12 text-muted mt-sm-1">
                  12 years experience
                </div>
                <div class="col-sm-12 mt-sm-1">
                  <l class="text-muted">Clinic / Hospital / Pharmacy Name</l> +
                  1 address
                </div>
                <div class="col-sm-12 text-muted mt-sm-1">
                  Full address of the location
                </div>
                <div class="col-sm-12 mt-sm-1">
                  <b>Consultation Fees Rs300</b>
                </div>
              </div>
            </div>
            <div class="col-sm-4 offset-sm-2">
              <div class="row">
                <div class="col-sm-12 text-primary mb-4 text-center Available d-none d-sm-none d-md-block">
                  <h5>Available Today</h5>
                </div>

                <div class="col-sm-12 text-md-center text-right mt-3 mb-3">
                  <button
                    type="button"
                    class="btn btn-warning btn-sm rounded-pill px-3"
                  >
                    <b>Book Appointment</b>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-11 mt-sm-4 d-none d-sm-none d-md-block">
              <h5>Available on</h5>
            </div>
            <div class="col-sm-11 ml-sm-n2 mb-3 d-none d-sm-none d-md-block">
              <table class="table-responsive">
                <tr>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week shad mt-3 ml-3">
                        Monday
                        <div class="text-muted small-btntext">March 02</div>
                      </button>
                    </a>
                    <div class="timing-1 small-table mt-2 mb-3 ml-2">
                      Slot Available : 10
                    </div>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week shad mt-3">
                        Tuesday
                        <div class="text-muted small-btntext">March 03</div>
                      </button>
                    </a>
                    <div class="timing-2 small-table mt-2 mb-3 ml-2">
                      No slot Available
                    </div>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week shad wednesday mt-3">
                        Wednesday
                        <div class="text-muted small-btntext">March 04</div>
                      </button>
                    </a>
                    <div class="timing-1 small-table mt-2 mb-3 ml-2">
                      Slot Available : 12
                    </div>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week shad mt-3">
                        Thursday
                        <div class="text-muted small-btntext">March 05</div>
                      </button>
                    </a>
                    <div class="timing-2 small-table mt-2 mb-3 ml-2">
                      No slot Available
                    </div>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week friday shad mt-3">
                        &nbsp;Friday&nbsp;
                        <div class="text-muted small-btntext">March 06</div>
                      </button>
                    </a>
                    <div class="timing-2 small-table mt-2 mb-3 ml-2">
                      No slot Available
                    </div>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week shad mt-3">
                        Saturday
                        <div class="text-muted small-btntext">March 07</div>
                      </button>
                    </a>
                    <div class="timing-2 small-table mt-2 mb-3 ml-2">.</div>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm week friday shad mt-3">
                        Sunday
                        <div class="text-muted small-btntext">March 08</div>
                      </button>
                    </a>
                    <div class="timing-2 small-table mt-2 mb-3 ml-2">.</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default doctorCard;
