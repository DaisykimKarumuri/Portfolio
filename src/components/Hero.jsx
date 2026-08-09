import { useState } from "react";

function Hero({ openPanel }) {
  const [showResume, setShowResume] = useState(false);

  const sections = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Skills",
      id: "skills",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Education",
      id: "education",
    },
    {
      title: "Certificates",
      id: "certificates",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6">

      {/* Hero Content */}
      <div className="max-w-4xl text-center">

        <p className="mb-5 text-purple-400">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold md:text-8xl">
          DaisyKim<span className="text-purple-500">.</span>
        </h1>

        <h2 className="mt-6 text-2xl text-gray-300 md:text-3xl">
          Aspiring Software Development Engineer
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          I build web applications, explore AI/ML,
          and solve real-world problems with code.
        </p>

        {/* Explore + Resume */}
        <div className="mt-8 flex items-center justify-center gap-4">

          <button
            onClick={() => openPanel("projects")}
            className="rounded-full bg-white px-8 py-4
                       font-semibold text-black
                       transition hover:scale-105"
          >
            Explore My Work →
          </button>

          <button
            onClick={() => setShowResume(true)}
            className="rounded-full bg-white px-8 py-4
                       font-semibold text-black
                       transition hover:scale-105"
          >
            My Resume →
          </button>

        </div>

      </div>

      {/* Section Cards */}
      <div className="mt-8 flex w-full items-center justify-center gap-4
                      overflow-x-auto whitespace-nowrap
                      scrollbar-hide px-4 py-5">

        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => openPanel(section.id)}
            className="group w-[150px] shrink-0 rounded-2xl
                       border border-white/10
                       bg-white/5 p-6 text-left
                       transition duration-300
                       hover:-translate-y-2
                       hover:border-purple-500/50
                       hover:bg-white/10"
          >

            <div className="flex items-center justify-between">

              <span className="text-lg font-semibold">
                {section.title}
              </span>

              <span className="text-gray-500 transition
                               group-hover:text-purple-400">
                ↗
              </span>

            </div>

            <p className="mt-3 text-sm text-gray-500">
              View {section.title.toLowerCase()}
            </p>

          </button>
        ))}

      </div>

      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 p-6 backdrop-blur-md"
          onClick={() => setShowResume(false)}
        >

          <div
            className="relative max-h-[92vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute -right-3 -top-3 z-10
                         flex h-10 w-10 items-center justify-center
                         rounded-full border border-white/20
                         bg-[#111118] text-xl text-gray-300
                         transition hover:bg-white/10
                         hover:text-white"
            >
              ✕
            </button>

            {/* Resume Image */}
            <img
              src="/Portfolio/resume-preview.png"
              alt="DaisyKim Karumuri Resume"
              className="max-h-[90vh] w-auto rounded-xl
                         border border-white/10
                         shadow-2xl"
            />

          </div>

        </div>
      )}

    </main>
  );
}

export default Hero;