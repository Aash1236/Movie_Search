import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
      // console.log("response", response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((preve) => preve + 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // console.log("location", location.search.slice(3));
  return (
    <div className="pt-16">
      <div className="sticky z-30 mx-2 my-2 lg:hidden top-20">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className="w-full px-4 py-1 text-lg text-gray-900 bg-white rounded-full"
        />
      </div>
      <div className="container mx-auto">
        <h2 className="my-2 text-lg font-semibold capitalize lg:text-xl ">
          Search Results
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={`search-${searchData.id}-${index}`}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
