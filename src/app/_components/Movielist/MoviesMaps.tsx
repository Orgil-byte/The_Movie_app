"use client";
import { useState } from "react";
import MovieCategory from "./MovieCategory";
import { dataUpcomingList } from "@/app/_data/movie-list-data";
import { dataPopularList } from "@/app/_data/movie-list-data";
import { dataTopRatedList } from "@/app/_data/movie-list-data";
import Movies from "./Movies";

export const UpComingMovies = () => {
  const [upComingMovies, setUpComingMovies] = useState(dataUpcomingList);
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory categoryName="Upcoming" url="/UpComing" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {upComingMovies.map(({ rate, img, id, title }) => (
          <Movies key={id} img={img} title={title} rate={rate} />
        ))}
      </div>
    </div>
  );
};

export const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(dataPopularList);
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory categoryName="Popular" url="/Popular" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {popularMovies.map(({ rate, img, id, title }) => (
          <Movies key={id} img={img} title={title} rate={rate} />
        ))}
      </div>
    </div>
  );
};

export const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState(dataTopRatedList);
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory categoryName="Top Rated" url="/TopRated" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {topRatedMovies.map(({ rate, img, id, title }) => (
          <Movies key={id} img={img} title={title} rate={rate} />
        ))}
      </div>
    </div>
  );
};
