"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

const HeroPic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 sm:gap-5"
    >
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full overflow-hidden ring-1 ring-[#FF6A2C]/60">
        <Image
          src="/profile.png"
          fill
          sizes="64px"
          alt="Rishi Chilveri"
          className="object-cover"
        />
      </div>
      <FlipWords
        words={["AI Developer", "Data Science Geek", "RAG Systems"]}
        className="font-mono text-sm sm:text-base text-[#F3F1EA]/80 !p-0"
      />
    </motion.div>
  );
};

export default HeroPic;
