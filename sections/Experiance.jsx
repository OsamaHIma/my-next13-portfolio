"use client";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/constants";
import { styles } from "./styles";

const Experience = () => {
  const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: "#1e2d47", color: "#fff" }}
      contentArrowStyle={{ borderRight: "9px solid #1e2d47" }}
      date={experience.date}
      dateClassName="text-slate-400 md:text-indigo-800 dark:text-slate-100"
      iconStyle={{ background: experience.iconBg }}

      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="font-bold text-white text-[24px] ">
          {experience.title}
        </h3>
      </div>
      <div className="mt-5 ml-5 space-y-2">
        <a href={experience.certification_link} target="_blank">
          <img
            src={experience.img}
            alt="certification"
            className="object-contain rounded-xl"
          />
        </a>
      </div>
    </VerticalTimelineElement>
  );
  return (
    <section className={`${styles.paddingX}`} id="experience">
      <motion.div
        className={`${styles.paddingX}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <p className={`${styles.sectionSubText}`}>What I have learned so far</p>
        <h2 className={`${styles.sectionHeadText}`}><span className="text-theme-color">02.</span> My Certifications.</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
