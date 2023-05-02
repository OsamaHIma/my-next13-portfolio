"use client";
import { socialIcons } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <motion.div
      initial={{ x: "-4rem", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      viewport={{ once: true }}
      className="social-icons fixed left-6 bottom-0"
    >
      <ul className="flex flex-col gap-6 after:content-[''] after:block after:w-[2px] after:h-20 after:mx-auto after:dark:bg-slate-50 after:bg-indigo-400 after:mb-2">
        {socialIcons.map(({ name, icon, url }) => (
          <li key={name} title={name} className="flexCenter">
            <Link
              href={url}
              className="dark:text-slate-50 focus:-translate-y-1 hover:-translate-y-1 focus:!text-theme-color text-indigo-600 p-3 focus:outline-dashed outline-2 outline-theme-color hover:!text-theme-color transition-all ease-in"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
