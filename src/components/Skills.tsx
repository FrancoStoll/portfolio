"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    title: "Frontend",
    Icon: Code2,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Native",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    Icon: Server,
    items: ["Node.js", "Express", "Nest.js", "REST APIs"],
  },
  {
    title: "Bases de datos & ORM",
    Icon: Database,
    items: ["PostgreSQL", "Drizzle ORM", "Prisma", "MongoDB"],
  },
  {
    title: "Herramientas",
    Icon: Wrench,
    items: ["Git", "GitHub", "Vercel", "Figma"],
  },
];

export const Skills = () => {
  return (
    <section id="stack" className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Stack"
          title="Tecnologías que uso"
          description="Las herramientas con las que diseño y construyo aplicaciones de principio a fin."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              className="glass rounded-2xl p-6 transition-colors hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <group.Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
