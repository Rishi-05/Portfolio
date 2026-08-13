"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../MagneticButton";
import TiltCard from "../TiltCard";

const ROLES = ["AI Developer", "RAG Wrangler", "Backend Nerd", "Bug Whisperer"];

export default function Hero() {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const yBlob = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative grid-bg overflow-hidden pt-32">
      <motion.div
        style={{ y: yBlob }}
        className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-mint/20 blur-[120px]"
      />
      <motion.div
        style={{ y: yBlob }}
        className="pointer-events-none absolute -right-40 top-24 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
            open to work · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl leading-[0.92] font-bold sm:text-7xl lg:text-8xl"
          >
            RISHI
            <br />
            <span className="text-gradient">CHILVERI</span>
          </motion.h1>

          <div className="mt-6 flex h-10 items-center gap-3 text-xl sm:text-2xl">
            <span className="text-muted-foreground">I build</span>
            <span className="relative inline-block overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={i}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -26, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="block font-display font-semibold text-mint"
                >
                  {ROLES[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p className="mt-6 max-w-md text-muted-foreground">
            Self-healing RAG pipelines, text-to-image studios and face-recognition
            attendance systems. Mostly Python, occasionally sleep.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href="/Resume.pdf"
              cursorLabel="grab"
              className="bg-mint text-primary-foreground shadow-glow hover:bg-mint/90"
            >
              Resume ↗
            </MagneticButton>
            <MagneticButton
              href="#projects"
              cursorLabel="peek"
              className="glass text-foreground hover:border-mint/60"
            >
              See the work
            </MagneticButton>
          </div>
        </div>

        <TiltCard intensity={16} className="mx-auto w-full max-w-xs">
          <div className="animate-float relative rounded-[2rem] glass p-3">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-mint/40 via-transparent to-accent/40 opacity-60 blur-md" />
            <img
              src="/profile.png"
              alt="Portrait of Rishi Chilveri, AI developer"
              className="relative z-10 aspect-square w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
            <div
              style={{ transform: "translateZ(60px)" }}
              className="absolute -bottom-4 -left-4 z-20 rounded-2xl bg-amber px-4 py-2 font-display text-xs font-bold text-ink"
            >
              404: chill not found
            </div>
          </div>
        </TiltCard>
      </div>

      <motion.div style={{ opacity }} className="border-y border-border/60 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10">
              {["python", "langchain", "pytorch", "flask", "react", "mysql", "celery", "opencv"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span className="text-mint">✦</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}