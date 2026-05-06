import { useState } from "react";

export default function ProjectModal({ project, onClose }) {
    const [lightbox, setLightbox] = useState(null);

    if (!project) return null;

    const images = project.images ?? [project.imageUrl];

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                onClick={onClose}
            >
                <div
                    className="bg-gray-900 border border-white/10 rounded-2xl w-full md:w-[60vw] h-[90vh] md:h-[65vh] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/50"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Left - Photo Grid */}
                    <div className="w-full md:w-1/2 bg-gray-950 overflow-y-auto max-h-52 md:max-h-full p-3">
                        <div className="grid grid-cols-2 gap-2">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setLightbox(img)}
                                    className="group aspect-video rounded-xl overflow-hidden cursor-pointer relative border border-white/5 hover:border-sky-500/40 transition-all duration-300"
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Details */}
                    <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 overflow-y-auto border-t md:border-t-0 md:border-l border-white/5">
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                                {project.projectType}
                            </span>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-400 transition-all duration-200"
                            >
                                ✕
                            </button>
                        </div>

                        <h2 className="text-white text-2xl font-bold mb-3 leading-tight">{project.projectName}</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.projectDescription}</p>

                        <div className="mb-6">
                            <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col gap-3">
                            {project.projectUrl && project.projectUrl !== "#" ? (
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
                                >
                                    Visit Web App
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <span className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-800/50 text-gray-500 text-sm font-semibold cursor-not-allowed border border-gray-700/50">
                                    🚧 Currently in Development
                                </span>
                            )}
                            <button
                                onClick={onClose}
                                className="py-3 rounded-xl border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 text-sm font-semibold transition-all duration-200"
                            >
                                Close Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                        onClick={() => setLightbox(null)}
                    >
                        ✕
                    </button>
                    <img
                        src={lightbox}
                        alt={project.projectName}
                        className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
