import { Github } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-36 mx-16 flex flex-col items-start gap-4 justify-center min-h-[60vh] paddings">
      <h1 className="text-theme-color font-medium text-2xl">
        Greetings, my name is
      </h1>
      <h2 className="text-3xl md:text-7xl font-semibold">Osama Ibrahim.</h2>
      <div className="">
        <h3 className="text-3xl md:text-7xl font-medium relative">
          <span className="text-slate-50">Front-end Developer</span>
          <div className="hero-circle absolute h-14 w-14 md:w-20 md:h-20 rounded-full -z-[1] bg-main-color dark:bg-theme-color/80 top-0 -left-3" />
        </h3>
      </div>
      <p className="font-semibold text-gray-600 dark:text-gray-300 leading-8 mt-2 text-[18px]">
        I am a skilled front-end developer with extensive experience in
        JavaScript, and I specialize in frameworks like React.js and Next.js.
        <br /> My expertise lies in delivering high-quality, optimized code that
        caters to clients needs and exceeds their expectations.
      </p>

      <Link
        href="https://github.com/OsamaHIma"
        target="_blank"
        className="btn border-2 border-solid border-theme-color my-4 hover:bg-theme-color !text-theme-color hover:!text-slate-50"
        type="button"
      >
        Check out my GitHub! <Github className="inline mx-2" />
      </Link>
    </section>
  );
};

export default Hero;
