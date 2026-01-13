import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { locales } from "@/i18n/navigation";
import { Providers } from "@/components/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-poppins",
});

const pingAr = localFont({
  src: [
    {
      path: "../fonts/Ping ar lt/PingAR+LT-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Ping ar lt/PingAR+LT-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Ping ar lt/PingAR+LT-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Ping ar lt/PingAR+LT-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Ping ar lt/PingAR+LT-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Ping ar lt/PingAR+LT-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-Greta-Arabic-AR-LT-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-norsa",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    return notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${pingAr.variable} ${poppins.variable} dark:bg-black-100 transition-colors duration-300 ltr:font-poppins! rtl:font-pingAr!`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
