"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../Contact'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Rishi-05/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishi-chilveri-91a01327b/' },
  { label: 'Email', href: 'mailto:chillrishi10@gmail.com' },
]

const ContactSection = () => {
  return (
    <div className="w-full py-24 sm:py-32 px-5" id="contact">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-[family-name:var(--font-display)] font-bold text-5xl sm:text-6xl text-[#F3F1EA]"
        >
          Say{' '}
          <span className="bg-gradient-to-r from-[#2EE6A8] via-[#A78BFA] to-[#FB923C] bg-clip-text text-transparent">
            hello
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-[#F3F1EA]/50"
        >
          Ideas, roles, or memes — all welcome.
        </motion.p>
      </div>

      <ContactForm />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center gap-8 mt-14"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F3F1EA]/60 hover:text-[#2EE6A8] transition-colors text-sm"
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      <div className="max-w-3xl mx-auto mt-14 pt-8 border-t border-[#F3F1EA]/10 text-center">
        <p className="text-xs text-[#F3F1EA]/30 font-mono">
          Built with tons of coffee — © {new Date().getFullYear()} Rishi Chilveri
        </p>
      </div>
    </div>
  )
}

export default ContactSection
