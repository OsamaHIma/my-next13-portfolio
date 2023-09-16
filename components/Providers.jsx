"use client";
import Cursor from "react-cursor-follow";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import { LanguageProvider } from "translate-easy";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Cursor color="#9d00ff" hollow={true} duration={0.7} />
      <LanguageProvider>
        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
          toastClassName="dark:bg-stone-900 dark:text-indigo-100"
        />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default Providers;
