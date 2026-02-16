import { SeeMore } from "./SeeMore";

type Category = {
  categoryName: string;
  url: string;
  showSeeMore: boolean;
};

const MovieCategory = ({ categoryName, url, showSeeMore = true }: Category) => {
  return (
    <div className="h-9 flex justify-between items-center w-full">
      <p className="font-semibold text-[24px] leading-8 tracking-[-2.5%]  dark:text-[#fafafa]">
        {categoryName}
      </p>
      {showSeeMore && <SeeMore url={url} />}
    </div>
  );
};

export default MovieCategory;
