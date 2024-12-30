"use client";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  return (
    <nav className="fixed bottom-0 z-[53] left-0 right-0 bg-background/70 backdrop-blur-xl border-t lg:hidden">
      <div className="flex justify-around items-center h-16">
        {navLinks?.map((link, index) =>
          link.isDownload ? (
            <a
              key={index}
              href={link.id}
              download
              target="_blank"
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                pathname === link.id ? "text-primary" : "text-default-600"
              }`}
            >
              <span className="text-xl mb-1">
                {link.icon && <link.icon size={20} />}
              </span>
              <p className="text-xs truncate w-17">{t(link.name)}</p>
            </a>
          ) : (
            <Link
              key={index}
              href={link.id}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                pathname === link.id ? "text-primary" : "text-default-600"
              }`}
            >
              <span className="text-xl mb-1">
                {link.icon && <link.icon size={20} />}
              </span>
              <p className="text-xs">{t(link.name)}</p>
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
