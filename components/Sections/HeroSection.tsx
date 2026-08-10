"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { HeroName } from '../HeroName'
import HeroPic from '../HeroPic'
import NodeGraph from '../NodeGraph'
import ResumeBTN from '../ResumeBTN';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full -mx-5 sm:-mx-10 overflow-hidden bg-[#0B0C0A]"
      id="hero"
    >
      <NodeGraph />

      <div className="relative z-10 h-full w-full flex flex-col justify-center px-5 sm:px-10">
        <div className="max-w-screen-xl w-full">
          <HeroName />

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <HeroPic />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <ResumeBTN />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-5 sm:left-10 z-10 font-mono text-xs tracking-[0.2em] uppercase text-[#F3F1EA]/40 flex items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="inline-block h-3 w-px bg-[#F3F1EA]/40"
        />
        Scroll
      </motion.div>
    </div>
  )
}

export default HeroSection
