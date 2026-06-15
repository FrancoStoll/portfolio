"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const SOCIALS = [
  { href: "https://github.com/francostoll", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/francostoll/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:francostoll@gmail.com", label: "Email", Icon: Mail },
];

const STATS = [
  { value: "+3", label: "Años construyendo" },
  { value: "6+", label: "Proyectos enviados" },
  { value: "Full Stack", label: "Frontend & Backend" },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Fondo: grilla + resplandor */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="container relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponible para nuevos proyectos
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Hola, soy{" "}
              <span className="gradient-text">Franco Stoll</span>
            </h1>

            <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
              Desarrollador Full Stack
            </p>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Construyo productos web rápidos, accesibles y bien diseñados.
              Especializado en el frontend con{" "}
              <span className="font-medium text-foreground">React</span> y{" "}
              <span className="font-medium text-foreground">Next.js</span>, y con
              experiencia en backend usando{" "}
              <span className="font-medium text-foreground">Node.js</span>,{" "}
              <span className="font-medium text-foreground">Nest.js</span> y
              bases de datos SQL.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:glow-accent"
              >
                <Mail className="h-4 w-4" />
                Contáctame
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Ver proyectos
                <ArrowDown className="h-4 w-4" />
              </button>

              <div className="ml-1 flex items-center gap-1">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </dd>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-500/30 via-indigo-500/20 to-sky-400/30 blur-2xl"
                aria-hidden
              />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-secondary sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/assets/perfil.jpg"
                  alt="Franco Stoll"
                  fill
                  sizes="(max-width: 1024px) 18rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
