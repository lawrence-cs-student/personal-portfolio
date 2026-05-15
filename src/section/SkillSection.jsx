import React from 'react';

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      description: "Building immersive user interfaces with modern frameworks.",
      skills: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
      ]
    },
    {
      title: "Backend & Systems",
      description: "Crafting robust architectures and efficient data flows.",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        
        
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Streamlining development with professional workflows.",
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Github", icon: "devicon-github-plain colored" },
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
        { name: "Vercel", icon: "devicon-vercel-plain colored" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#FFF9EB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#6800FF05] -skew-x-12" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[#6800FF] font-bold tracking-[0.2em] uppercase text-sm mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
            My Technical <span className="text-[#6800FF]">Arsenal</span>
          </h3>
          <div className="w-20 h-1.5 bg-[#6800FF] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-[32px] border border-[#6800FF10] hover:border-[#6800FF30] hover:shadow-2xl hover:shadow-[#6800FF10] transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#6800FF] transition-colors">{category.title}</h4>
                <p className="text-[#4A4A4A] leading-relaxed">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFF9EB] border border-transparent group-hover:border-[#6800FF20] transition-all">
                    <i className={`${skill.icon} text-2xl`} />
                    <span className="font-semibold text-sm text-[#1A1A1A]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid - More Complex Layout Item */}
        <div className="mt-20 p-10 bg-[#6800FF] rounded-[40px] flex flex-col lg:flex-row items-center gap-10 shadow-2xl shadow-[#6800FF30]">
          <div className="flex-1 text-white space-y-4">
            <h4 className="text-3xl font-bold">Always Learning, Always Evolving</h4>
            <p className="text-white/80 text-lg">
              I stay at the forefront of technology by constantly exploring new frameworks and methodologies. 
              My goal is to build software that isn't just functional, but exceptional.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
              <div className="text-3xl font-bold text-white italic">100%</div>
              <div className="text-white/60 text-xs uppercase font-bold tracking-wider">Committed</div>
            </div>
            <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
              <div className="text-3xl font-bold text-white italic">Clean</div>
              <div className="text-white/60 text-xs uppercase font-bold tracking-wider">Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;