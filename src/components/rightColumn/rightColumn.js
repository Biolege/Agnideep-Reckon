import React from "react";
import UpcomingTest from "./rightColumnComponents/upcomingTest";
import Report from "./rightColumnComponents/reports";
const rightColumn = () => {
  return (
    <div class="col-12 col-lg-4 d-none d-lg-block">
      <div class="row">
        <UpcomingTest />
        <Report />
      </div>
    </div>
  );
};
export default rightColumn;
