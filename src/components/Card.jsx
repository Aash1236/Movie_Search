import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, index, trending, media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const meadiaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + meadiaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] rounded h-80 overflow-hidden relative block hover:scale-110 transition-all"
    >
      {data?.poster_path ? (
        <img src={imageURL + data?.poster_path} alt="" />
      ) : (
        <div>Image Not Found</div>
      )}

      <div className="absolute top-4">
        {trending && (
          <div className="px-4 py-1 overflow-hidden rounded-r-full bg-black/50 backdrop-blur-3xl">
            #{index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-14">
        <h2>{}</h2>
      </div>
    </Link>
  );
};

export default Card;
