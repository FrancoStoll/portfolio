"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Importamos Framer Motion

export const TopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              FS
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {/* Animamos los botones */}
            <motion.button
              onClick={() => scrollToSection("about")}
              className={`items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                activeSection === "about"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Inicio
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              className={`items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                activeSection === "portfolio"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Portfolio
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("timeline")}
              className={`items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                activeSection === "timeline"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Timeline
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className={`items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                activeSection === "contact"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contacto
            </motion.button>
          </div>
          <div className="flex items-center">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              whileTap={{ scale: 0.9 }}
            >
              {theme ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            <div className="-mr-2 flex items-center sm:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú desplegable animado */}
      {isMenuOpen && (
        <motion.div
          className="sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-2 pb-3 space-y-1">
            <motion.button
              onClick={() => scrollToSection("about")}
              className={cn(
                "block pl-3 pr-4 py-2 text-base font-medium w-full text-left",
                activeSection === "about"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 border-l-4 bg-indigo-50 dark:bg-indigo-900"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              )}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Inicio
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              className={cn(
                "block pl-3 pr-4 py-2 text-base font-medium w-full text-left",
                activeSection === "portfolio"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 border-l-4 bg-indigo-50 dark:bg-indigo-900"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              )}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Portfolio
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("timeline")}
              className={cn(
                "block pl-3 pr-4 py-2 text-base font-medium w-full text-left",
                activeSection === "timeline"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 border-l-4 bg-indigo-50 dark:bg-indigo-900"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              )}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Timeline
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "block pl-3 pr-4 py-2 text-base font-medium w-full text-left",
                activeSection === "contact"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 border-l-4 bg-indigo-50 dark:bg-indigo-900"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 border-transparent"
              )}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contacto
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
