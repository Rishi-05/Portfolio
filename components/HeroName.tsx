"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const word = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const wrap = (w: string) => (
  <span className="inline-block overflow-hidden align-bottom">
    <motion.span variants={word} className="inline-block">
      {w}
    </motion.span>
  </span>
);

export const HeroName = () => {
  return (
    <div className="flex flex-col">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#4FE0C4] mb-4 sm:mb-6"
      >
        ML Engineer — building self-healing RAG systems
      </motion.p>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="font-[family-name:var(--font-display)] font-medium text-[#F3F1EA] leading-[0.9]
          text-[16vw] sm:text-[10vw] lg:text-[7.5vw]
          tracking-tight"
      >
        {wrap("Rishi")}
        <br />
        {wrap("Chilveri")}
      </motion.h1>
    </div>
  );
};
