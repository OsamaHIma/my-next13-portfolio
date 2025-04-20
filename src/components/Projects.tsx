"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Tooltip } from "@nextui-org/react";
import { projects } from "@/constants";
import { NavigationIcon } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";
import BlurFade from "./ui/blur-fade";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const RecentProjects = () => {
  const t = useTranslations("Projects");
  return (
    <div className="py-20 2xl:py-27" id="work">
      <h1 className="heading">
        {t("smallSelection")}{" "}
        <span className="text-primary">{t("recentProjects")}</span>
      </h1>
      <div className="grid md:grid-cols-2 p-4 gap-x-11 gap-y-11 mt-10">
        {projects.map((item, index) => (
          <BlurFade
            inView
            delay={0.2 * index}
            key={index}
            className={cn("h-full", index === 2 ? "col-span-full" : "")}
          >
            <Tilt
              glareColor="#2563eb"
              glareBorderRadius="16px"
              className={cn(
                "rounded-2xl group relative border h-full border-default-300 transition duration-700 overflow-hidden py-3 px-5",
                item?.isFeatured && "col-span-full"
              )}
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={2.5}
              tiltMaxAngleY={3}
            >
              <div className="relative flex items-center justify-center w-full mb-10">
                <div className="relative w-full h-full bg-[#13162D] overflow-hidden rounded-3xl">
                  <Image
                    src="/bg.png"
                    alt="Background pattern"
                    width={552}
                    height={330}
                    className="w-full h-full"
                  />
                </div>
                <Image
                  src={item.image || ''}
                  alt={`${item.name} preview`}
                  width={1920}
                  height={1080}
                  className="z-10 absolute max-h-full w-full object-top object-cover group-hover:rotate-0 transition-all bottom-3 sm:bottom-7 rotate-[5deg] rounded-2xl max-w-[93%]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.name}
              </h1>

              <TextGenerateEffect
                startOnView
                className="lg:text-xl lg:font-normal font-light text-sm my-[1vh]"
                words={t(item.description)}
              />
              <div className="h-13 md:h-20"></div>
              <div className="absolute bottom-5 md:bottom-7 w-[90%] md:w-[93%] flex items-center justify-between">
                <div className="flex items-center">
                  {item.tags.map((tag, index) => (
                    <Tooltip key={index} content={tag?.name}>
                      <div
                        className="border border-default-200 rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={tag.img}
                          alt={tag?.name || "Technology icon"}
                          width={20}
                          height={20}
                        />
                      </div>
                    </Tooltip>
                  ))}
                </div>

                <a
                  href={item?.live_preview}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-primary text-nowrap">
                    {t("liveDemoLabel")}
                  </p>
                  <NavigationIcon className="ms-1 max-sm:size-5 sm:ms-3 text-blue-500" />
                </a>
              </div>
            </Tilt>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
