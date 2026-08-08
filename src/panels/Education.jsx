function Education({ closePanel }) {
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
          Education
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          My Education
        </h2>

        <div className="mt-10 space-y-6">

          {/* B.Tech */}
          <div
            className="rounded-2xl border border-white/10
                       bg-white/5 p-7"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <p className="text-sm text-purple-400">
                  2024 – 2028
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  B.Tech — Computer Science & Engineering
                </h3>

                <p className="mt-2 text-gray-400">
                  Specialization: Artificial Intelligence & Machine Learning
                </p>

                <p className="mt-1 text-gray-400">
                  Parul University
                </p>
              </div>

              <div className="h-fit rounded-xl border border-purple-500/20
                              bg-purple-500/10 px-4 py-3">
                <p className="text-sm text-purple-400">
                  CGPA
                </p>
                <p className="mt-1 text-xl font-bold text-white">
                  7.16 / 10
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm text-gray-500">
                Relevant Coursework
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "OOP",
                  "DBMS",
                  "Operating Systems",
                  "Computer Networks",
                  "Software Engineering",
                  "Web Technologies",
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/10
                               bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div
            className="rounded-2xl border border-white/10
                       bg-white/5 p-7"
          >
            <p className="text-sm text-purple-400">
              Intermediate
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Higher Secondary Education
            </h3>

            <p className="mt-2 text-gray-400">
              Academic Score: 94%
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;