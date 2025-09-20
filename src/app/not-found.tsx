"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Poppins } from "next/font/google";
import { Providers } from "@/components/providers";
import { Spotlight } from "@/components/ui/Spotlight";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-poppins",
});

export default function NotFound() {
  const router = useRouter();

  return (
    <html>
      <body
        className={`${poppins.variable} relative overflow-x-hidden min-h-screen font-poppins! bg-linear-to-b from-gray-50 to-gray-100 dark:from-black-100 dark:to-black-200 flex items-center justify-center px-4`}
      >
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-[50%]"
          fill="purple"
        />
        <Spotlight className="right-0 top-28 h-[80vh] w-[50vw]" fill="blue" />
        <Providers>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
                404
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                Sorry, the page you are looking for doesn't exist or has been
                moved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 space-x-4"
            >
              <Button
                color="primary"
                variant="shadow"
                size="lg"
                onPress={() => router.back()}
                className="font-semibold text-white"
              >
                Go Back
              </Button>
              <Button
                color="default"
                variant="bordered"
                size="lg"
                onPress={() => router.push("/ar")}
                className="font-semibold"
              >
                Go Home
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-500 dark:text-gray-400">
                    Lost in the digital space
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
