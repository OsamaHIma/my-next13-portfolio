"use client";
import { motion } from "framer-motion";
import { ArrowUp, Github } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Translate } from "translate-easy";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="mt-36 mx-16 flex flex-col items-start gap-4 justify-center min-h-[60vh] paddings">
      {scrollPosition > 100 && (
        <motion.div
          className="fixed bottom-[9rem] right-14 z-50"
          initial={{ x: "3rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
        >
          <button
            className="rounded-full bg-indigo-500 p-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handleScrollToTop}
          >
            <ArrowUp size={28} />
          </button>
        </motion.div>
      )}

      <h1 className="text-theme-color font-medium text-2xl">
        <Translate translations={{ar:"السلام عليكم أنا"}}>Greetings, my name is</Translate>
      </h1>
      <h2 className="text-3xl md:text-7xl font-semibold">
        <Translate translations={{ ar: "أسامة إبراهيم" }}>
          Osama Ibrahim
        </Translate>
        .
      </h2>
      <div className="">
        <h3 className="text-3xl md:text-7xl font-medium relative">
          <span className=" text-gray-400 dark:text-slate-100">Front-end Developer</span>
          <div className="hero-circle absolute h-14 w-14 md:w-20 md:h-20 rounded-full -z-[1] bg-main-color dark:bg-theme-color/80 md:top-0 -left-3" />
        </h3>
      </div>
      <p className="font-semibold text-gray-600 dark:text-gray-300 leading-8 mt-2 text-[18px]">
        <Translate translations={{ar:"مطور واجهات أمامية ماهر ولدي خبرة واسعة في JavaScript ، وأنا متخصص في أطر عمل مثل React.js و Next.js."}}>
          A skilled front-end developer with extensive experience in
          JavaScript, and I specialize in frameworks like React.js and Next.js.
        </Translate>
        <br />{" "}
        <Translate>
          My expertise lies in delivering high-quality, optimized code that
          caters to clients needs and exceeds their expectations.
        </Translate>
      </p>

      <Link
        href="https://github.com/OsamaHIma"
        target="_blank"
        className="btn border-2 border-solid border-theme-color my-4 hover:bg-theme-color !text-theme-color hover:!text-slate-50"
        type="button"
      >
        <Translate translations={{ ar: "ألقي نظرة علي حسابي علي GitHub!" }}>
          Check out my GitHub!
        </Translate>{" "}
        <Github className="inline mx-2" />
      </Link>
    </section>
  );
};

export default Hero;
