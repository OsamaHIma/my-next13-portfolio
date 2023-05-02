import "./globals.scss";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Osama's protfolio",
  // description: '',
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
