import { getMovieGenres } from "@/lib/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

type GenreListProps = {
  activeGenreId?: string;
};

export const GenreList = async ({ activeGenreId }: GenreListProps) => {
  const { genres } = await getMovieGenres();

  return (
    <div className="w-full lg:max-w-72 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl dark:text-white">Search by genre</h1>
        <p className="text-base dark:text-white">See lists of movies by genre</p>
      </div>
      <div className="w-full h-px bg-gray-300 dark:bg-neutral-700" />
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => {
          const isActive = String(genre.id) === activeGenreId;
          return (
            <Link key={genre.id} href={`/search?genre=${genre.id}`}>
              <Badge
                className={`cursor-pointer font-semibold text-xs px-3.5 h-7 flex items-center gap-1 transition-colors
                  ${
                    isActive
                      ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                      : "text-black bg-white border border-gray-300 dark:bg-black dark:text-white dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-900"
                  }`}
              >
                {genre.name}
                <ChevronRight className="w-3 h-3" />
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
