import React from "react";
import UpcomingTest from "./rightColumnComponents/upcomingTest";
const rightColumn = () => {
  return (
    <div class="col-12 col-lg-4 d-none d-lg-block">
      <div class="row">
        <UpcomingTest />
      </div>
    </div>
  );
};
export default rightColumn;
