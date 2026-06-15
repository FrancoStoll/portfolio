"use client";

import { Github, Linkedin, Mail } from "lucide-react";
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

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <motion.div
          className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
            aria-hidden
          />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contacto
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            ¿Construimos algo{" "}
            <span className="gradient-text">juntos</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Siempre estoy abierto a nuevas oportunidades y colaboraciones. Cuéntame
            tu idea y te respondo a la brevedad.
          </p>

          <a
            href="mailto:francostoll@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:glow-accent"
          >
            <Mail className="h-4 w-4" />
            francostoll@gmail.com
          </a>

          <div className="mt-8 flex justify-center gap-2">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>© {year} Franco Stoll. Todos los derechos reservados.</p>
          <p className="font-mono text-xs">
            Hecho con Next.js, Tailwind &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
