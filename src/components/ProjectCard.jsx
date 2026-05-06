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
            className="cursor-pointer group relative bg-gray-800/40 border border-white/5 rounded-2xl overflow-hidden hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 hover:-translate-y-1"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={projectName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                    {projectType}
                </span>

                <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 bg-sky-500/20 backdrop-blur-md text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-500/30">
                    View Details →
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-sky-300 transition-colors duration-300">{projectName}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{projectDescription}</p>

                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {techStack.map((tech) => (
                            <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-gray-700/60 text-gray-400 border border-white/5 group-hover:border-sky-500/20 group-hover:text-gray-300 transition-all duration-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
}
