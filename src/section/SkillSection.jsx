import SkillCard from "../components/SkillCard";

export default function SkillSection() {
  const skills = [
    // Frontend
    { id: "js", iconClass: "devicon-javascript-plain colored", name: "JavaScript" },
    { id: "react", iconClass: "devicon-react-original colored", name: "React" },
    { id: "nextjs", iconClass: "devicon-nextjs-plain colored", name: "Next.js" },
    { id: "css", iconClass: "devicon-css3-plain colored", name: "CSS3" },
    { id: "tailwind", iconClass: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
    { id: "bootstrap", iconClass: "devicon-bootstrap-plain colored", name: "Bootstrap" },
    { id: "html", iconClass: "devicon-html5-plain colored", name: "HTML5" },
    
    // Backend & Databases
    { id: "python", iconClass: "devicon-python-plain colored", name: "Python" },
    { id: "fastapi", iconClass: "devicon-fastapi-plain colored", name: "FastAPI" },
    { id: "express", iconClass: "devicon-express-original", name: "Express.js" },
    { id: "postgresql", iconClass: "devicon-postgresql-plain colored", name: "PostgreSQL" },
    { id: "mysql", iconClass: "devicon-mysql-plain colored", name: "MySQL" },
    { id: "mongodb", iconClass: "devicon-mongodb-plain colored", name: "MongoDB" },
    
    // DevOps & Tools
    { id: "git", iconClass: "devicon-git-plain colored", name: "Git" },
    { id: "github", iconClass: "devicon-github-original colored", name: "GitHub" },
    { id: "figma", iconClass: "devicon-figma-plain colored", name: "Figma" },
    
    // Cloud & AI
    { id: "cloudflare", iconClass: "devicon-cloudflare-plain colored", name: "Cloudflare R2" },
    { id: "gemini", iconClass: "devicon-googlecloud-plain colored", name: "Gemini API" },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-3">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and frameworks I use to build modern, responsive web applications
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-sky-500 rounded-full"></span>
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {skills.slice(0, 7).map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  iconClass={skill.iconClass} 
                  iconName={skill.name} 
                />
              ))}
            </div>
          </div>

          {/* Backend & Databases */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Backend & Databases
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {skills.slice(7, 13).map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  iconClass={skill.iconClass} 
                  iconName={skill.name} 
                />
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
              DevOps & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {skills.slice(13, 16).map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  iconClass={skill.iconClass} 
                  iconName={skill.name} 
                />
              ))}
            </div>
          </div>

          {/* Cloud & AI */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              Cloud & AI Integration
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {skills.slice(16, 18).map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  iconClass={skill.iconClass} 
                  iconName={skill.name} 
                />
              ))}
              {/* Custom AI Cards */}
              <div 
                key="groq-api"
                className="group w-full p-4 rounded-2xl flex flex-col justify-center items-center gap-2 bg-[#14274E]/80 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer"
              >
                <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
                  🤖
                </div>
                <h1 className="text-sm md:text-base font-medium text-gray-200 group-hover:text-green-400 transition-colors duration-300">
                  GROQ API
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}