import { useState } from "react";

export default function ProjectModal({ project, onClose }) {
    const [lightbox, setLightbox] = useState(null);

    if (!project) return null;

    const images = project.images ?? [project.imageUrl];

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <div
                    className="bg-gray-900 rounded-2xl w-full md:w-[60vw] h-[90vh] md:h-[60vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Left - Photo Grid */}
                    <div className="w-full md:w-1/2 p-3 bg-gray-950 overflow-y-auto max-h-48 md:max-h-full">
                        <div className="grid grid-cols-2 gap-2">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setLightbox(img)}
                                    className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Details */}
                    <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 overflow-y-auto gap-1">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                {project.projectType}
                            </span>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <h2 className="text-white text-2xl font-bold mb-3">{project.projectName}</h2>

                        <p className="text-gray-300 text-sm leading-relaxed mb-5">{project.projectDescription}</p>

                        <div className="mb-6">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col gap-3">
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
                            >
                                Visit Web App
                            </a>
                            <button
                                onClick={onClose}
                                className="py-2.5 rounded-lg border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 text-sm font-semibold transition-colors"
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
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-colors"
                        onClick={() => setLightbox(null)}
                    >
                        ✕
                    </button>
                    <img
                        src={lightbox}
                        alt={project.projectName}
                        className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
