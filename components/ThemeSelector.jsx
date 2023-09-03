"use client";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSelector = () => {
  const { setTheme } = useTheme();

  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <IconButton className="rounded-full" variant="text">
          <MoonIcon className="hidden rotate-90 transition-all outline-none dark:block dark:rotate-0  dark:saturate-100 text-blue-300/70" />
          <SunIcon className="block rotate-0 transition-all outline-none text-orange-300 dark:hidden dark:rotate-90 " />
          <span className="sr-only">Toggle theme menu</span>
        </IconButton>
      </MenuHandler>

      <MenuList
        dir="ltr"
        className="bg-stone-100 dark:bg-main-color border-0 shadow-lg dark:shadow-none"
        // ref={containerRef}
      >
        <MenuItem
          className="dark:text-stone-400 hover:!text-slate-100 hover:!bg-theme-color"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </MenuItem>
        <MenuItem
          className="dark:text-stone-400 hover:!text-slate-100 hover:!bg-theme-color"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="mr-2 h-4 w-4" />
          <span>Light</span>
        </MenuItem>
        <MenuItem
          className="dark:text-stone-400 hover:!text-slate-100 hover:!bg-theme-color"
          onClick={() => setTheme("system")}
        >
          <LaptopIcon className="mr-2 h-4 w-4" />
          <span>System</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ThemeSelector;
