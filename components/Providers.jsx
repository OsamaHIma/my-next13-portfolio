"use client";
import { ThemeProvider } from "next-themes";
import Cursor from "react-cursor-follow";

const Providers = ({ children }) => {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Cursor color="#9d00ff" hollow={true} duration={0.7}/>
      
      {children}
    </ThemeProvider>
  );
};
export default Providers;
