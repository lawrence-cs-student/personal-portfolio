import React from "react";

export default function ProjectCard({
    projectName,
    projectDescription,
    projectType,
    imageUrl,
    techStack = [],
    onClick
}) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-[32px] overflow-hidden border border-[#6800FF10] hover:border-[#6800FF40] hover:shadow-[0_20px_50px_rgba(104,0,255,0.12)] transition-all duration-500 hover:-translate-y-2"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden p-4">
                <div className="relative h-full w-full rounded-[24px] overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={projectName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6800FF20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Badges */}
                <span className="absolute top-8 left-8 px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#6800FF] rounded-full text-xs font-bold border border-[#6800FF10] shadow-sm">
                    {projectType}
                </span>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-[#6800FF] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#6800FF40]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-8 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#1A1A1A] group-hover:text-[#6800FF] transition-colors duration-300">
                        {projectName}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed line-clamp-2 font-medium">
                        {projectDescription}
                    </p>
                </div>

                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg bg-[#6800FF05] text-[#6800FF] border border-[#6800FF10]">
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 3 && (
                            <span className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-[#1A1A1A05] text-[#1A1A1A60]">
                                +{techStack.length - 3}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
