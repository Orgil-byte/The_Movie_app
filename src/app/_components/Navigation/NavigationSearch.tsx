"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import Link from "next/link";
import { navGenresData } from "@/app/_data/nav-genres-data";

import {
  InputGroup,
  // InputGroupAddon,
  // InputGroupButton,
  InputGroupInput,
  // InputGroupText,
  // InputGroupTextarea,
} from "@/components/ui/input-group";
import { Search, X } from "lucide-react";

type NavigationSearchProps = {
  closeSearch: () => void;
};
export const NavigationSearch = ({ closeSearch }: NavigationSearchProps) => {
  const [genres, setGenres] = useState(navGenresData);
  return (
    <div className="w-full h-14.75 flex justify-between items-center lg:mb-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-9 h-9 flex justify-center items-center"></NavigationMenuTrigger>
            <NavigationMenuContent className="p-5">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-2xl leading-8 text-[#09090B]">
                  Genres
                </h1>
                <p className="text-base text-[#09090B]">
                  See lists of movies by genre
                </p>
              </div>
              <div className="w-full py-4">
                <div className="w-full h-px bg-gray-300"></div>
              </div>
              <ul className="flex w-77 gap-4 h-fit flex-wrap">
                {genres.map((genres) => (
                  <Badge
                    key={genres.title}
                    className="hover:bg-white hover:text-black hover:border hover:border-gray-300 "
                  >
                    <ListItem
                      className="font-semibold text-[12px] rounded-full"
                      title={genres.title}
                      href={genres.href}
                    ></ListItem>
                  </Badge>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-63">
        <button className="cursor-pointer">
          <Search className="w-4.5 text-gray-400 object-cover h-4.5" />
        </button>
        <InputGroup className="border-none shadow-none">
          <InputGroupInput
            className="focus:shadow-none outline-none focus:outline-none focus:ring-0"
            placeholder="Search"
          />
        </InputGroup>
      </div>
      <button onClick={closeSearch} className="cursor-pointer">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
