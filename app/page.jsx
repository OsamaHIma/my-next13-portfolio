import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import AboutMe from "@/sections/AboutMe";

const Home = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="relative transition-all ease-in">
        <div className="gradient absolute w-80 h-80 bg-theme-color/25 blur-[100px] left-[100px] -z-[1]" />
        <Navbar />
        <main>
          <Hero /> 
          <AboutMe /> 
        </main>
      </div>
      <SocialIcons />
      <Email />
    </div>
  );
};
export default Home;
