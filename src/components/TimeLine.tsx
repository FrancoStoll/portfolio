export const TimeLine = () => {
  return (
    <section
      id="timeline"
      className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100 sm:text-4xl mb-8">
          Timeline
        </h2>
        <div className="space-y-8">
          {[
            {
              year: "2024",
              title: "Aprendizaje de Next.js, React Native y TypeScript",
              description:
                "En 2024, comencé a profundizar en Next.js, React Native y TypeScript, mejorando mis habilidades en el desarrollo full-stack.",
            },
            {
              year: "2023",
              title: "Introducción a JavaScript, React y Node.js",
              description:
                "En 2023, empecé a aprender JavaScript, React y comencé a explorar Node.js, ampliando mis conocimientos en desarrollo web.",
            },
            {
              year: "2022 - 2023",
              title: "Introducción a HTML, CSS y PHP",
              description:
                "Durante 2022 y 2023, me introduje a HTML, CSS y PHP, formando la base de mis habilidades en desarrollo web.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-baseline"
            >
              <div className="flex-none w-full md:w-32 text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1 md:mb-0">
                {item.year}
              </div>
              <div className="flex-grow md:ml-8 pl-8 border-l-2 border-indigo-200 dark:border-indigo-700">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
