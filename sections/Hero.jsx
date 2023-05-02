import { Github } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-16 relative mx-16 flex flex-col paddings items-start gap-4 justify-center min-h-[60vh]">
      <h1 className="text-theme-color font-medium text-2xl">Hi my name is</h1>
      <h2 className="text-3xl md:text-7xl font-semibold">Osama Ibrahim.</h2>
      <div className="absolute h-14 w-14 md:w-20 md:h-20 rounded-full -z-[1] bg-main-color dark:bg-theme-color/80 top-[115px] md:top-[165px] left-5" />
      <h3 className="text-3xl md:text-7xl font-medium">
        <span className="text-slate-50">Fr</span>ont-end Developer.
      </h3>
      <p>
        I&apos;m a skilled Front-end developer with experience in JavaScript
        <br /> and Im a skilled Front-end developer with experience in
        JavaScript and expertise in frameworks like React.js, Next,js.
      </p>
      <div className="hero-btn">
        <button className="btn border-2 border-solid border-theme-color my-4 hover:bg-theme-color">
          <Link
            href="https://github.com/OsamaHIma"
            target="_blank"
            className=" text-theme-color hover:text-slate-50"
          >
            Check out my Github! <Github className="inline mx-2" />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
