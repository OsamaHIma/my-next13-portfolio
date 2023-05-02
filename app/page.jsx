import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import AboutMe from "@/sections/AboutMe";
import Work from "@/sections/work/Work";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experiance";

const Home = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="relative transition-all ease-in">
        <div className="gradient absolute w-80 h-80 bg-theme-color/25 blur-[100px] left-[100px] -z-[1]" />
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <div className="gradient absolute w-80 h-80 bg-indigo-600/25 blur-[100px] right-[100px] -z-[1]" />
          <Experience />
          <Work />
          <div className="gradient absolute w-80 h-96 bg-cyan-700/70 blur-[100px] right-[100px] -z-[1]" />
          <Contact />
        </main>
      </div>
      <Email />
      <SocialIcons />
    </div>
  );
};
export default Home;
