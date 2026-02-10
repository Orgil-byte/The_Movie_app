"use client";
import { useState } from "react";
import MovieCategory from "./MovieCategory";
import { dataUpcomingList } from "@/app/_data/movie-list-data";
import { dataPopularList } from "@/app/_data/movie-list-data";
import { dataTopRatedList } from "@/app/_data/movie-list-data";
import Movies from "./Movies";
import { FetchMovieDataType } from "@/lib/api";

type MovieListProps = {
  showSeeMore: boolean;
  data: FetchMovieDataType;
};

export const UpComingMovies = ({
  data,
  showSeeMore = true,
}: MovieListProps) => {
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory
        categoryName="Upcoming"
        showSeeMore={showSeeMore}
        url="/UpComing"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {data.map(({ movie }) => (
          <Movies
            key={movie.id}
            img={""}
            title={movie.title}
            rate={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export const PopularMovies = ({ showSeeMore = true }: MovieListProps) => {
  const [popularMovies, setPopularMovies] = useState(dataPopularList);
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory
        categoryName="Popular"
        url="/Popular"
        showSeeMore={showSeeMore}
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {popularMovies.map(({ rate, img, id, title }) => (
          <Movies key={id} img={img} title={title} rate={rate} />
        ))}
      </div>
    </div>
  );
};

export const TopRatedMovies = ({ showSeeMore = true }: MovieListProps) => {
  const [topRatedMovies, setTopRatedMovies] = useState(dataTopRatedList);
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory
        categoryName="Top Rated"
        url="/TopRated"
        showSeeMore={showSeeMore}
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {topRatedMovies.map(({ rate, img, id, title }) => (
          <Movies key={id} img={img} title={title} rate={rate} />
        ))}
      </div>
    </div>
  );
};
