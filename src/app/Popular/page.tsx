import { PopularMovies } from "../_components/Movielist/MoviesMaps/PopularMovieMap";
import { getPopularMovies } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PopularPage = async () => {
  const data = await getPopularMovies(3);
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
        <PopularMovies data={data} showSeeMore={false} />
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="dark:text-white dark:bg-neutral-900"
                href="#"
              />
              {[1, 2, 3].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink className="dark:text-white" href="#">
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationNext
                className="dark:text-white dark:bg-neutral-900"
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default PopularPage;
