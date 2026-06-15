"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Inicio" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

export const TopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const isDark = resolvedTheme === "dark";

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center font-mono text-base font-medium tracking-tight"
          aria-label="Franco Stoll — ir al inicio"
        >
          <span className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
            /
          </span>
          <span className="ml-1 text-foreground">francostoll</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-secondary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Cambiar tema"
          >
            {mounted ? (
              isDark ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )
            ) : (
              <div className="h-[18px] w-[18px]" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="glass overflow-hidden border-t md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="container flex flex-col gap-1 py-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "rounded-lg px-4 py-2.5 text-left text-base font-medium transition-colors",
                    activeSection === item.id
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
