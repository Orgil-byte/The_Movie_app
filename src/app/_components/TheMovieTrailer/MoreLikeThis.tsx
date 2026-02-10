import { ArrowRight } from "lucide-react";
import Movies from "../Movielist/Movies";

export const MoreLikeThis = () => {
  return (
    <div className="flex flex-col gap-8 px-5">
      <div className="flex justify-between">
        <h2 className="font-semibold text-[24px] dark:text-white">
          More like this
        </h2>
        <div className="flex gap-1 items-center">
          <p className="font-medium dark:text-white">See more</p>
          <ArrowRight className="w-4 h-4 dark:text-white" />
        </div>
      </div>
      <div className="flex gap-5 overflow-scroll no-scrollbar">
        <Movies rate={6.9} img="TheWatchMovie/wicked.jpg" title="wicked" />
        <Movies rate={6.9} img="TheWatchMovie/wicked.jpg" title="wicked" />
        <Movies rate={6.9} img="TheWatchMovie/wicked.jpg" title="wicked" />
        <Movies rate={6.9} img="TheWatchMovie/wicked.jpg" title="wicked" />
        <Movies rate={6.9} img="TheWatchMovie/wicked.jpg" title="wicked" />
        <Movies rate={6.9} img="TheWatchMovie/wicked.jpg" title="wicked" />
      </div>
    </div>
  );
};
