import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function ProjectSection() {
    const projects = [
        {
            id: "aidukado",
            projectName: "AIDUKADO",
            projectDescription: "An AI-assisted learning management system that enhances student learning and streamlines teacher workflows through automated content summarization, intelligent exam generation, and AI-assisted grading.",
            projectType: "Web App",
            imageUrl: "/images/aidukado2.PNG",
            images: [
                "/images/aidukado.PNG", "/images/aidukado14.PNG", "/images/aidukado3.PNG",
                "/images/aidukado4.PNG", "/images/aidukado5.PNG", "/images/aidukado6.PNG",
                "/images/aidukado7.PNG", "/images/aidukado8.PNG", "/images/aidukado10.PNG",
                "/images/aidukado16.PNG", "/images/aidukado19.PNG", "/images/aidukado20.PNG"
            ],
            techStack: ["React", "FastAPI", "Tailwind", "PostgreSQL", "Cloudflare R2"],
            projectUrl: "https://ai-dukado.vercel.app/login"
        },
        {
            id: "travelai",
            projectName: "TRAVELAI",
            projectDescription: "AI-assisted travel web application that provides personalized destination recommendations, allowing users to explore tourist spots with detailed insights, interactive maps, and bookmarking features.",
            projectType: "Web App",
            imageUrl: "/images/travelai.PNG",
            images: [
                "/images/travelai.PNG", "/images/travelai2.PNG", "/images/travelai3.PNG",
                "/images/travelai4.PNG", "/images/travelai5.PNG"
            ],
            techStack: ["React", "Express.js", "Tailwind", "MongoDB"],
            projectUrl: "#"
        },
        {
            id: "crypto-scanner",
            projectName: "CRYPTOSCAN",
            projectDescription: "A real-time cryptocurrency scanner that monitors trading strategies across Bybit and MEXC exchanges simultaneously.",
            projectType: "Web App",
            imageUrl: "/images/crypto-scanner.PNG",
            images: ["/images/crypto-scanner.PNG", "/images/crypto-scanner2.PNG", "/images/crypto-scanner3.PNG"],
            techStack: ["React", "FastAPI", "Bootstrap"],
            projectUrl: "https://crypto-scanner-ecru.vercel.app/"
        },
        {
            id: "affiliate-portfolio",
            projectName: "AFFILIATE PORTFOLIO",
            projectDescription: "TikTok affiliate marketing website designed to attract brand partnerships and showcase creator performance.",
            projectType: "Website",
            imageUrl: "/images/client1.PNG",
            images: ["/images/client1.PNG", "/images/client2.PNG", "/images/client4.PNG", "/images/client3.PNG"],
            techStack: ["Next.js", "Bootstrap"],
            projectUrl: "https://client-affiliate-portfolio.vercel.app/"
        },
    ];

    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="py-32 bg-[#FFF9EB] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6800FF20] to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-[#6800FF] font-black tracking-[0.3em] uppercase text-sm">Projects</h2>
                        <h3 className="text-5xl md:text-6xl font-black text-[#1A1A1A] leading-tight">
                            Latest Digital <span className="text-[#6800FF]">Creations</span>
                        </h3>
                    </div>
                    <p className="text-[#4A4A4A] text-xl max-w-md font-medium leading-relaxed">
                        A curated selection of my favorite projects, from complex AI-assisted systems to high-conversion marketing sites.
                    </p>
                </div>

                {/* Complex Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={project.id} 
                            className={`${
                                idx === 0 ? "lg:col-span-8" : 
                                idx === 1 ? "lg:col-span-4" : 
                                "lg:col-span-6"
                            }`}
                        >
                            <ProjectCard
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                projectType={project.projectType}
                                imageUrl={project.imageUrl}
                                techStack={project.techStack}
                                onClick={() => setSelected(project)}
                            />
                        </div>
                    ))}
                </div>

                {/* Footer CTA in Projects */}
                <div className="mt-24 text-center">
                    <p className="text-2xl font-bold text-[#1A1A1A] mb-8">Want to see more of my code?</p>
                    <a 
                        href="https://github.com/lawrence-cs-student" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white font-black rounded-3xl hover:bg-[#6800FF] transition-all hover:scale-105 shadow-2xl shadow-black/10"
                    >
                        Check my GitHub
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
