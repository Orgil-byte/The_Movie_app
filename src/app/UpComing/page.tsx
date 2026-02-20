"use client";
import { useState, useEffect } from "react";
import { UpComingMovies } from "../_components/Movielist/MoviesMaps/UpComingMovieMap";
import { getUpComingMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FetchMovieDataType } from "@/lib/movie-data-types";

const UpComingPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<FetchMovieDataType | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getUpComingMovies(page);
      setData(result);
    };
    fetchMovies();
  }, [page]);

  if (!data) return <div>Loading...</div>;

  const getPageNumbers = () => {
    if (page === 1) return [1, 2, 3];
    return [page - 1, page, page + 1];
  };

  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
        <UpComingMovies data={data} showSeeMore={false} />
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
              <PaginationEllipsis className="dark:text-white" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className="dark:text-white dark:bg-neutral-900"
                href="#"
                onClick={() => setPage(page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default UpComingPage;
