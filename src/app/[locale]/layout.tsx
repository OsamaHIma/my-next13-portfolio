import "@/styles/globals.css";
import { Poppins, Cairo } from "next/font/google";
import { locales } from "@/i18n/navigation";
import { Providers } from "@/components/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-poppins",
});

const cairo = Cairo({ subsets: ["latin"], variable: "--font-cairo" });

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
        className={`${cairo.variable} ${poppins.variable} dark:bg-black-100 transition-colors duration-300 ltr:font-poppins! rtl:font-cairo!`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
