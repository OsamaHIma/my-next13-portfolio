"use client";

import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { GithubIcon, NavigationIcon } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import Ripple from "./ui/ripple";
import InteractiveHoverButton from "./ui/interactive-hover-button";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-80 flex items-center relative justify-center container" id="hero">
      <div className="w-full absolute left-0 top-0">
        <Image
          src="/grid.svg"
          alt="grid"
          width={500}
          height={300}
          className="w-full h-full"
        />
      </div>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-[50%]"
        fill="purple"
      />
      <Spotlight className="right-0 top-28 h-[80vh] w-[50vw]" fill="blue" />
      <div className="py-16 w-full text-center">
        <BlurFade inView delay={0.2}>
          <p className="whitespace-nowrap sm:text-lg">{t("greeting")}</p>
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <AnimatedGradientText>
            <h1
              className={cn(
                `inline !leading-[2.9rem] lg:!leading-[5.3rem] animate-gradient whitespace-nowrap text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#ffaa40] via-[#2563eb] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              {t("name")}
            </h1>
          </AnimatedGradientText>
        </BlurFade>

        <BlurFade inView delay={0.7}>
          <h2 className="text-3xl font-poppins md:text-5xl lg:text-7xl font-medium whitespace-nowrap max-sm:mt-2 bg-gradient-to-br from-black-100 dark:from-white from-30% via-[#d5d8f6] via-80% to-[#eee4f0] dark:to-[#fdf7fe] bg-clip-text text-transparent">
            Front-end Developer
          </h2>
        </BlurFade>
        <TextGenerateEffect
          startOnView
          words={t("subtitle")}
          className="text-default-800 leading-6 sm:leading-8 mt-2 text-sm sm:text-lg"
        />
        {/* <TextGenerateEffect
          startOnView
          words={t("subtitle2")}
          className="text-default-800 leading-6 sm:leading-8 text-sm sm:text-lg"
        /> */}
        <div className="mt-7  z-10 flex gap-3 justify-center flex-wrap">
          <BlurFade inView delay={1.1}>
            <Link href="https://github.com/OsamaHIma" target="_blank">
              <InteractiveHoverButton
                className="py-3"
                text={t("checkGithub")}
              />
            </Link>
          </BlurFade>
          <BlurFade inView delay={1.3}>
            <Link href="mailto:osamahima018@gmail.com?subject=Project%20Inquiry">
              <MagicButton
                title={t("contactMe")}
                icon={<NavigationIcon />}
                position="right"
                className="!mt-0 rounded-full"
                otherClasses="rounded-full"
              />
            </Link>
          </BlurFade>
        </div>
      </div>

      <Link
        target="_blank"
        href="https://wa.me/+201090885749"
        className="fixed right-0 bottom-0 size-60 rounded-full overflow-hidden flex items-center justify-center"
      >
        <Ripple mainCircleSize={10} mainCircleOpacity={0.4} />

        <div className="relative flex size-[50px] sm:size-[55px] items-center justify-center bg-blue-500 rounded-full">
          <svg
            height="682pt"
            viewBox="-23 -21 682 682.66669"
            width="682pt"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[30px] relative bottom-[1px]"
          >
            <path
              d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0"
              className="fill-white"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </Link>
    </section>
  );
}
