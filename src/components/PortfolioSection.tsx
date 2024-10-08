import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-indigo-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100 sm:text-4xl mb-8">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "E-commerce",
              description:
                "Tienda online completa con Next.js y pagos, incluyendo el manejo de carga de datos e imagenes.",
              image: "/assets/shop.png",
              link: "https://teslo-shop-sable.vercel.app/",
            },
            {
              title: "Lineage II Game - Website",
              description:
                "Una página web para el servidor del juego Lineage II",
              image: "/assets/l2.png",
              link: "https://lineage-ii.vercel.app/",
            },
            {
              title: "Catálogo de ropa",
              description:
                "Un catálogo de ropa que incluye carrito carga de archivos y comuncacion via whatsapp",
              image: "/assets/catalogo.png",
              link: "https://catalogo-snowy.vercel.app/",
            },
            {
              title: "Pokedex",
              description:
                "Pokedex es una página web que te permite buscar Pokemon y ver sus estadísticas",
              image: "/assets/pokemon.png",
              link: "https://pokemon-drab-beta.vercel.app/",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-indigo-900">
                <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-200 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  Ver Proyecto
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
