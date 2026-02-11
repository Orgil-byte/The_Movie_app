import { UpComingMovies } from "../_components/Movielist/MoviesMaps";
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

const UpComingPage = async () => {
  const data = await getUpComingMovies();
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
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="dark:text-white" href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="dark:text-white" href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="dark:text-white" href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="dark:text-white" />
            </PaginationItem>
            <PaginationItem>
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

export default UpComingPage;
