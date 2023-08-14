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
    <section id="work" className="projects mx-16 paddings mt-60 mb-52">
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
          className={`text-2xl md:text-4xl dark:text-slate-300 after:w-80 ltr:after:ml-96 rtl:after:mr-96 after:top-4 after:h-[2px] after:bg-slate-400 after:absolute after:block`}
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
                className="project my-4"
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
                dir="ltr"
              >
                <div className="project-image rounded-lg">
                  <Link href={live_preview} target="_blank">
                    <div className="project-image-overlay"></div>
                    <div className="project-image-container">
                      <Image src={image} fill alt={name} quality={100} />
                    </div>
                  </Link>
                </div>
                <div className="project-info rounded-lg">
                  <p className="project-info-overline">
                    {isFeatured && "Featured Project"}
                  </p>
                  <h3 className="project-info-title lg:text-slate-600 font-semibold text-3xl md:text-5xl dark:text-slate-300">
                    {name}
                  </h3>
                  <div className="project-info-description">
                    <p>
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
                    <li className="project-info-links-item">
                      <Link
                        href={source_code_link}
                        className="project-info-links-item-link"
                      >
                        <GithubIcon />
                      </Link>
                    </li>
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
