"use client";

import { motion } from 'framer-motion';

function ResumeButton() {
  const openPdf = () => {
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={openPdf}
      className="group relative font-mono text-xs sm:text-sm tracking-[0.15em] uppercase
        px-6 py-3 rounded-full border border-[#F3F1EA]/25 text-[#F3F1EA]
        hover:border-[#FF6A2C] transition-colors duration-300"
    >
      <span className="relative z-10 flex items-center gap-2">
        Resume
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </motion.button>
  );
}

export default ResumeButton;
