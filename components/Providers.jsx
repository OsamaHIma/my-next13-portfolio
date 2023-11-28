"use client";
import Cursor from "react-cursor-follow";
import { ThemeProvider } from "next-themes";
import { Toaster, ToastBar, toast } from "react-hot-toast";
import { LanguageProvider } from "translate-easy";
import { X } from "lucide-react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Cursor color="#9d00ff" hollow={true} duration={0.7} />
      <LanguageProvider>
        <Toaster
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          position="top-center"
          toastOptions={{
            className: "dark:bg-stone-800 dark:text-indigo-100",
          }}
        >
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== "loading" && (
                    <button onClick={() => toast.dismiss(t.id)}>
                      <X size={28} />
                    </button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default Providers;
