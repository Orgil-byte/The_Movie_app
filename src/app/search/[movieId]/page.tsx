import { GenreList } from "@/components/GenreList";
import { getGenreMoviesPlay } from "@/lib/api/genreMovies";
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

type SearchProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Search({ searchParams }: SearchProps) {
  const { genre, page } = await searchParams;
  const currentPage = Number(page) || 1;

  const data = genre
    ? await getGenreMoviesPlay(String(genre), currentPage)
    : null;

  const getPageNumbers = () => {
    if (currentPage === 1) return [1, 2, 3];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-20 gap-8 w-full max-w-360 py-10">
      {/* Movie results */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl dark:text-white">
          {genre ? "Movies by Genre" : "Select a genre to browse movies"}
        </h1>

        {data && data.results.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
                    href={
                      currentPage > 1
                        ? `/search?genre=${genre}&page=${currentPage - 1}`
                        : "#"
                    }
                  />
                </PaginationItem>
                {getPageNumbers().map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      className="dark:text-white"
                      href={`/search?genre=${genre}&page=${pageNumber}`}
                      isActive={pageNumber === currentPage}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    className="dark:text-white dark:bg-neutral-900"
                    href={
                      currentPage < data.total_pages
                        ? `/search?genre=${genre}&page=${currentPage + 1}`
                        : "#"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        ) : (
          genre && (
            <p className="dark:text-white">No movies found for this genre.</p>
          )
        )}
      </div>

      {/* Genre sidebar */}
      <GenreList activeGenreId={genre ? String(genre) : undefined} />
    </div>
  );
}
