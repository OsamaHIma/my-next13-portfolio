import React from "react";
import { Button } from "./ui/MovingBorders";
import { experiences } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Experience = () => {
  const t = useTranslations();
  return (
    <div className="py-20 2xl:py-27 w-full" id="experience">
      <h1 className="heading">
        {t("Experience.title")}{" "}
        <span className="text-primary">{t("Experience.title2")}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {experiences.map((card, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            as="div"
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.icon}
                alt={card.title}
                width={128}
                height={128}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {/* {card.title} */}
                  {t(card.company)}
                </h1>
                <p className="text-start text-gray-600 dark:text-white-100 mt-3 font-semibold">
                  {t(card.description)}
                </p>
                <div className="text-start space-y-0.5 text-sm text-default-500 -mb-2 lg:-mb-5 mt-2">
                  {/* <p className="text-default-900 font-semibold"></p> */}
                  <p>
                    {t(card.location)} | {t(card.date)}
                  </p>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
