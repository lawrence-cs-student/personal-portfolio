export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mt-2">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 text-sm mt-3">
                        Feel free to reach out for collaborations, opportunities, or just a chat.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {/* Phone */}
                    <a
                        href="tel:+639295602695"
                        className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-800/50 border border-white/5 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
                    >
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30 text-2xl group-hover:scale-110 transition-transform">
                            📞
                        </span>
                        <div className="text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone</p>
                            <p className="text-gray-200 text-sm font-medium">0929 560 2695</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:mark.lawrence.gonzales07@gmail.com"
                        className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-800/50 border border-white/5 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
                    >
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30 text-2xl group-hover:scale-110 transition-transform">
                            ✉️
                        </span>
                        <div className="text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
                            <p className="text-gray-200 text-sm font-medium break-all">mark.lawrence.gonzales07@gmail.com</p>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mark-lawrence-gonzales-5668b5255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-800/50 border border-white/5 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
                    >
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </span>
                        <div className="text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">LinkedIn</p>
                            <p className="text-gray-200 text-sm font-medium">Connect with me</p>
                        </div>
                    </a>
                </div>
            </div>

            <p className="text-center text-gray-600 text-xs mt-12">
                © {new Date().getFullYear()} Mark Lawrence Gonzales. All rights reserved.
            </p>
        </section>
    );
}
