import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HomeBanner = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(1);
  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((preve) => preve + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL]);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          const title = data.original_name || data.original_title;

          return (
            <div
              key={data.id || index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  alt={`Banner ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Navigation Buttons */}
              <div className="absolute z-10 items-center justify-between hidden w-full px-4 transform -translate-y-1/2 top-1/2 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="p-2 text-white rounded-full bg-black/50 hover:bg-black/70"
                >
                  <FaAngleLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 text-white rounded-full bg-black/50 hover:bg-black/70"
                >
                  <FaAngleRight size={24} />
                </button>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent"></div>

              {/* Content */}
              <div className="container mx-auto">
                <div className="absolute bottom-0 w-full max-w-md px-3">
                  <h2 className="text-2xl font-bold text-white lg:text-4xl drop-shadow-2xl">
                    {title}
                  </h2>
                  <p className="my-2 text-ellipsis line-clamp-3">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4 text-gray-300">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View: {Number(data.popularity).toFixed(0)}M</p>
                  </div>
                  <button className="px-4 py-2 mt-3 font-bold text-black transition-all bg-white rounded shadow-md bg-gradient-to-l hover:from-red-400 to-orange-300">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeBanner;
