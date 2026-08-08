function Projects({ closePanel }) {
  const projects = [
    {
      title: "Student Performance Predictor",
      type: "Machine Learning Project",
      description:
        "A machine learning application that predicts students' final marks based on academic performance data such as study hours, attendance, previous marks, and assignment scores.",
      technologies: [
        "Python",
        "Flask",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
      ],
    },
    {
      title: "FoodBridge",
      type: "Food Donation & Food Waste Management Platform(Ongoing)",
      description:
        "A platform that connects restaurants and NGOs to facilitate food donation and management. The system is designed to improve food distribution and reduce food wastage.",
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "HireFrame(Future Project)",
      type: "Photographer Recruitment & Booking Platform",
      description:
        "An AI-powered Hiring platform that streamlines hiring or booking of best-photographers to capture life's best moments.",
      technologies: [
        "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS."
      ],
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
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          My Projects
        </h2>

        <p className="mt-4 leading-7 text-gray-400">
          Projects where I apply programming, web development,
          database, and machine learning concepts to practical problems.
        </p>

        <div className="mt-10 space-y-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10
                         bg-white/5 p-6 sm:p-7
                         transition duration-300
                         hover:border-purple-500/40
                         hover:bg-purple-500/5"
            >
              <p className="text-sm text-purple-400">
                {project.type}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10
                               bg-black/20 px-3 py-2 text-sm
                               text-gray-300"
                  >
                    {technology}
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

export default Projects;