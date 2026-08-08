function AboutPanel({ closePanel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5">

      {/* Background */}
      <div
        onClick={closePanel}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Center Popup */}
      <div className="relative z-10 w-full max-w-5xl
                      max-h-[85vh]
                      overflow-y-auto
                      scrollbar-hide
                      rounded-3xl border border-white/10
                      bg-[#111118] p-10 shadow-2xl
                      animate-[popup_0.3s_ease-out]">

        {/* Close */}
        <button
          onClick={closePanel}
          className="absolute right-6 top-5 text-xl text-gray-400
                     hover:text-white"
        >
          ✕
        </button>

        <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          A little about me
        </h2>

        <p className="mt-6 leading-8 text-gray-400">
          I'm an aspiring Software Development Engineer pursuing
          B.Tech at Parul University with strong foundations in Java,
          Python, Data Structures and Algorithms, and Software Development.
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          I'm passionate about building scalable applications, solving
          real-world problems, and leveraging AI-powered tools to create
          impactful software solutions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-purple-400">University</p>
            <h3 className="mt-2 font-semibold">
              Parul University
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-purple-400">Degree</p>
            <h3 className="mt-2 font-semibold">
              B.Tech — CSE
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-purple-400">CGPA</p>
            <h3 className="mt-2 font-semibold">
              7.16 / 10
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-purple-400">Duration</p>
            <h3 className="mt-2 font-semibold">
              2024 – 2028
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutPanel;