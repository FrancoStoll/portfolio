# Portfolio — Franco Stoll

Portfolio personal de **Franco Stoll**, desarrollador Full Stack especializado en
React, Next.js y Node.js. Diseño limpio y moderno, con modo claro/oscuro,
animaciones sutiles y enfoque en rendimiento y accesibilidad.

🔗 **En vivo:** https://francostoll.vercel.app

## ✨ Características

- Diseño elegante y responsive (mobile-first)
- Modo claro y oscuro con `next-themes`
- Animaciones con Framer Motion (respeta `prefers-reduced-motion`)
- Navegación con scroll-spy y scroll suave
- SEO optimizado: Open Graph, Twitter Cards y metadatos
- Tipografía Geist y sistema de diseño con tokens HSL

## 🛠️ Stack

| Categoría   | Tecnologías                          |
| ----------- | ------------------------------------ |
| Framework   | Next.js 14 (App Router), React 18    |
| Lenguaje    | TypeScript                           |
| Estilos     | Tailwind CSS                         |
| Animaciones | Framer Motion                        |
| Iconos      | lucide-react                         |
| Despliegue  | Vercel                               |

## 🚀 Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build de producción
npm run lint     # análisis estático
```

## 📁 Estructura

```
src/
├── app/                # App Router, layout, estilos globales y metadatos
└── components/
    ├── TopMenu.tsx         # Navbar con scroll-spy y toggle de tema
    ├── HeroSection.tsx     # Presentación principal
    ├── Skills.tsx          # Stack de tecnologías
    ├── PortfolioSection.tsx# Proyectos
    ├── TimeLine.tsx        # Experiencia / recorrido
    ├── Footer.tsx          # Contacto
    ├── SectionHeading.tsx  # Encabezado de sección reutilizable
    └── Reveal.tsx          # Wrapper de animación al hacer scroll
```

## 📬 Contacto

- **Email:** francostoll@gmail.com
- **GitHub:** [@FrancoStoll](https://github.com/FrancoStoll)
- **LinkedIn:** [Franco Stoll](https://www.linkedin.com/in/francostoll/)
