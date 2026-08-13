"use client";
import TiltCard from "../TiltCard";
import Reveal from "../Reveal";

const PROJECTS = [
  {
    title: "Self-Healing RAG",
    blurb:
      "A LangGraph pipeline that grades its own retrievals, rewrites bad queries and refuses to hallucinate.",
    tags: ["LangGraph", "Python", "Vector DB"],
    image: "/firstlook.png",
    github: "https://github.com/Rishi-05/self-healing-RAG",
  },
  {
    title: "Pixel Studio",
    blurb:
      "Full-stack text-to-image generator on Stable Diffusion with async job queues and a gallery.",
    tags: ["Stable Diffusion", "Flask", "Celery"],
    image: "/pixelstudio.png",
    github: "https://github.com/Rishi-05/pixelstudio",
  },
  {
    title: "Smart Attendance",
    blurb:
      "Real-time face-recognition attendance that marks you present before you sit down.",
    tags: ["OpenCV", "PyTorch", "MySQL"],
    image: "/smart_attandence.png",
    github: "https://github.com/Rishi-05/smart-attendance",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-5xl font-bold sm:text-6xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Three things I shipped instead of sleeping.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <TiltCard intensity={9}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="group block h-full overflow-hidden rounded-3xl glass transition-colors hover:border-mint/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} project screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-6" style={{ transform: "translateZ(40px)" }}>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted-foreground uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-block font-display text-sm text-mint">
                    View on GitHub →
                  </span>
                </div>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}