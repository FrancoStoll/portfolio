import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-indigo-900 dark:bg-gray-900 text-white py-12 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="text-center text-indigo-200 dark:text-indigo-300">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-indigo-300 hover:text-white dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors duration-200"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-indigo-300 hover:text-white dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-indigo-300 hover:text-white dark:t:xt-indigo-400 dark:hover:text-indigo-200 transition-colors duration-200"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-indigo-300 dark:text-indigo-400">
          &copy; 2023 John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
