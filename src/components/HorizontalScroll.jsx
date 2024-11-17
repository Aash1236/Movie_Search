import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HorizontalScroll = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  return (
    <div className="container px-3 mx-auto my-10">
      <h2 className="mb-3 text-xl font-bold text-white capitalize lg:text-2xl">
        {heading}
      </h2>

      <div className="relative ">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none"
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + "heading" + index}
                data={data}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />
            );
          })}
        </div>

        <div className="absolute top-0 flex items-center justify-between w-full h-full">
          <button
            onClick={handlePrevious}
            className="z-10 p-1 -ml-2 text-black bg-white rounded-full"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="z-10 p-1 -mr-2 text-black bg-white rounded-full"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
