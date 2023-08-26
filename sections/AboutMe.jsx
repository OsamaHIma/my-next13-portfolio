"use client";
import { mySkills } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Translate } from "translate-easy";

const AboutMe = () => {
  const secRef = useRef(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    //target is the element that we want to track
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );
  return (
    <section ref={secRef}>
      <motion.div
        className="about mx-16 paddings my-60"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <div className="title relative mb-8 font-bold">
          <h2 className="text-4xl dark:text-slate-300 after:w-80 ltr:after:ml-72 rtl:after:mr-60 after:top-4 after:h-[2px] after:bg-slate-400 after:absolute after:block">
            <span className="text-theme-color">01.</span>{" "}
            <Translate translations={{ ar: "نبذة عني" }}>About Me</Translate>
          </h2>
        </div>
        <div className="grid gap-4">
          <div className="flex flex-col gap-4">
            <motion.div
              className="cv"
              style={{
                scale: scale,
                x: xTransform,
              }}
            >
              <iframe
                loading="eager"
                className="w-[100%] md:w-[65%] rounded-lg"
                style={{
                  position: "relative",
                  height: "600px",
                  maxHeight: "70vh",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  overflow: "hidden",
                }}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFom-NR5xQ&#x2F;view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </motion.div>
            <p className="text-slate-600 dark:text-slate-400 font-medium tracking-wider leading-7">
              <Translate>
                I am passionate about creating digital content for the web.
              </Translate>
              <Translate>
                My interest in web development was sparked in 2021.
              </Translate>
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-medium tracking-wider leading-7">
              <Translate>
                Here are a few technologies I’ve been working with recently:
              </Translate>
            </p>
            <ul className="grid grid-cols-[33%,33%,33%]">
              {mySkills.map((skill, index) => (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 * index }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -50 },
                  }}
                  key={index}
                  className="leading-10 text-indigo-500 font-medium relative before:content-['▹'] before:absolute before:left-[-20px] before:top-2 before:text-theme-color before:leading-3"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
