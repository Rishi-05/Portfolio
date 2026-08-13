"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Reveal from "../Reveal";

export default function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <h2 className="text-center font-display text-5xl font-bold sm:text-6xl">
          Say <span className="text-gradient">hello</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Ideas, roles, or memes — all welcome.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            // UI demo only — your existing /api/contact route stays untouched.
            setTimeout(() => {
              setSending(false);
              toast.success("Demo form — wire this to your existing /api/contact route.");
            }, 700);
          }}
          className="mt-12 space-y-4 rounded-3xl glass p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 outline-none focus:border-mint"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 outline-none focus:border-mint"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="What's up?"
            className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 outline-none focus:border-mint"
          />
          <button
            type="submit"
            disabled={sending}
            data-cursor="send"
            className="w-full rounded-xl bg-mint py-3 font-display font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send it →"}
          </button>
        </form>
      </Reveal>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="https://github.com/Rishi-05" target="_blank" rel="noreferrer" className="hover:text-mint">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rishi-chilveri" target="_blank" rel="noreferrer" className="hover:text-mint">
          LinkedIn
        </a>
        <a href="mailto:rishichilveri@gmail.com" className="hover:text-mint">
          Email
        </a>
      </div>
    </section>
  );
}