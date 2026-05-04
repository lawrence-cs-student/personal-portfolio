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
            className="cursor-pointer group bg-gray-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10 hover:scale-[1.02] transition-all duration-300"
        >
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={projectName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                    {projectType}
                </span>
            </div>

            <div className="p-5 space-y-3">
                <h3 className="text-white text-lg font-bold line-clamp-1">{projectName}</h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{projectDescription}</p>

                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                        {techStack.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-xs text-gray-500 pt-1">Click to view details →</p>
            </div>
        </div>
    );
}
