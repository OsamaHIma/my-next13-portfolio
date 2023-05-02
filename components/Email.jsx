"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const Email = () => {
  return (
    <motion.div
      initial={{ x: "4rem", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      viewport={{ once: true }}
      className="fixed bottom-0 right-6 flex flex-col gap-6 after:content-[''] after:block after:w-[2px] after:h-20 after:mx-auto after:dark:bg-slate-50 after:bg-indigo-400 after:mb-2"
    >
      <Link
        href="mailto:osamaworkemail@gmail.com"
        className="dark:text-slate-200 text-indigo-600 p-2 leading-4 tracking-wider"
        style={{ writingMode: "vertical-rl" }}
      >
        osamaworkemail@gmail.com
      </Link>
    </motion.div>
  );
};

export default Email;
