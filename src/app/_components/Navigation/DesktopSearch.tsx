"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { useQueryState } from "nuqs";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import { getMovieGenres } from "@/lib/api";
import { Genre } from "@/lib/movie-data-types";
type DesktopSearchPropsType = {
  searchActive: boolean;
};

export const DesktopSearch = ({ searchActive }: DesktopSearchPropsType) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const genre = await getMovieGenres();
      const genres = genre.genres;
      setGenres(genres);
    };
    fetchMovies();
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {!searchActive ? (
            <NavigationMenuTrigger className="dark:text-white">
              Genre
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger className="dark:bg-neutral-900 border border-neutral-300 dark:text-white p-0 dark:border-neutral-800 pr-1 w-10 flex justify-center items-center h-10"></NavigationMenuTrigger>
          )}
          <NavigationMenuContent className="p-5">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8 text-[#09090B] dark:text-white">
                Genres
              </h1>
              <p className="text-base text-[#09090B] dark:text-white">
                See lists of movies by genre
              </p>
            </div>
            <div className="w-full py-4">
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <ul className="flex w-77 lg:w-144.25 gap-4 h-fit flex-wrap">
              {genres.map((genre) => (
                <Badge
                  key={genre.id}
                  className="cursor-pointer font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800"
                >
                  <ListItem
                    className="font-semibold text-[12px] rounded-full"
                    title={genre.name}
                    href={`/search/?genre=${genre.id}`}
                  />
                </Badge>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({
  title,
  children,
  href,
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <NavigationMenuLink asChild>
      <a href={href} className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="text-muted-foreground line-clamp-2">{children}</div>
      </a>
    </NavigationMenuLink>
  );
}
