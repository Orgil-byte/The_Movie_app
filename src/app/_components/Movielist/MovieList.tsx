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
      {list.map(({ rate, img, id, title }) => (
        <Movies id={id} img={img} title={title} rate={rate} />
      ))}
    </div>
  );
};

export default MovieList;
