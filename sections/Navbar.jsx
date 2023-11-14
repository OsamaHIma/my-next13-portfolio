"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import {
  MenuIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  Maximize,
  Minimize,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Translate } from "translate-easy";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

// h- stands for header-
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

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
      className={` ${scrolled &&
        "backdrop-blur-md bg-main-color/60 !text-slate-100 dark:bg-transparent"
        } w-full fixed top-0 z-20 h-wrapper transition-all ease-in text-slate-800 dark:text-white`}
    >
      <motion.div
        initial={{ y: "-2rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
        className="h-container py-4 flexCenter !flex-nowrap border-b-[3px] border-slate-300 dark:border-indigo-400 !justify-between innerWidth"
      >
        <Link href="/">
          <h1 className="font-bold md:text-xl" dir="ltr">
            <ChevronLeftIcon className="inline text-theme-color" size={37} />
            OSAMA IBRAHIM <span className="text-md">/</span>
            <ChevronRightIcon className="inline text-theme-color" size={37} />
          </h1>
        </Link>
        <nav className="flexCenter gap-2">
          {/* Theme menu */}
          <ThemeSelector />

          {/* for large screens */}
          <div className="hidden xl:block">
            <ul className="h-menu flexCenter !gap-6">
              <LanguageSelector />
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`#${link.id}`} title={link.name}>
                    <span className="font-semibold mx-2 text-theme-color">
                      0{index + 1}.
                    </span>
                    {link.name === "About Me" ? (
                      <Translate translations={{ ar: "نبذه عني" }}>
                        {link.name}
                      </Translate>
                    ) : (
                      <Translate>{link.name}</Translate>
                    )}
                  </Link>
                </li>
              ))}
              <Button
                type="button"
                variant="outlined"
                className={`${scrolled && "bg-theme-color"
                  }  border-2 mr-1 border-solid border-theme-color`}
              >
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1U9RZB4ZQ2EpwKdj988bsUFa8q7K9vtYh/view?usp=drive_link"
                  className={`text-theme-color ${scrolled && "!text-slate-50"}`}
                >
                  <Translate>My Resume</Translate>
                </Link>
              </Button>
              <IconButton
                variant="text"
                className={` ${scrolled ? "text-slate-100" : "text-slate-900 dark:text-slate-200"
                  }  transition-all ease-in-out`}
                onClick={handelMaximize}
                title="Toggle maximize and minimize screen"
              >
                {isMaximized ? <Minimize /> : <Maximize />}
              </IconButton>
            </ul>
          </div>

          {/* for medium and small screens */}

          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <IconButton
                variant="text"
                className="mx-1.5 md:mx-4 block rounded-full xl:hidden"
              >
                <MenuIcon className={` ${scrolled ? "text-slate-100" : "text-slate-900 dark:text-slate-400 transition-all ease-in-out duration-300"
                  }`} />
                <span className="sr-only">
                  <Translate>Toggle menu</Translate>
                </span>
              </IconButton>
            </MenuHandler>

            <MenuList className="dark:bg-slate-900 border-0 w-[15rem] flex gap-1 flex-col xl:hidden text-stone-950 dark:text-stone-50 shadow-lg text-base">
              <LanguageSelector />
              {navLinks.map((link, index) => (
                <Link key={index} href={`${link.id}`}>
                  <MenuItem className="hover:!border-0 dark:hover:!bg-gray-100 text-base">
                    <span className="font-semibold mx-2 text-theme-color">
                      0{index + 1}.
                    </span>
                    <Translate>{link.name}</Translate>
                  </MenuItem>
                </Link>
              ))}
              <Button className="min-w-[7rem] max-w-[8rem] mx-auto bg-theme-color hover:bg-theme-color/70 ">
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1RHi0nJJB15-gWUZAEbVdROEdqE1Nlvu_/view?usp=sharing"
                >
                  <Translate>My Resume</Translate>
                </Link>
              </Button>
            </MenuList>
          </Menu>
        </nav>
      </motion.div>
    </section>
  );
};

export default Navbar;
