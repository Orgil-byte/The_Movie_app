"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getMovieGenres } from "@/lib/api";
import { Genre } from "@/lib/movie-data-types";

export const GenreList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getMovieGenres().then(({ genres }) => setGenres(genres));
  }, []);

  const activeGenres =
    searchParams.get("genre")?.split(",").filter(Boolean) ?? [];

  const toggleGenre = (genreId: number) => {
    const id = String(genreId);
    const newGenres = activeGenres.includes(id)
      ? activeGenres.filter((g) => g !== id)
      : [...activeGenres, id];

    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (newGenres.length > 0) {
      params.set("genre", newGenres.join(","));
    } else {
      params.delete("genre");
    }
    // preserve existing query if present
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full lg:max-w-72 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl dark:text-white">
          Search by genre
        </h1>
        <p className="text-base dark:text-white">
          Select one or more genres to filter
        </p>
      </div>
      <div className="w-full h-px bg-gray-300 dark:bg-neutral-700" />
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => {
          const isActive = activeGenres.includes(String(genre.id));
          return (
            <Badge
              key={genre.id}
              onClick={() => toggleGenre(genre.id)}
              className={`cursor-pointer font-semibold text-xs px-3.5 h-7 flex items-center gap-1 transition-colors select-none
                ${
                  isActive
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "text-black bg-white border border-gray-300 dark:bg-black dark:text-white dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-900"
                }`}
            >
              {genre.name}
              {isActive ? (
                <X className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
