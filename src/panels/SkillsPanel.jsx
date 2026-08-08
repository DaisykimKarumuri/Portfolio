function SkillsPanel({ closePanel }) {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "SQL", "JavaScript"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "GitHub Copilot"],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Background */}
      <div
        onClick={closePanel}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Popup */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[85vh]
                   overflow-y-auto scrollbar-hide
                   rounded-3xl border border-white/10
                   bg-[#111118] p-8 sm:p-10 md:p-12
                   shadow-2xl animate-[popup_0.3s_ease-out]"
      >

        {/* Close */}
        <button
          onClick={closePanel}
          className="absolute right-6 top-5 flex h-9 w-9
                     items-center justify-center rounded-full
                     border border-white/10 bg-white/5
                     text-gray-400 transition
                     hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>

        <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
          Skills
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Technical Skills
        </h2>

        <p className="mt-4 leading-7 text-gray-400">
          Technologies, concepts, and tools I use to build software
          applications and solve technical problems.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10
                         bg-white/5 p-6 transition duration-300
                         hover:border-purple-500/40
                         hover:bg-purple-500/5"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10
                               bg-white/5 px-3 py-2 text-sm
                               text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default SkillsPanel;

