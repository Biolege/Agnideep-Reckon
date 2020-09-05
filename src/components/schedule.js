import React from "react";
import Table from "./table";

const schedule = () => {
  return (
    <div class="collapsible">
      <h4 class="my-5">Schedule</h4>
      <Table />
      <h4 class="my-5">Completed</h4>
      <Table />
    </div>
  );
};

export default schedule;
