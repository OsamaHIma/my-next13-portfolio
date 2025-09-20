"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { navLinks, socialIcons } from "@/constants";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { LanguagesIcon, Menu, PlusCircle } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";

export default function NavbarComponent() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLanguageChange = (locale: string) => {
    // Replace the current locale in the pathname with the new one
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      classNames={{
        base: "z-999",
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold bg-linear-to-tr bg-clip-text text-transparent from-purple-200 via-blue-600 to-purple-500"
          >
            Osama Ibrahim
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.id}>
            {link.isDownload ? (
              <a
                href={link.id}
                download
                target="_blank"
                className="hover:text-primary flex items-center gap-2 transition-colors"
              >
                {link.icon && <link.icon size={18} />}
                {t(link.name)}
              </a>
            ) : (
              <Link
                href={link.id}
                className={`flex items-center gap-2 ${
                  pathname === link.id && "text-primary"
                }`}
              >
                {link.icon && <link.icon size={18} />}
                {t(link.name)}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Desktop Actions */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch className="mt-2" />
        </NavbarItem>

        {/* Language Selector */}
        <NavbarItem>
          <Button
            variant="light"
            startContent={<LanguagesIcon className="h-5 w-5" />}
            onPress={() =>
              handleLanguageChange(currentLocale === "en" ? "ar" : "en")
            }
          >
            {currentLocale.toUpperCase()}
          </Button>
        </NavbarItem>

        {/* Desktop Social Icons */}
        {socialIcons.map((social) => (
          <NavbarItem key={social.name} className="hidden lg:flex gap-2">
            <Link href={social.url} target="_blank">
              {social.icon}
            </Link>
          </NavbarItem>
        ))}

        {/* Mobile Social Icons Dropdown */}
        <div className="lg:hidden">
          <Dropdown classNames={{ content: "dark:bg-black-100 font-poppins!" }}>
            <DropdownTrigger>
              <Button
                variant="light"
                isIconOnly
                title="Show social icons"
                startContent={<PlusCircle className="h-5 w-5" />}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Social Links">
              {socialIcons.map((social) => (
                <DropdownItem
                  key={social.name}
                  className="dark:hover:bg-black-200"
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
    </Navbar>
  );
}
