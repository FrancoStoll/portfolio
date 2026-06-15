"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const MILESTONES = [
  {
    year: "2025 — Presente",
    title: "Desarrollo Full Stack profesional",
    description:
      "Diseño y construcción de aplicaciones completas en producción (PerfilYa, Nutriplan, e-commerce), cuidando la arquitectura, el rendimiento y la experiencia de usuario.",
    current: true,
  },
  {
    year: "2024",
    title: "Next.js, React Native y TypeScript",
    description:
      "Profundicé en Next.js, React Native y TypeScript, consolidando mis habilidades en desarrollo full stack y aplicaciones móviles.",
  },
  {
    year: "2023",
    title: "JavaScript, React y Node.js",
    description:
      "Aprendí JavaScript y React, y comencé a explorar Node.js, ampliando mis conocimientos hacia el backend.",
  },
  {
    year: "2022 — 2023",
    title: "Fundamentos: HTML, CSS y PHP",
    description:
      "Me introduje a HTML, CSS y PHP, formando las bases de mis habilidades en el desarrollo web.",
  },
];

export const TimeLine = () => {
  return (
    <section id="experience" className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Experiencia"
          title="Mi recorrido"
          description="El camino que me llevó del primer 'Hola mundo' a construir productos completos."
        />

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-10">
            {MILESTONES.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span
                  className={`absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full ring-4 ring-background ${
                    item.current ? "bg-primary" : "bg-border"
                  }`}
                >
                  {item.current && (
                    <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-primary/60" />
                  )}
                </span>

                <span className="font-mono text-sm font-medium text-primary">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
