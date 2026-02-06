import { ArrowRight } from "lucide-react";

type Category = {
  categoryName: string;
};

const MovieCategory = ({ categoryName }: Category) => {
  return (
    <div className="h-9 flex justify-between items-center w-full">
      <p className="font-semibold text-[24px] leading-8 tracking-[-2.5%]  dark:text-[#fafafa]">
        {categoryName}
      </p>
      <div className="flex items-center justify-center w-30 gap-2 cursor-pointer">
        <button className="font-medium text-[14px] leading-5 cursor-pointer  dark:text-[#fafafa]">
          See more
        </button>
        <ArrowRight className="w-4 h-4  dark:text-[#fafafa]" />
      </div>
    </div>
  );
};

export default MovieCategory;
