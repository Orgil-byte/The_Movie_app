"use client";
import { useState, useEffect, use } from "react";
import { getSearchValue } from "@/lib/api";
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
import { FetchMovieDataType } from "@/lib/movie-data-types";

type SearchSeeMoreProps = {
  params: Promise<{ movieId: string }>;
};

const SearchContent = ({ query }: { query: string }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<FetchMovieDataType | null>(null);

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
    <div className="w-full flex flex-col items-center my-10">
      <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
        <div className="h-9 flex justify-between items-center w-full">
          <p className="font-semibold text-[24px] leading-8 tracking-[-2.5%] dark:text-[#fafafa]">
            {data.results.length} results for "{query}"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
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
  );
};

const SearchSeeMore = ({ params }: SearchSeeMoreProps) => {
  const { movieId: query } = use(params);
  return <SearchContent query={query} />;
};

export default SearchSeeMore;
