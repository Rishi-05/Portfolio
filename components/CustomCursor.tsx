"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });
  const [hot, setHot] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.(
        "a,button,[data-cursor]",
      ) as HTMLElement | null;
      setHot(!!el);
      setLabel(el?.dataset?.["cursor"] ?? null);
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        style={{ x: rx, y: ry }}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-mint"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hot ? 2.1 : 1, opacity: hot ? 1 : 0.6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="absolute -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-mint/70 mix-blend-screen"
      >
        {label ? (
          <span className="font-display text-[5px] font-bold tracking-widest text-mint uppercase">
            {label}
          </span>
        ) : null}
      </motion.div>
    </div>
  );
}
