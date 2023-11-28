"use client";
import { Button } from "@material-tailwind/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate in when scrollPosition > 100
    if (scrollPosition > 100) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      // Animate out when scrollPosition <= 100
      controls.start({ x: "3rem", opacity: 0 });
    }
  }, [scrollPosition, controls]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed bottom-[9rem] right-10 md:right-14 z-50"
        initial={{ x: "3rem", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <Button
          className="rounded-full bg-indigo-500 p-3 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleScrollToTop}
        >
          <ArrowUp size={25} />
        </Button>
      </motion.div>
    </>
  );
};

export default ScrollToTop;
