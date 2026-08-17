"use client"
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Sent! I'll get back to you soon.");
      } else {
        toast.error("Failed to send. Try again?");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to send. Try again?");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto rounded-3xl border border-[#F3F1EA]/10 bg-[#F3F1EA]/[0.02] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="py-3.5 px-5 bg-transparent text-[#F3F1EA] placeholder:text-[#F3F1EA]/40 rounded-full border border-[#F3F1EA]/15 focus:outline-none focus:border-[#2EE6A8]/60 transition-colors"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="py-3.5 px-5 bg-transparent text-[#F3F1EA] placeholder:text-[#F3F1EA]/40 rounded-full border border-[#F3F1EA]/15 focus:outline-none focus:border-[#2EE6A8]/60 transition-colors"
        />
      </div>

      <textarea
        placeholder="What's up?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        className="mt-4 w-full py-4 px-5 bg-transparent text-[#F3F1EA] placeholder:text-[#F3F1EA]/40 rounded-3xl border border-[#F3F1EA]/15 focus:outline-none focus:border-[#2EE6A8]/60 transition-colors resize-none"
      />

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="mt-4 w-full py-4 rounded-full bg-[#2EE6A8] text-[#0B0C0A] font-semibold tracking-wide disabled:opacity-60 transition-opacity"
      >
        {isSubmitting ? "Sending…" : "Send it →"}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
