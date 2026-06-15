"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  code?: string;
};

const PROJECTS: Project[] = [
  {
    title: "PerfilYa",
    description:
      "Plataforma donde cada usuario crea un perfil personalizado para mostrar sus productos y servicios a clientes.",
    image: "/assets/perfilya.png",
    tags: ["Next.js", "PostgreSQL", "Drizzle ORM"],
    code: "https://github.com/FrancoStoll/your-page",
  },
  {
    title: "Teslo · E-commerce",
    description:
      "Tienda online completa con pasarela de pagos, gestión de productos y carga de imágenes.",
    image: "/assets/shop.png",
    tags: ["Next.js", "E-commerce", "Pagos"],
    demo: "https://teslo-shop-sable.vercel.app/",
  },
  {
    title: "Nutriplan",
    description:
      "App de planes nutricionales según el objetivo del cliente, con generación de PDF y envío por email.",
    image: "/assets/nutriplan.png",
    tags: ["React", "Nest.js", "PDF", "Email"],
    code: "https://github.com/FrancoStoll/nutriplan-backend-nest",
  },
  {
    title: "Lineage II",
    description:
      "Sitio web para el servidor del juego Lineage II, con información, registro y novedades.",
    image: "/assets/l2.png",
    tags: ["Next.js", "Landing"],
    demo: "https://lineage-ii.vercel.app/",
  },
  {
    title: "Catálogo de ropa",
    description:
      "Catálogo online con carrito de compras, carga de archivos y comunicación directa vía WhatsApp.",
    image: "/assets/catalogo.png",
    tags: ["React", "Carrito", "WhatsApp"],
    demo: "https://catalogo-snowy.vercel.app/",
  },
  {
    title: "Pokédex",
    description:
      "Aplicación para buscar Pokémon y consultar sus estadísticas, consumiendo la PokéAPI.",
    image: "/assets/pokemon.png",
    tags: ["React", "PokéAPI"],
    demo: "https://pokemon-drab-beta.vercel.app/",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="projects" className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Proyectos"
          title="Trabajos seleccionados"
          description="Una muestra de productos que diseñé y construí, desde landings hasta aplicaciones full stack."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                    >
                      Ver demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
