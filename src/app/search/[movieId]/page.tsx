"use client";
import { useState, useEffect, use } from "react";
import { getMovieGenres, getSearchValue } from "@/lib/api";
import Movies from "@/app/_components/Movielist/Movies";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FetchMovieDataType, Genre } from "@/lib/movie-data-types";
import { Badge } from "@/components/ui/badge";

type SearchSeeMoreProps = {
  params: Promise<{ movieId: string }>;
};

const SearchContent = ({ query }: { query: string }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<FetchMovieDataType | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const genre = await getMovieGenres();
      const genres = genre.genres;
      setGenres(genres);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getSearchValue(query, page);
      setData(result);
    };
    fetchMovies();
  }, [query, page]);

  if (!data) return <div>Loading...</div>;

  const getPageNumbers = () => {
    if (page === 1) return [1, 2, 3];
    return [page - 1, page, page + 1];
  };

  return (
    <div className="max-w-7xl sm:px-5 lg:px-0">
      <h1 className="text-[30px] font-semibold text-[#09090B] dark:text-white">
        Search results
      </h1>
      <div className="flex flex-col sm:flex-row gap-7 items-baseline">
        <div className="w-full flex flex-col items-center my-10">
          <div className="border-none sm:border-r pr-0 flex-col w-full min-w-93.75 gap-8  lg:gap-13 max-w-360  border-[#E4E4E7] sm:pr-7 dark:border-[#27272A]">
            <div className="h-9 flex justify-between items-center w-full">
              <p className="font-semibold text-[20px] leading-8 tracking-[-2.5%] dark:text-[#fafafa] pb-10">
                {data.results.length} results for "{query}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4  md:gap-5 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {data.results.map((movie) => (
                <Link href={`/${movie.id}`} key={movie.id}>
                  <Movies
                    img={movie.poster_path ?? ""}
                    title={movie.title}
                    rate={movie.vote_average}
                    id={movie.id}
                  />
                </Link>
              ))}
            </div>

            <Pagination className="justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="dark:text-white dark:bg-neutral-900"
                    href="#"
                    onClick={() => page > 1 && setPage(page - 1)}
                  />
                </PaginationItem>
                {getPageNumbers().map((pageNumber) => (
                  <PaginationItem
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                  >
                    <PaginationLink
                      className="dark:text-white"
                      href="#"
                      isActive={pageNumber === page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    className="dark:text-white dark:bg-neutral-900"
                    href="#"
                    onClick={() => page < data.total_pages && setPage(page + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="w-full max-w-96.75 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl leading-8 text-[#09090B] dark:text-white">
              Genres
            </h1>
            <p className="text-base text-[#09090B] dark:text-white">
              See lists of movies by genre
            </p>
          </div>
          <ul className="flex w-full lg:w-full gap-4 h-fit flex-wrap">
            {genres.map((genre) => (
              <Badge
                key={genre.id}
                className="cursor-pointer font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800"
              >
                <ListItem
                  className="font-semibold text-[12px] rounded-full"
                  title={genre.name}
                  href={`/genre/${genre.id}`}
                />
              </Badge>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function ListItem({
  title,
  children,
  href,
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <a href={href} className="flex flex-col gap-1 text-sm">
      <div className="leading-none font-medium">{title}</div>
      <div className="text-muted-foreground line-clamp-2">{children}</div>
    </a>
  );
}

const SearchSeeMore = ({ params }: SearchSeeMoreProps) => {
  const { movieId: query } = use(params);
  return <SearchContent query={query} />;
};

export default SearchSeeMore;
