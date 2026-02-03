"use client";

import { useState } from "react";
import MovieCategory from "./MovieCategory";
import Movies from "./Movies";
import { dataMovieList } from "@/app/_data/movie-list-data";

const MovieList = () => {
  const [list, setList] = useState(dataMovieList);

  return (
    <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20">
      <MovieCategory />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {list.map(({ rate, img, id, title }) => (
          <Movies key={id} img={img} title={title} rate={rate} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
