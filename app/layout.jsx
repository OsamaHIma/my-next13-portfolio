import "./globals.scss";
import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins, Cairo } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "Osama Ibrahim | Front-end Developer Portfolio",
  description:
    "I am a Front-end Developer from Egypt with expertise in building responsive and user-friendly websites using Next.js, React, and other modern web technologies",
  keywords: "Front-end, Developer, Portfolio, Responsive, User-friendly",
  openGraph: {
    images: '/og-image.png',
  },
  schemaMarkup: {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Osama Ibrahim",
    jobTitle: "Front-end Developer",
    url: "https://osama-ibrahim-portfolio.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/osama-ibrahim2002/",
      "https://github.com/OsamaHIma/",
    ],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <body
        className={`${poppins.variable} ${cairo.variable} ltr:!font-poppins rtl:!font-cairo transition-all ease-in bg-slate-200 dark:bg-main-color`}
      >
        <Providers>
          <ScrollToTop />
          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
