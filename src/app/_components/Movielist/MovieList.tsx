"use client";

import { useState } from "react";
import MovieCategory from "./MovieCategory";
import Movies from "./Movies";
import { dataUpcomingList } from "@/app/_data/movie-list-data";
import { dataPopularList } from "@/app/_data/movie-list-data";
import { dataTopRatedList } from "@/app/_data/movie-list-data";

const MovieList = () => {
  const [list, setList] = useState(dataUpcomingList);
  const [popularList, setPopularList] = useState(dataPopularList);
  const [topRateList, setTopRateList] = useState(dataTopRatedList);

  return (
    <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13">
      <div className="flex flex-col gap-8">
        <MovieCategory categoryName="Upcoming" />
        <div className="flex flex-wrap gap-5 lg:gap-8">
          {list.map(({ rate, img, id, title }) => (
            <Movies key={id} img={img} title={title} rate={rate} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <MovieCategory categoryName="Popular" />
        <div className="flex flex-wrap gap-5 lg:gap-8">
          {popularList.map(({ rate, img, id, title }) => (
            <Movies key={id} img={img} title={title} rate={rate} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <MovieCategory categoryName="Top Rated" />
        <div className="flex flex-wrap gap-5 lg:gap-8">
          {topRateList.map(({ rate, img, id, title }) => (
            <Movies key={id} img={img} title={title} rate={rate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
