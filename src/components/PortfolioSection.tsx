"use client";

import { ArrowUpRight, Github, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demo?: string;
  code?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "FederalTactics · TFT",
    description:
      "Guía meta para Teamfight Tactics: composiciones por tier, fichas de campeones, ítems y constructor de equipos.",
    longDescription:
      "App completa para Teamfight Tactics con composiciones meta organizadas por tier (S/A/B), fichas detalladas de campeones e ítems, filtros por estrategia (Fast 8, Reroll, Slow Roll, etc.) y un constructor de equipos interactivo. Construida con Next.js, Supabase y Framer Motion.",
    image: "/assets/tft.png",
    tags: ["Next.js", "Supabase", "Framer Motion", "TypeScript"],
    demo: "https://tftpage.vercel.app/",
    featured: true,
  },
  {
    title: "CartaYa · IA",
    description:
      "Generador de cartas de presentación con IA: pegás una oferta y tu perfil, y Claude redacta una carta personalizada.",
    image: "/assets/cartaya.png",
    tags: ["Next.js", "Claude API", "TypeScript", "Streaming"],
    code: "https://github.com/FrancoStoll/ai-cover-letter",
  },
  {
    title: "PerfilYa",
    description:
      "Plataforma donde cada usuario crea un perfil personalizado para mostrar sus productos y servicios a clientes.",
    longDescription:
      "SaaS full stack donde cada usuario crea y personaliza su propio perfil público para mostrar productos y servicios a sus clientes. Construido con Next.js (App Router), PostgreSQL y Drizzle ORM, con autenticación, panel de edición y renderizado dinámico de perfiles.",
    image: "/assets/perfilya.png",
    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "TypeScript"],
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
      "Landing cinematográfica para un servidor del juego Lineage II: hero con video, clases, raid bosses y comunidad.",
    image: "/assets/l2.png",
    tags: ["Next.js", "Framer Motion", "Landing"],
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

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
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
);

const TagList = ({ tags }: { tags: string[] }) => (
  <ul className="mt-4 flex flex-wrap gap-1.5">
    {tags.map((tag) => (
      <li
        key={tag}
        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
      >
        {tag}
      </li>
    ))}
  </ul>
);

export const PortfolioSection = () => {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Proyectos"
          title="Trabajos seleccionados"
          description="Una muestra de productos que diseñé y construí, desde landings hasta aplicaciones full stack."
        />

        {/* Proyecto destacado */}
        {featured && (
          <motion.article
            className="group mb-8 grid overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/30 lg:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative min-h-[240px] overflow-hidden lg:min-h-[420px]">
              <Image
                src={featured.image}
                alt={`Captura de ${featured.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Star className="h-3.5 w-3.5 fill-primary" />
                Proyecto destacado
              </span>
              <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                {featured.longDescription ?? featured.description}
              </p>
              <TagList tags={featured.tags} />
              <ProjectLinks project={featured} />
            </div>
          </motion.article>
        )}

        {/* Resto de proyectos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
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
                <TagList tags={project.tags} />
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
