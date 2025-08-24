"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#header",
      icon: <IconHome className="h-4 w-4 text-[#2B77E2FF] dark:text-[#2B77E2FF]" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconMessage className="h-4 w-4 text-[#2B77E2FF] dark:text-[#2B77E2FF]" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconUser className="h-4 w-4 text-[#2B77E2FF] dark:text-[#2B77E2FF]" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-[#2B77E2FF] dark:text-[#2B77E2FF]" />,
    },
  ];

  return (
    <div className="relative w-full z-40">
      <FloatingNav navItems={navItems} className="mx-auto px-8 py-4 w-fit" />
    </div>
  );
}
