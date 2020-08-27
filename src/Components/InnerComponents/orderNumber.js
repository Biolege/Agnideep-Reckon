import React from "react";

const orderNumber = () => {
  return (
    <div class="d-flex justify-content-between flex-column flex-lg-row">
      <div class="my-4">
        <div class="d-flex flex-column justify-content-between">
          <div class="mb-3">
            <b>Order number</b>
            <span class="d-block">87459637405354305</span>
          </div>
          <div class="my-3">
            <b>Payment method</b>
            <span class="d-block">Cash on delivery</span>
          </div>

          <table>
            <tr>
              <th>Tests</th>
              <td>Lipid Profile, Thyroid Profile</td>
            </tr>
            <tr>
              <th>Lab</th>
              <td>Dr Lal Pathlatb</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="my-4">
        <b>Order on</b>
        <br />
        <span>12 April 2020</span>
      </div>
      <div class="my-4">
        <b>Ordered by</b>
        <br />
        <span>Account name</span>
      </div>
    </div>
  );
};

export default orderNumber;
