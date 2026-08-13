"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 z-50 h-0.5 w-full origin-left bg-gradient-to-r from-mint via-accent to-amber"
      />
      <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full glass px-2 py-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}