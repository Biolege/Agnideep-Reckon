import React from "react";

const sampleCollection = () => {
  return (
    <div class="row">
      <div class="col-12 col-lg-4 my-4" id="#sample">
        <b>Sample Collection</b>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Name</b>
          </div>
          <div class="col-6">Patient Name</div>
        </div>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Age</b>
          </div>
          <div class="col-6">43</div>
        </div>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Gender</b>
          </div>
          <div class="col-6">Male</div>
        </div>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Mobile</b>
          </div>
          <div class="col-6">9876543210</div>
        </div>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Address</b>
          </div>
          <div class="col-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            officiis!
          </div>
        </div>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Date</b>
          </div>
          <div class="col-6">13-04-2020</div>
        </div>
        <div class="row d-flex justify-content-between my-2">
          <div class="col-6">
            <b>Time</b>
          </div>
          <div class="col-6">10:30 am</div>
        </div>
      </div>
      <div class="col-12 col-lg-4 my-4">
        <b>Report Delivery</b>
        <div class="row my-2">
          <div class="col-5">
            <b>Date</b>
          </div>
          <div class="col-5">14-04-2020</div>
        </div>
        <div class="row my-2">
          <div class="col-5">
            <b>Time</b>
          </div>
          <div class="col-5">05:00 pm</div>
        </div>
      </div>
      <div class="col-12 col-lg-4 my-4">
        <b>Order Summary</b>
        <table>
          <tr>
            <th>
              <small>Tests(s) Price</small>
            </th>
            <td>1200.00</td>
          </tr>
          <tr>
            <th>Delivery Charge</th>
            <td>20.00</td>
          </tr>
          <tr id="bottom">
            <th>Membership discount</th>
            <td>-50.00</td>
          </tr>

          <tr>
            <th>Grand Total</th>
            <td>1170.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default sampleCollection;
