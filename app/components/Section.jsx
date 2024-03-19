"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

const Section = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="h-32 rounded-lg bg-gray-200"></div>
      <div className="h-32 rounded-lg bg-gray-200">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide w-[250px] h-[250px] bg-green-500">
            1
          </div>
          <div className="keen-slider__slide">2</div>
          <div className="keen-slider__slide">3</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
