import React from 'react';

const ContactSection = () => {
  const contactDetails = [
    { 
      icon: "📧", 
      label: "Email Me", 
      value: "mark.lawrence.gonzales07@gmail.com", 
      link: "mailto:mark.lawrence.gonzales07@gmail.com",
      description: "Available for project inquiries and collaborations."
    },
    { 
      icon: "🔗", 
      label: "LinkedIn", 
      value: "Mark Lawrence Gonzales", 
      link: "https://www.linkedin.com/in/mark-lawrence-gonzales-5668b5255",
      description: "Let's connect professionally on LinkedIn."
    },
    { 
      icon: "📍", 
      label: "Location", 
      value: "Philippines", 
      link: "",
      description: "Remote / Hybrid"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-[#FFF9EB] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="blob w-[800px] h-[800px] bg-[#6800FF] -top-40 -left-40 opacity-[0.03]" />
      <div className="blob w-[600px] h-[600px] bg-[#6800FF] -bottom-40 -right-40 opacity-[0.05]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6800FF10] border border-[#6800FF20] text-[#6800FF] text-sm font-black tracking-widest uppercase">
            Let's Connect
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-tight">
            Ready to start your next <span className="text-[#6800FF]">Digital Chapter?</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and interesting projects. Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactDetails.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link} 
              target={item.link.startsWith('http') ? "_blank" : "_self"}
              rel="noreferrer"
              className="group bg-white p-10 rounded-[40px] border border-[#6800FF10] hover:border-[#6800FF] hover:shadow-[0_30px_60px_rgba(104,0,255,0.1)] transition-all duration-500 text-center flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 bg-[#6800FF10] rounded-3xl flex items-center justify-center text-4xl group-hover:bg-[#6800FF] group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6800FF]">{item.label}</p>
                <p className="text-xl font-black text-[#1A1A1A] break-all">{item.value}</p>
                <p className="text-sm font-medium text-[#4A4A4A60] pt-2">{item.description}</p>
              </div>
              
            </a>
          ))}
        </div>

        {/* Bottom decorative banner */}
        <div className="mt-32 p-12 bg-[#1A1A1A] rounded-[48px] text-center space-y-6 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6800FF] blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
          <h4 className="text-3xl md:text-4xl font-black text-white">Let's build something <span className="text-[#6800FF]">exceptional.</span></h4>
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto">
            Available for full-stack development and UI redesigning.
          </p>
          <div className="pt-4">
            <a href="mailto:mark.lawrence.gonzales07@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 bg-[#6800FF] text-white font-black rounded-2xl hover:bg-[#5000CC] hover:scale-105 transition-all shadow-xl shadow-[#6800FF40]">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
