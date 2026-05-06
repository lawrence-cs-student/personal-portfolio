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
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">What I Use</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mt-2 mb-3">
            Technologies I Work With
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Tools and frameworks I use to build modern, responsive web applications
          </p>
        </div>

        <div className="space-y-10">
          
          {/* Frontend */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-px bg-sky-500"></span>
              Frontend
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
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-px bg-blue-500"></span>
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
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-px bg-purple-500"></span>
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
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-px bg-green-500"></span>
              Cloud & AI
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {skills.slice(16, 18).map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  iconClass={skill.iconClass} 
                  iconName={skill.name} 
                />
              ))}
              <SkillCard key="groq-api" iconClass="" iconName="GROQ API" emoji="🤖" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}