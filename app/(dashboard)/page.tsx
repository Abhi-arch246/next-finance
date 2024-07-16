"use client";
// import { BackgroundBeams } from "@/components/ui/background-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Empower Your Finances
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Track, Budget, Thrive!
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Check now
            </button>
          </motion.div>
        </AuroraBackground>
      </div>
    </main>
  );
}
