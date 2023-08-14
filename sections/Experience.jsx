"use client";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/constants";
import { styles } from "./styles";
import { AlignRightIcon, Calendar, Code, MapPin } from "lucide-react";
import { Translate } from "translate-easy";

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
        <p className={`${styles.sectionSubText}`}>
          <Translate>What I have learned so far</Translate>
        </p>
        <h2
          className={`text-2xl md:text-4xl dark:text-slate-300 after:w-80 ltr:after:ml-96 rtl:after:mr-72 after:top-7 after:h-[2px] after:bg-slate-400 after:absolute after:block`}
        >
          <span className="text-theme-color">02.</span>{" "}
          <Translate>My Certificates</Translate>.
        </h2>
      </motion.div>
      <div className="flex flex-col mt-20" dir="ltr">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="bg-slate-100 dark:bg-[#10284b] shadow-lg rounded-lg overflow-hidden">
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
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Collaborated with back-end and front-end teams to develop and
                maintain web applications using JavaScript, HTML, CSS, and
                Next.js
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Worked with APIs to integrate third-party services, such as
                payment gateways and social media platforms, into web
                applications
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Reviewed code written by interns, providing actionable feedback
                and suggestions for improvement to ensure code quality and
                maintainability
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Troubleshot and debugged issues in web applications, both
                independently and in collaboration with other developers, to
                ensure optimal user experience
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Developed and implemented responsive design principles to ensure
                web applications were accessible on a range of devices,
                including desktop and mobile
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Became proficient with Next.js and new packages, such as
                styled-components and react-query, to improve application
                performance and user experience
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Developed communication and teamwork skills in a remote work
                environment, collaborating with developers, project managers,
                and clients across different time zones
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Demonstrated adaptability and flexibility by working on multiple
                projects simultaneously and adjusting to changing project
                requirements and timelines
              </Translate>
            </li>
            <li className="text-gray-600 dark:text-gray-300 font-medium text-lg mb-4">
              <Translate>
                Maintained knowledge of emerging technologies and industry
                trends through self-directed learning and professional
                development activities
              </Translate>
            </li>
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
    </section>
  );
};

export default Experience;
