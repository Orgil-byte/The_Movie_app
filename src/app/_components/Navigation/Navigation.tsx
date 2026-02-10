"use client";
import { useState } from "react";
import {
  InputGroup,
  // InputGroupAddon,
  // InputGroupButton,
  InputGroupInput,
  // InputGroupText,
  // InputGroupTextarea,
} from "@/components/ui/input-group";

import Logo from "@/components/ui/Logo";
import { DesktopSearch } from "./DesktopSearch";
import { NavigationButtons } from "./NavigationButtons";
import { NavigationSearch } from "./NavigationSearch";
import Link from "next/link";

const NavigationMain = () => {
  const [searchActive, setSearchActive] = useState(false);
  const search = () => {
    setSearchActive(true);
  };

  const closeSearch = () => {
    setSearchActive(false);
  };

  return (
    <div className=" w-full max-w-7xl h-14.75 flex justify-between px-5 items-center md:mb-3 lg:px-0">
      {searchActive ? (
        <NavigationSearch closeSearch={closeSearch} />
      ) : (
        <div className="w-full max-w-7xl h-14.75 flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="gap-3 h-12 items-center hidden lg:flex">
            <DesktopSearch />
            <InputGroup className="w-94.75">
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </div>
          <NavigationButtons search={search} />
        </div>
      )}
    </div>
  );
};

export default NavigationMain;
