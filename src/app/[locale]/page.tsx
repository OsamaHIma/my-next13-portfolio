import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
// import InstallPrompt from "@/components/InstallPrompt";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  return {
    metadataBase: new URL("https://osama-ibrahim-portfolio.vercel.app"),
    manifest: "/manifest.json",
    themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
    viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    generator: "Next.js",
    title:
      locale === "ar"
        ? "أسامة إبراهيم | مطور واجهات أمامية"
        : "Osama Ibrahim | Front-end Developer Portfolio",
    description:
      locale === "ar"
        ? "أنا مطور واجهات أمامية من مصر متخصص في بناء مواقع ويب سريعة الاستجابة وسهلة الاستخدام باستخدام Next.js و React وتقنيات الويب الحديثة الأخرى"
        : "I am a Front-end Developer from Egypt with expertise in building responsive and user-friendly websites using Next.js, React, and other modern web technologies",
    openGraph: {
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    keywords:
      locale === "ar"
        ? "مطور واجهات أمامية، مطور ويب، مطور رياكت، مطور نكست جي اس، مطور واجهة مستخدم، خبير جافاسكريبت، تايبسكريبت، تطوير الويب، رياكت، تطبيقات ويب حديثة، تصميم متجاوب، تطوير واجهة المستخدم، هندسة الواجهات الأمامية، تطوير المواقع، برمجة الويب، مطور مصري، تطوير مواقع عربية، مطور ثنائي اللغة"
        : "Front-end Developer, Osama ibrahim portfolio, Web Developer, React Developer, Next.js Developer, UI Developer, JavaScript Expert, TypeScript, Web Development, React.js, Modern Web Applications, Responsive Design, User Interface Development, Frontend Engineering, Website Development, Web Programming, Egypt Developer, Arabic Website Development, Bilingual Developer",
    creator: locale === "ar" ? "أسامة إبراهيم" : "Osama Ibrahim",
  };
}

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-clip mx-auto max-lg:pb-13">
      <Navbar />
      <MobileNav />
      {/* <InstallPrompt /> */}
      <main className="max-w-7xl w-full sm:px-10 px-5 ">
        <Hero />
        <Projects />
        <div className="absolute -z-[1] top-[50%] left-[5%] size-80 bg-blue-500/30 blur-[100px]" />
        <div className="absolute -z-[1] bottom-[14%] sm:bottom-[10%] right-[5%] size-80 bg-gradient-to-tr from-red-200 from-40% via-60% via-blue-600 to-purple-500 blur-[93px]" />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
