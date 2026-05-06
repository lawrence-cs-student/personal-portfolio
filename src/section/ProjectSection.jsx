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
        <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-[#14274E] to-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">My Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mt-2">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
                        Click on any project to explore screenshots and details
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            projectName={project.projectName}
                            projectDescription={project.projectDescription}
                            projectType={project.projectType}
                            imageUrl={project.imageUrl}
                            techStack={project.techStack}
                            onClick={() => setSelected(project)}
                        />
                    ))}
                </div>
            </div>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
