"use client";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { GithubIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "./work.scss";
import { Translate } from "translate-easy";

const Work = () => {
  return (
    <section id="work" className="projects  md:mx-16 paddings mt-60 mb-52">
      <motion.div
        className="title relative mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2
          className={`text-2xl mb-36 xl:mb-0 md:text-4xl dark:text-slate-300 after:w-80 ltr:after:ml-96 rtl:after:mr-96 after:top-4 after:h-[2px] after:bg-slate-400 after:absolute after:block`}
        >
          <span className={`text-theme-color`}>03.</span>{" "}
          <Translate>Projects I&apos;v built</Translate>
        </h2>
      </motion.div>
      <div className="projects-container">
        {projects.map(
          ({
            image,
            description,
            live_preview,
            source_code_link,
            name,
            tags,
            isFeatured,
          }) => {
            return (
              <motion.div
                className="project px-5 xl:px-0 relative flex justify-center md:justify-end my-4"
                key={name}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
                dir="ltr"
              >
                <div className="project-image relative -top-[50%] left-[50%] md:top-0 md:left-0 rounded-lg">
                  <Link href={live_preview} target="_blank">
                    <div className="project-image-container">
                    {/* <div className="project-image-overlay"></div> */}
                      <img src={image}  alt={name} quality={100} ></img>
                    </div>
                  </Link>
                </div>
                <div className="project-info items-start  rounded-lg">
                  <p className="project-info-overline">
                    {isFeatured && "Featured Project"}
                  </p>
                  <h3 className="project-info-title text-slate-700 shadow lg:text-slate-600 font-semibold text-xl md:text-3xl xl:text-5xl dark:text-indigo-600">
                    {name}
                  </h3>
                  <div className="project-info-description">
                    <p className="text-sm md:text-base tracking-wider">
                      <Translate>{description}</Translate>
                    </p>
                  </div>
                  <ul className="project-info-tech-list">
                    {tags.map((tag) => (
                      <li
                        className="project-info-tech-list-item text-indigo-600 dark:text-slate-300"
                        key={tag.name}
                      >
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    {source_code_link && (<li className="project-info-links-item">
                      <Link
                        href={source_code_link}
                        className="project-info-links-item-link"
                      >
                        <GithubIcon />
                      </Link>
                    </li>)}

                    <li className="project-info-links-item">
                      <Link
                        href={live_preview}
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Work;
