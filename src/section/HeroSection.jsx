export default function HeroSection() {
  const heroParagraph = `I'm a programmer specializing in React for building modern user interfaces and using FastAPI or Express.js to create efficient backend systems. I focus on developing clean, responsive, and user-friendly web applications.`;

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-[#14274E] to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Lawrence
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {heroParagraph}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="/MarkLawrenceGonzales_FullStackDeveloper_Resume.pdf"
                download="MarkLawrenceGonzales_FullStackDeveloper_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105 transition-all duration-300"
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
                className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                GitHub Profile
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <span className="text-gray-400 text-sm">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-gray-400 text-sm">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 border-2 border-white/20 flex items-center justify-center overflow-hidden">
              <img
                src="/images/1. GONZALES, Mark Lawrence bscs. (1).jpg"
                alt="Mark Lawrence Gonzales"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute top-4 left-4 w-16 h-16 border-4 border-sky-500/30 rounded-full animate-spin" style={{ animationDuration: "8s" }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-4 border-blue-500/30 rounded-full animate-bounce"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
