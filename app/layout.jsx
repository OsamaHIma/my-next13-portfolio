import "./globals.scss";
import Providers from "@/components/Providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Osama's protfolio",
  description: "Hello! my name is Osama I'm a Front-end Developer from Egypt",
  keyWords: "Portfolio, Front-end, Developer"
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={`${poppins.className} transition-all ease-in bg-slate-200 dark:bg-main-color`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
