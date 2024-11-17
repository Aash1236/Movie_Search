import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  // console.log("params", params.explore);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
      // console.log("response", response.data.results);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((preve) => preve + 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h2 className="my-2 text-lg font-semibold capitalize lg:text-xl ">
          Discover {params.explore}s
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {data.map((exploreData, index) => {
            return (
              <Card
                data={exploreData}
                key={`exploresection-${exploreData.id}`}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
