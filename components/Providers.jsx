"use client";
import { ThemeProvider } from "next-themes";
import Cursor from "react-cursor-follow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "translate-easy";

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
        <body
          className={`ltr:!font-poppins rtl:!font-cairo transition-all ease-in bg-slate-200 dark:bg-main-color`}
        >
          {children}
        </body>
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default Providers;
