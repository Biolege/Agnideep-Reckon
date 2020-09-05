import React from "react";

const table = () => {
  return (
    <table>
      <tr class="border border-light shad bordrup">
        <th class="py-2 pl-5">Patient name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Status</th>
        <th>Time slot</th>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="circle rounded-circle"></div>
            <span class="mx-2">Babur Ahmed</span>
          </div>
        </td>
        <td>Male</td>
        <td>34</td>
        <td>First Visit</td>
        <td>11 am</td>
      </tr>
      <tr class="middle">
        <td>
          <div class="d-flex align-items-center">
            <div class="circle rounded-circle"></div>
            <span class="mx-2">Babur Ahmed</span>
          </div>
        </td>
        <td>Male</td>
        <td>34</td>
        <td>First Visit</td>
        <td>11 am</td>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="circle rounded-circle"></div>
            <span class="mx-2">Babur Ahmed</span>
          </div>
        </td>
        <td>Male</td>
        <td>34</td>
        <td>First Visit</td>
        <td>11 am</td>
      </tr>
    </table>
  );
};

export default table;
