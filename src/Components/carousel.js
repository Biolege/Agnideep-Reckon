import React from "react";
import CarouselCard from "./carouselCard";

const carousel = () => {
  return (
    <div class="row">
      <div class="col-12 img-class text-center py-5">
        <div class="centered my-5">
          <h3 class="mb-4">Search for speciality</h3>
          <div class="slider mx-md-4 mx-2">
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default carousel;
