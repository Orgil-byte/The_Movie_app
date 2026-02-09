import { Badge } from "@/components/ui/badge";

export const MovieInfo = () => {
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
            <Badge className="font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800">
              Fairy Tale
            </Badge>
            <Badge className="font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800">
              Pop Musical
            </Badge>
            <Badge className="font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800">
              Fantasy
            </Badge>
            <Badge className="font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800">
              Musical
            </Badge>
            <Badge className="font-semibold text-[12px] text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800">
              Romance
            </Badge>
          </div>
          <p className="leading-6 dark:text-white">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex gap-13.25">
            <h3 className="font-bold dark:text-white">Director</h3>
            <p className="dark:text-white">Jon M. Chu</p>
          </div>
          <div className="h-px w-full bg-[#E4E4E7] dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-13.25">
            <h3 className="font-bold dark:text-white">Writers</h3>
            <p className="dark:text-white">
              Winnie Holzman · Dana Fox · Gregory Maguire
            </p>
          </div>
          <div className="h-px w-full bg-[#E4E4E7] dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-13.25">
            <h3 className="font-bold dark:text-white">Director</h3>
            <p className="dark:text-white">
              Cynthia Erivo · Ariana Grande · Jeff Goldblum
            </p>
          </div>
          <div className="h-px w-full bg-[#E4E4E7] dark:bg-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};
