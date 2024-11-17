import React, { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScroll from "../components/HorizontalScroll";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const { data: trendingMovies } = useFetch("/movie/top_rated");
  const { data: trendingTv } = useFetch("/tv/top_rated");

  return (
    <div>
      <HomeBanner />
      <HorizontalScroll
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScroll
        data={trendingMovies}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={trendingTv}
        heading={"Top Rated Shows"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
