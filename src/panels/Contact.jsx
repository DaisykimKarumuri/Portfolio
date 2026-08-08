function Contact({ closePanel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Background */}
      <div
        onClick={closePanel}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Popup */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[85vh]
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
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          I'm open to opportunities, collaborations, and interesting
          software development projects.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">

          {/* Email */}
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="rounded-2xl border border-white/10
                       bg-white/5 p-6 transition duration-300
                       hover:border-purple-500/40
                       hover:bg-purple-500/5"
          >
            <p className="text-sm text-purple-400">
              Email
            </p>

            <p className="mt-2 break-all text-gray-300">
              karumuridaisy@gmail.com
            </p>
          </a>

          {/* Phone */}
          <div
            className="rounded-2xl border border-white/10
                       bg-white/5 p-6"
          >
            <p className="text-sm text-purple-400">
              Phone
            </p>

            <p className="mt-2 text-gray-300">
              8897611493
            </p>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/DaisykimKarumuri"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10
                       bg-white/5 p-6 transition duration-300
                       hover:border-purple-500/40
                       hover:bg-purple-500/5"
          >
            <p className="text-sm text-purple-400">
              GitHub
            </p>

            <p className="mt-2 text-gray-300">
              DaisykimKarumuri
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/daisykim-karumuri-56a168394/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10
                       bg-white/5 p-6 transition duration-300
                       hover:border-purple-500/40
                       hover:bg-purple-500/5"
          >
            <p className="text-sm text-purple-400">
              LinkedIn
            </p>

            <p className="mt-2 text-gray-300">
              DaisyKim Karumuri
            </p>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Contact;