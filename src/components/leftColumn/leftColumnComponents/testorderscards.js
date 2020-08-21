import React from "react";
const cards = () => {
  return (
    <div class="col-12 my-3">
      <div class="headline text-white d-flex justify-content-between px-2 py-2">
        <div>
          <span>Date</span>
          <span class="ml-3">April 01,2020</span>
        </div>
        <div class="d-flex justify-content-between content">
          <span>Order number</span>
          <span>1002435</span>
          <a href="" class="text-white">
            Invoice
          </a>
          <a href="" class="text-white">
            View details
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <table>
          <tr>
            <th class="px-3 py-2">Name</th>
            <td class="px-3 py-2">Agnideep Sengupta</td>
          </tr>
          <tr>
            <th class="px-3 py-2">Test</th>
            <td class="px-3 py-2">PPBS, Thyroid profile</td>
          </tr>
          <tr>
            <th class="px-3 py-2">Lab</th>
            <td class="px-3 py-2">HAMM</td>
          </tr>
          <tr>
            <th class="px-3 py-2">Price</th>
            <td class="px-3 py-2">255</td>
          </tr>
        </table>
        <div class="d-flex flex-column justify-content-between py-2">
          <div>
            <h6>Status</h6>
            <hd class="text-success">Report Delivered</hd>
          </div>
          <button class="btn btn-warning">Test again</button>
        </div>
      </div>
    </div>
  );
};
export default cards;
