"use client";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "AI / ML",
    items: ["PyTorch", "TensorFlow", "LangChain", "OpenCV", "spaCy", "Scikit-learn", "NLP"],
  },
  { label: "Backend", items: ["Python", "Flask", "FastAPI", "Django", "Celery", "RabbitMQ"] },
  { label: "Data", items: ["MySQL", "MongoDB", "Numpy", "Pandas", "Matplotlib", "Seaborn"] },
  { label: "Frontend & Tools", items: ["React", "JavaScript", "HTML", "CSS", "Git", "GitHub"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-5xl font-bold sm:text-6xl">
          The <span className="text-gradient">Stack</span>
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Tools I reach for before coffee kicks in.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {GROUPS.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.08}>
            <div className="h-full rounded-3xl glass p-6">
              <h3 className="font-display text-xs tracking-[0.25em] text-mint uppercase">
                {g.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ y: -4, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="cursor-default rounded-xl border border-border bg-secondary/50 px-3.5 py-2 font-display text-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}