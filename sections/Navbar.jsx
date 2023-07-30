"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import {
  Moon,
  Sun,
  Laptop,
  MenuIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  Maximize,
  Minimize,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// h- stands for header-
const Navbar = () => {
  const { setTheme } = useTheme();
  const [showThemeMenu, setThemeMenu] = useState("-top-[400px]");
  const [showMenu, setMenu] = useState("-right-[400px]");
  const [scrolled, setScrolled] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  // theme Menu toggler button
  const openThemeMenu = () => {
    if (showMenu === "right-0") {
      setMenu("-right-[400px]");
    }

    if (showThemeMenu === "top-[17%]") {
      setThemeMenu("-top-[400px]");
    } else {
      setThemeMenu("top-[17%]");
    }
  };
  // Menu toggler button
  const openMenu = () => {
    if (showThemeMenu === "top-[17%]") {
      setThemeMenu("-top-[400px]");
    }

    if (showMenu === "right-0") {
      setMenu("-right-[400px]");
    } else {
      setMenu("right-0");
    }
  };
  // toggle Maximize
  const handelMaximize = (event) => {
    event.preventDefault();
    if (document.fullscreenEnabled) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsMaximized(false);
      } else {
        document.documentElement.requestFullscreen();
        setIsMaximized(true);
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 170) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className={` ${
        scrolled &&
        "backdrop-blur-md bg-main-color/60 !text-slate-100 dark:bg-transparent"
      } w-full fixed top-0 z-20 h-wrapper transition-all ease-in text-slate-800 dark:text-white`}
    >
      <motion.div
        initial={{ y: "-2rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
        className="h-container relative py-4 flexCenter !flex-nowrap border-b-[3px] border-slate-300 dark:border-indigo-400 !justify-between innerWidth"
      >
        <Link href="/">
          <h1 className="font-bold md:text-xl">
            <ChevronLeftIcon className="inline text-theme-color" size={37} />
            OSAMA IBRAHIM <span className="text-md">/</span>
            <ChevronRightIcon className="inline text-theme-color" size={37} />
          </h1>
        </Link>
        <nav className="flexCenter relative">
          {/* Theme menu */}
          <button className="mx-4" onClick={openThemeMenu}>
            <Moon className="rotate-90 hidden transition-all hover:text-slate-900 dark:rotate-0 dark:block dark:saturate-100 dark:text-slate-400 dark:hover:text-slate-100" />
            <Sun className="rotate-0 block transition-all hover:text-slate-900 dark:rotate-90 dark:hidden dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle theme menu</span>
          </button>

          <ul
            className={`${showThemeMenu} menuTransition flex w-[9rem] absolute right-0 md:right-[60%] z-10 flex-col m-8 shadow-lg select-none`}
          >
            <li
              className="bg-theme-color pb-2 pt-4 rounded-t-md px-8 cursor-pointer text-slate-200 hover:text-slate-50"
              onClick={() => setTheme("dark")}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </li>
            <li
              className=" bg-theme-color py-2 pl-8 cursor-pointer text-slate-200 hover:text-slate-50"
              onClick={() => setTheme("light")}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </li>
            <li
              className=" bg-theme-color pt-2 pb-4 rounded-b-md pl-8 cursor-pointer text-slate-200 hover:text-slate-50"
              onClick={() => setTheme("system")}
            >
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </li>
          </ul>

          {/* for large screens */}
          <div className="hidden lg:block">
            <ul className="h-menu flexCenter !gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`#${link.id}`} title={link.name}>
                    <span className="font-semibold mx-2 text-theme-color">
                      0{index + 1}.
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <button
                type="button"
                className={`${
                  scrolled && "bg-theme-color"
                } btn border-2 mr-1 border-solid border-theme-color`}
              >
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1U9RZB4ZQ2EpwKdj988bsUFa8q7K9vtYh/view?usp=drive_link"
                  className={`text-theme-color ${scrolled && "!text-slate-50"}`}
                >
                  My Resume
                </Link>
              </button>
              <button
                className="mr-4 transition-all ease-in-out"
                onClick={handelMaximize}
                title="Toggle maximize and minimize screen"
              >
                {isMaximized ? <Minimize /> : <Maximize />}
              </button>
            </ul>
          </div>

          {/* for medium and small screens */}
          <button className="mx-4 block lg:hidden" onClick={openMenu}>
            <MenuIcon className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle menu</span>
          </button>

          <ul
            className={`flex lg:hidden !text-white font-medium menuTransition ${showMenu} absolute bg-slate-900 py-8 px-11 rounded-lg w-[15rem] top-[27%] z-10 flex-col m-8 shadow-lg`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="my-3" title={link.name}>
                <Link href={`#${link.id}`}>
                  <span className="font-semibold mx-2 text-theme-color">
                    0{index + 1}.
                  </span>
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              type="button"
              className="btn !border-4 !border-solid !border-theme-color"
            >
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1U9RZB4ZQ2EpwKdj988bsUFa8q7K9vtYh/view?usp=drive_link"
                className="!text-theme-color"
              >
                My Resume
              </Link>
            </button>
          </ul>
        </nav>
      </motion.div>
    </section>
  );
};

export default Navbar;
