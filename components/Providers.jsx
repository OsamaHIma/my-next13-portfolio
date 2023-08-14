"use client";
import { ThemeProvider } from "next-themes";
import Cursor from "react-cursor-follow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "translate-easy";
import { Cairo, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const cairo = Cairo({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"],
});
const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Cursor color="#9d00ff" hollow={true} duration={0.7} />
      <ToastContainer
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <body
        className={`${cairo.className} transition-all ease-in bg-slate-200 dark:bg-main-color`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </ThemeProvider>
  );
};
export default Providers;
