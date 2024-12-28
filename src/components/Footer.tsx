import { NavigationIcon } from "lucide-react";
import MagicButton from "./ui/MagicButton";
import { socialIcons } from "@/constants";
import { useTranslations, useLocale } from "next-intl";
import { Fragment } from "react";

const Footer = () => {
  const t = useTranslations();
  const local = useLocale();
  console.log(local);
  return (
    <footer
      className="w-full relative overflow-hidden pt-20 pb-10"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 z-1 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("Footer.heading")
            .split(/(?:your|بحضورك)/)
            .map((part, i) =>
              i === 0 ? (
                <Fragment key={i}>
                  {part}
                  <span className="bg-gradient-to-tr bg-clip-text text-transparent from-purple-200 from-40% via-80% via-blue-600 to-purple-500">
                    {t("Footer.heading").includes(
                      local === "ar" ? "بحضورك" : "your"
                    )
                      ? local === "ar"
                        ? "بحضورك"
                        : "your"
                      : ""}
                  </span>
                </Fragment>
              ) : (
                part
              )
            )}
        </h1>
        <p className="text-default-500 md:mt-10 my-5 text-center">
          {t("Footer.subheading")}
        </p>
        <a href="mailto:osamahima018@gmail.com?subject=Project%20Inquiry">
          <MagicButton
            title={t("Hero.contactMe")}
            icon={<NavigationIcon />}
            position="right"
            className="rounded-full"
            otherClasses="rounded-full"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-6 justify-between items-center container z-10">
        <p className="md:text-base text-sm md:font-normal font-light z-10">
          {t("Footer.Copyright")} © 2024{" "}
          {/* <span className="font-bold bg-gradient-to-tr bg-clip-text text-transparent from-purple-300 from-20% via-50% via-blue-600 to-purple-500">
            {t("Hero.name")}
          </span> */}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialIcons.map((info) => (
            <a
              key={info.name}
              href={info.url}
              target="_blank"
              className="w-10 h-10 z-10 flex justify-center items-center text-white bg-gradient-to-tr from-blue-600 to-purple-500 rounded-lg"
            >
              {info?.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
