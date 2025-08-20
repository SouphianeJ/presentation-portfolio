"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Terminal from "@/components/Terminal";

const G = [
  { href: "/tech", label: "ENGINEERING TECH", theme: "tech", shadow: "shadow-[12px_12px_0_#00F3FF]", color: "text-tech-primary" },
  { href: "/pedago", label: "PÉDAGOGIE 4.0", theme: "edu", shadow: "shadow-[12px_12px_0_#FDCB6E]", color: "text-edu-primary" },
  { href: "/proj", label: "GESTION DE PROJETS", theme: "proj", shadow: "shadow-[12px_12px_0_#00b894]", color: "text-proj-primary" },
  { href: "/news", label: "NEWS & ARTICLES", theme: "news", shadow: "shadow-[12px_12px_0_#828282]", color: "text-black dark:text-white" },
  { href: "/contact", label: "CONTACT DIRECT", theme: "contact", shadow: "shadow-[12px_12px_0_#FF00F5]", color: "text-contact-primary" }
];

export default function Gateways() {
  const router = useRouter();
  return (
    <>
      <section className="grid grid-auto gap-6 max-w-5xl mx-auto">
        {G.map((g) => (
          <button
            key={g.href}
            onClick={() => router.push(g.href)}
            className={`relative p-10 brutal-card cursor-crosshair text-left ${g.shadow} ${g.color}`}
          >
            <span className="mr-2">&gt;</span> {g.label}
            <span className="absolute inset-0 pointer-events-none crt" />
          </button>
        ))}
      </section>
      <Terminal />
    </>
  );
}
