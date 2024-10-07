import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-800 py-12 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-indigo-900 dark:text-indigo-100">
              Franco Stoll
            </h1>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 sm:text-2xl">
              Full Stack Developer
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              I'm a passionate developer with 3 years of experience in creating
              beautiful and functional web applications. My expertise includes
              React, Node.js.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/francostoll"
                className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>

                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/francostoll/"
                className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>

                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:francostoll@gmail.com"
                className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors duration-200"
              >
                <span className="sr-only">Email</span>

                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <Image
                src="/assets/react.jpeg"
                // src="https://media.licdn.com/dms/image/v2/D4E35AQG3n8TotoKlXw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1705417578300?e=1728885600&v=beta&t=WwGbyRKHoloUzPEjJbxoE-KsKeAuMeflTK6I_hoXMGY"
                alt="profile franco stoll"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg ring-4 ring-indigo-400 dark:ring-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
