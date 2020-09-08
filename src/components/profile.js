import React from "react";

const profile = () => {
  return (
    <div>
      <h4 class="mb-4">My Profile</h4>
      <div class="row my-5 mx-5">
        <div class="col-lg-6 col-12">
          <table>
            <tr>
              <td>Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>Date of Birth</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>Gender</td>
            </tr>
            <tr>
              <td>E-mail id</td>
              <td>E-mail id</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>Address</td>
            </tr>
          </table>
        </div>
        <div class="col-lg-6 col-12 d-lg-flex justify-content-end my-3">
          <div class="pic rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default profile;
