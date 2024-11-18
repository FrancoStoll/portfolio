import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-800 py-12 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-indigo-900 dark:text-indigo-100">
              Franco Stoll
            </h1>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 sm:text-2xl">
              Desarrollador Web
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Soy un desarrollador en constante aprendizaje, con 2 años de
              experiencia en el estudio y desarrollo de aplicaciones web. Me
              enfoco en el frontend, utilizando React y Next.js para crear
              interfaces modernas y eficientes. También tengo experiencia en el
              backend con Node.js y Express.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/francostoll"
                className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors duration-200"
                initial={{ opacity: 0 }}
                whileHover={{
                  scale: 1.6,
                  rotate: 360,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/francostoll/"
                className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.6,
                  rotate: 360,
                }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:francostoll@gmail.com"
                className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors duration-200"
                initial={{ opacity: 0 }}
                whileHover={{
                  scale: 1.6,
                  rotate: 360,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(75, 29, 134, 1)", // Sombra pequeña al inicio
                    "0 0 50px rgba(75, 29, 134, 1)", // Sombra expandida
                    "0 0 10px rgba(75, 29, 134, 1)", // Vuelve a la sombra pequeña
                  ],
                }}
                className="rounded-full shadow-xl"
                transition={{
                  duration: 2, // Duración de la animación (expansión + contracción)
                  repeat: Infinity, // Repite la animación infinitamente
                  repeatType: "loop", // Tipo de repetición
                }}
              >
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4D03AQG9-7zC_8QB_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690391817597?e=1735171200&v=beta&t=AF9doY5NVUT_Is3MOrEjEHKUyVYkQjXjjV2mfwRzaWA"
                  }
                  alt="profile franco stoll"
                  width={400}
                  height={400}
                  className="rounded-full shadow-lg ring-4 ring-indigo-400 dark:ring-indigo-600"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
