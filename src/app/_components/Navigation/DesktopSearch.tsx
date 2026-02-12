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

export const DesktopSearch = () => {
  const [genres, setGenres] = useState(navGenresData);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger className="dark:text-white">
            Genre
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-5">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl leading-8 text-[#09090B] dark:text-white">
                Genres
              </h1>
              <p className="text-base text-[#09090B] dark:text-white">
                See lists of movies by genre
              </p>
            </div>
            <div className="w-full py-4">
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <ul className="flex w-144.25 gap-4 h-fit flex-wrap">
              {genres.map((genres) => (
                <Badge
                  key={genres.title}
                  className="cursor-pointer font-semibold text-[12px]  text-black bg-white border border-gray-300 px-3.5 p-y h-5 dark:bg-black dark:text-white dark:border-neutral-800"
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
  );
};

function ListItem({
  title,
  children,
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <NavigationMenuLink asChild>
      <div className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="text-muted-foreground line-clamp-2">{children}</div>
      </div>
    </NavigationMenuLink>
  );
}
