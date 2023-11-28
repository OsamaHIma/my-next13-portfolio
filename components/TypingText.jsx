"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils";
import { Translate } from "translate-easy";
import { styles } from "@/sections/styles";

export const TypingText = ({ title, textStyles }) => (

  <motion.p variants={textContainer}  className={`${styles.sectionSubText} ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`text-2xl md:text-4xl dark:text-slate-300 after:w-80 ltr:after:ml-96 rtl:after:mr-72 after:top-7 after:h-[2px] after:bg-slate-400 after:absolute after:block ${textStyles}`}
  >
    {title}
  </motion.h2>
);
