import React, { useState } from "react";

export default function ProjectModal({ project, onClose }) {
    const [lightbox, setLightbox] = useState(null);

    if (!project) return null;

    const images = project.images ?? [project.imageUrl];

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-xl p-4 md:p-10"
                onClick={onClose}
            >
                <div
                    className="bg-[#FFF9EB] rounded-[48px] w-full max-w-6xl h-full max-h-[850px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button Mobile */}
                    <button 
                        onClick={onClose}
                        className="lg:hidden absolute top-6 right-6 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] shadow-lg"
                    >
                        ✕
                    </button>

                    {/* Left - Image Gallery */}
                    <div className="w-full lg:w-3/5 bg-white p-6 lg:p-10 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setLightbox(img)}
                                    className={`group relative rounded-[32px] overflow-hidden cursor-pointer border border-[#6800FF10] hover:border-[#6800FF] transition-all duration-500 ${
                                        i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"
                                    }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-[#6800FF20] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6800FF] shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Project Content */}
                    <div className="w-full lg:w-2/5 flex flex-col p-8 md:p-12 overflow-y-auto bg-[#FFF9EB]">
                        <div className="hidden lg:flex justify-end mb-8">
                            <button 
                                onClick={onClose}
                                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A1A1A] hover:bg-[#6800FF] hover:text-white transition-all shadow-sm border border-[#6800FF10]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#6800FF10] text-[#6800FF] text-xs font-black uppercase tracking-widest border border-[#6800FF20]">
                                    {project.projectType}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
                                    {project.projectName}
                                </h2>
                                <p className="text-[#4A4A4A] text-lg leading-relaxed font-medium">
                                    {project.projectDescription}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#6800FF]">Built With</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <div key={tech} className="px-4 py-2 bg-white rounded-xl border border-[#6800FF10] text-sm font-bold text-[#1A1A1A] flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#6800FF]" />
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 space-y-4">
                                {project.projectUrl && project.projectUrl !== "#" ? (
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-5 bg-[#6800FF] text-white font-black rounded-[24px] hover:bg-[#5000CC] hover:scale-[1.02] transition-all shadow-xl shadow-[#6800FF30]"
                                    >
                                        Launch Web App
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center gap-3 w-full py-5 bg-[#1A1A1A05] text-[#1A1A1A40] font-black rounded-[24px] border border-[#1A1A1A10] cursor-not-allowed">
                                        <span className="text-xl">🚧</span> Work In Progress
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/95 p-6"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-10 right-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1A1A1A] hover:bg-[#6800FF] hover:text-white transition-all shadow-2xl"
                        onClick={() => setLightbox(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={lightbox}
                        alt=""
                        className="max-w-full max-h-full rounded-[40px] object-contain shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-4 border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
