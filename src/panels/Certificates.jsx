function Certificates({ closePanel }) {
  const certificates = [
    {
      title: "IBM Certification",
      issuer: "IBM",
    },
    {
      title: "Cisco Certification",
      issuer: "Cisco",
    },
    {
      title: "Microsoft Certification",
      issuer: "Microsoft",
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
          Certifications
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Certifications
        </h2>

        <p className="mt-4 leading-7 text-gray-400">
          Certifications and learning achievements that complement
          my technical skills and academic background.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {certificates.map((certificate) => (
            <div
              key={certificate.issuer}
              className="rounded-2xl border border-white/10
                         bg-white/5 p-6 transition duration-300
                         hover:border-purple-500/40
                         hover:bg-purple-500/5"
            >
              <p className="text-sm text-purple-400">
                Certification
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 text-gray-400">
                Issued by {certificate.issuer}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Certificates;