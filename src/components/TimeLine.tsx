export const TimeLine = () => {
  return (
    <section
      id="timeline"
      className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100 sm:text-4xl mb-8">
          Work Timeline
        </h2>
        <div className="space-y-8">
          {[
            {
              year: "2024",
              title: "Lorem ipsum dolor sit amet",
              description:
                "Nisl fusce dis mattis facilisis arcu dictumst ridiculus integer diam, quam vel metus gravida varius tempor feugiat orci. ",
            },
            {
              year: "2023",
              title: "Lorem ipsum dolor sit amet",
              description:
                "Nisl fusce dis mattis facilisis arcu dictumst ridiculus integer diam, quam vel metus gravida varius tempor feugiat orci. ",
            },
            {
              year: "2022 - 2023",
              title: "Lorem ipsum dolor sit amet",
              description:
                "Nisl fusce dis mattis facilisis arcu dictumst ridiculus integer diam, quam vel metus gravida varius tempor feugiat orci. ",
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
