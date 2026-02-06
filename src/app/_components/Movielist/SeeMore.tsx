import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SeeMoreProps = {
  url: string;
};

export const SeeMore = ({ url }: SeeMoreProps) => {
  return (
    <Link href={url}>
      <div className="flex items-center justify-center w-30 gap-2 cursor-pointer">
        <button className="font-medium text-[14px] leading-5 cursor-pointer  dark:text-[#fafafa]">
          See more
        </button>
        <ArrowRight className="w-4 h-4  dark:text-[#fafafa]" />
      </div>
    </Link>
  );
};
