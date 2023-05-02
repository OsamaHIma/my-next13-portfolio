"use client";
import { mySkills } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const AboutMe = () => {
  return (
    <section>
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
          <h2 className="text-4xl text-slate-300 after:w-80 after:ml-72 after:top-4 after:h-[2px] after:bg-slate-400 after:absolute after:block">
            <span className="text-theme-color">01.</span> About Me
          </h2>
        </div>
        <div className="grid grid-cols-[60%,40%] gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-slate-400 font-medium tracking-wider leading-7">
              Hello! I&apos;m Osama, I am passionate about creating digital
              content for the web. My interest in web development was sparked in
              2021.
            </p>
            <p className="text-slate-400 font-medium tracking-wider leading-7">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-[33%,33%,33%] px-12">
              {mySkills.map((skill, index) => (
                <li
                  key={index}
                  className="leading-7 text-indigo-500 font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="about-grid-photo relative w-max-content"
            style={{ width: "max-content", height: "max-content" }}
          >
            <div className="overlay"></div>
            <div className="overlay-border"></div>
            <div className="about-grid-photo-container relative w-[350px] h-[350px] object-cover">
              <Image src="/real-estate.png" alt="profile" fill />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
