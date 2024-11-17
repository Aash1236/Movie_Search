import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
      // console.log("response", response.data.results);
    } catch (error) {
      console.error("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
      // console.log(
      //   "configuratio",
      //   response.data.images.secure_base_url + "original"
      // );
    } catch (error) {}
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <div className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16 min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;
