import { TopRatedMovies } from "../_components/Movielist/MoviesMaps";
import { getTopRatedMovies } from "@/lib/api";

const TopRatedPage = async () => {
  const data = await getTopRatedMovies();
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
        <TopRatedMovies data={data} showSeeMore={false} />
      </div>
    </div>
  );
};

export default TopRatedPage;
