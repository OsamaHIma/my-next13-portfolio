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
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { LanguagesIcon, Menu } from "lucide-react";
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
        base: "z-[999]",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold bg-gradient-to-tr bg-clip-text text-transparent from-purple-200 via-blue-600 to-purple-500"
          >
            Osama Ibrahim
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.id}>
            <Link
              href={link.id}
              className={pathname === link.id ? "text-primary" : ""}
            >
              {t(link.name)}
            </Link>
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
          <NavbarItem key={social.name} className="hidden sm:flex gap-2">
            <Link href={social.url} target="_blank">
              {social.icon}
            </Link>
          </NavbarItem>
        ))}

        {/* Mobile Social Icons Dropdown */}
        <div className="sm:hidden">
          <Dropdown classNames={{ content: "dark:bg-black-100" }}>
            <DropdownTrigger>
              <Button
                variant="light"
                isIconOnly
                startContent={<Menu className="h-5 w-5" />}
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
      <NavbarMenu>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.id}>
            <Link
              href={link.id}
              className={`w-full ${pathname === link.id ? "text-primary" : ""}`}
            >
              {t(link.name)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
