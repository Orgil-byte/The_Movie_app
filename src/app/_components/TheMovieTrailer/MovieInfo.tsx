import { Badge } from "@/components/ui/badge";
import { MovieDetailsType } from "@/lib/movie-data-types";
import { CastCrewsType } from "@/lib/movie-data-types";

type MovieInfoProps = {
  castCrew: CastCrewsType;
  movie: MovieDetailsType;
};

export const MovieInfo = ({ movie, castCrew }: MovieInfoProps) => {
  const directors = castCrew.crew
    .filter((person) => person.job === "Director")
    .map((person) => person.name)
    .join(" · ");

  const writers = castCrew.crew
    .filter((person) => person.department === "Writing")
    .slice(0, 3)
    .map((person) => person.name)
    .join(" · ");

  const stars = castCrew.cast
    .slice(0, 3)
    .map((person) => person.name)
    .join(" · ");

  return (
    <div className="px-5 w-full flex flex-col gap-5">
      <div className="flex gap-8.5">
        <img
          src="/TheWatchMovie/wicked2.jpg"
          alt="wicked"
          className="w-25 h-37 object-cover lg:hidden"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-3">
            {movie.genres.map((genre, i) => (
              <Badge
                key={i}
                className="font-semibold text-[12px] text-black bg-white border border-gray-300 px-3.5 py-0 h-5 dark:bg-black dark:text-white dark:border-neutral-800"
              >
                {typeof genre === "string"
                  ? genre
                  : ((genre as any).name ?? "")}
              </Badge>
            ))}
          </div>
          <p className="leading-6 dark:text-white">{movie.overview}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex gap-13.25">
            <h3 className="font-bold dark:text-white">Director</h3>
            <p className="dark:text-white">{directors}</p>
          </div>
          <div className="h-px w-full bg-[#E4E4E7] dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-13.25">
            <h3 className="font-bold dark:text-white">Writers</h3>
            <p className="dark:text-white">{writers}</p>
          </div>
          <div className="h-px w-full bg-[#E4E4E7] dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-13.25">
            <h3 className="font-bold dark:text-white">Stars</h3>
            <p className="dark:text-white">{stars}</p>
          </div>
          <div className="h-px w-full bg-[#E4E4E7] dark:bg-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};
