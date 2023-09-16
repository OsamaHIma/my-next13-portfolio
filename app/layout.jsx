import Providers from "@/components/Providers";
import "./globals.scss";

export const metadata = {
  title: "Osama's Responsive and User-friendly Front-end Developer Portfolio",
  description: "I am a Front-end Developer from Egypt with expertise in building responsive and user-friendly websites using Next.js, React, and other modern web technologies",
  keywords: "Front-end, Developer, Portfolio, Responsive, User-friendly",
  schemaMarkup: {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Osama",
    "jobTitle": "Front-end Developer",
    "url": "https://osama-ibrahim-portfolio.vercel.app/",
    "sameAs": [
      "https://www.linkedin.com/in/osama-ibrahim2002/",
      "https://github.com/OsamaHIma/"
    ]
  }
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body
        className={`ltr:!font-poppins rtl:!font-cairo transition-all ease-in bg-slate-200 dark:bg-main-color`}
      >
        <Providers>{children}</Providers>

      </body>
    </html>
  );
};
export default RootLayout;
