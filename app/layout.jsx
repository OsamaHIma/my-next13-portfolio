import "./globals.scss";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Osama's protfolio",
  description: "Hello! my name is Osama I'm a Front-end Developer from Egypt",
  keyWords: "Portfolio, Front-end, Developer",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <Providers>{children}</Providers>
    </html>
  );
};
export default RootLayout;
