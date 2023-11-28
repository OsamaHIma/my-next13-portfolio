"use client";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences, workSkills } from "@/constants";
import { styles } from "./styles";
import { AlignRightIcon, Calendar, Code, MapPin } from "lucide-react";
import { Translate } from "translate-easy";
import { TitleText, TypingText } from "@/components/TypingText";
import { staggerContainer } from "@/utils";

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
    <motion.section
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddingX}`}
      id="experience"
    >
      <motion.div
        className={`${styles.paddingX}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <TypingText title="| What I have learned so far" />
        <TitleText
          title={
            <>
              <span className="text-theme-color">02.</span>
              <Translate>My Certificates</Translate>.
            </>
          }
        />
      </motion.div>
      <div className="flex flex-col mt-20" dir="ltr">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="bg-slate-100 py-4 md:py-6 dark:bg-[#10284b] shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="font-bold text-3xl mb-7 text-center">
            <Translate>My work experience</Translate>
          </h1>
          <div className="flex items-center mb-4">
            <Code className="text-theme-color mr-2 text-4xl" />
            <h3 className="font-bold text-2xl">Front-End Developer</h3>
          </div>
          <div className="flex items-center mb-4">
            <Calendar className="text-gray-500 mr-2 text-lg" />
            <span className="text-gray-600 dark:text-gray-300 font-medium text-sm">
              May 2023 - July 2023
            </span>
            <AlignRightIcon className="text-gray-500 ml-2 text-lg" />
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="text-gray-500 mr-2 text-lg" />
            <span className="text-gray-600 dark:text-gray-300 font-medium text-sm">
              Etrevago, <Translate>Jordan</Translate> (
              <Translate>Remotely</Translate>)
            </span>
          </div>
          <ul className="list-disc list-inside mb-8">
            {workSkills.map(({ skill }, index) => (
              <motion.li
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 * index }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4"
              >
                <Translate>{skill}</Translate>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center">
            <Code className="text-theme-color mr-2 text-xl" />
            <span className="text-gray-500 dark:text-gray-300 font-medium text-lg">
              <Translate>Technologies</Translate>:
            </span>
            <span className="text-gray-600 dark:text-gray-300 font-medium text-lg ml-2">
              JavaScript, HTML, CSS, Next.js, Tailwind CSS, React.js
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
