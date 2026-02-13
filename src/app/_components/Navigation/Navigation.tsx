"use client";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  InputGroup,
  // InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  // InputGroupText,
  // InputGroupTextarea,
} from "@/components/ui/input-group";

import Logo from "@/components/ui/Logo";
import { DesktopSearch } from "./DesktopSearch";
import { NavigationButtons } from "./NavigationButtons";
import { NavigationSearch } from "./NavigationSearch";
import Link from "next/link";
import { Movie } from "@/lib/movie-data-types";
import { getSearchValue } from "@/lib/api";

const NavigationMain = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movieResults, setMovieResults] = useState<Movie[]>([]);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovieResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await getSearchValue(searchValue);

      setMovieResults(data.results);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const search = () => {
    setSearchActive(true);
  };

  const closeSearch = () => {
    setSearchActive(false);
  };

  const moviesToDisplay = movieResults.filter(
    (movie) => movie.backdrop_path !== null && movie.poster_path !== null,
  );

  return (
    <div className=" w-full max-w-7xl h-14.75 flex justify-between px-5 items-center md:mb-3 lg:px-0">
      {searchActive ? (
        <NavigationSearch closeSearch={closeSearch} />
      ) : (
        <div className="w-full max-w-7xl h-14.75 flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="gap-3 h-12 items-center hidden lg:flex relative">
            <DesktopSearch />
            <InputGroup className="w-94.75">
              <InputGroupInput
                onChange={onChangeInput}
                value={searchValue}
                className="dark:text-white"
                placeholder="Search..."
              />
            </InputGroup>
            <div
              className={`${movieResults.length !== 0 ? "" : "hidden"} dark:bg-[#09090B] p-3 dark:border-[#27272A] rounded-lg border flex flex-col  bg-red-400 w-144.25 min-h-182.25 absolute left-[-8%] top-full z-10`}
            >
              {moviesToDisplay.slice(0, 5).map((movie) => (
                <div key={movie.id}>
                  <div className="p-2 flex gap-4 h-29">
                    <img
                      className="h-25 w-17 rounded-md"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="movie"
                    />
                  </div>
                  <div className="w-full h-px my-2.5 bg-[#27272A]"></div>
                </div>
              ))}
            </div>
          </div>
          <NavigationButtons search={search} />
        </div>
      )}
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default NavigationMain;
