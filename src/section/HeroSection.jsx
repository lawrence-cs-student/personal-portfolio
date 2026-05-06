export default function HeroSection() {
  const heroParagraph = `I'm a programmer specializing in React for building modern user interfaces and using FastAPI or Express.js to create efficient backend systems. I focus on developing clean, responsive, and user-friendly web applications.`;

  const floatingBadges = [
    { label: "React", color: "text-sky-400 border-sky-500/30 bg-sky-500/10", pos: "top-8 left-0" },
    { label: "FastAPI", color: "text-green-400 border-green-500/30 bg-green-500/10", pos: "top-1/3 -left-6" },
    { label: "Next.js", color: "text-white border-white/20 bg-white/5", pos: "bottom-16 left-4" },
    { label: "PostgreSQL", color: "text-blue-400 border-blue-500/30 bg-blue-500/10", pos: "top-6 right-0" },
    { label: "Tailwind", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10", pos: "bottom-20 right-0" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-[#14274E] to-gray-900 overflow-hidden relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 py-28 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Available for opportunities
            </div>

            <div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-2">Full Stack Developer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                Hello, I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Lawrence
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-sky-400 to-blue-500 opacity-50" />
                </span>
              </h1>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              {heroParagraph}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/MarkLawrenceGonzales_FullStackDeveloper_Resume.pdf"
                download="MarkLawrenceGonzales_FullStackDeveloper_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300"
              >
                📄 Download Resume
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="https://github.com/lawrence-cs-student?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                GitHub Profile
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2 border-t border-white/5">
              {[["3+", "Projects Built"], ["3+", "Years Coding"], ["10+", "Technologies"]].map(([num, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-white font-bold text-xl">{num}</p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-2xl translate-x-8 translate-y-8" />

            {/* Outer ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full border border-sky-500/10 animate-spin" style={{ animationDuration: "20s" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400" />
            </div>
            <div className="absolute w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] lg:w-[370px] lg:h-[370px] rounded-full border border-blue-500/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-blue-400" />
            </div>

            {/* Photo */}
            <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-sky-500/20">
              <img
                src="/images/1. GONZALES, Mark Lawrence bscs. (1).jpg"
                alt="Mark Lawrence Gonzales"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating tech badges */}
            {floatingBadges.map((b) => (
              <span
                key={b.label}
                className={`absolute ${b.pos} hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${b.color}`}
              >
                {b.label}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
