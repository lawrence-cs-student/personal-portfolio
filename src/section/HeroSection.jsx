import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const name = "Lawrence";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = name;
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF9EB] pt-20">
      {/* Complex Background Elements */}
      <div className="blob w-[500px] h-[500px] bg-[#6800FF] -top-20 -left-20 animate-pulse" />
      <div className="blob w-[400px] h-[400px] bg-[#6800FF] bottom-0 right-0 opacity-10" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#6800FF15_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6800FF10] border border-[#6800FF20] text-[#6800FF] text-sm font-semibold tracking-wide uppercase animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6800FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6800FF]"></span>
              </span>
              Full Stack Developer
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-tight">
                Design. Architect.<br />
                <span className="text-[#6800FF]">Develop</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#4A4A4A] max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                I'm <span className="text-[#6800FF] font-bold border-b-4 border-[#6800FF20]">{text}<span className="animate-pulse">|</span></span>, 
                crafting high-performance digital experiences with React and Modern Backend Systems.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projects" className="px-8 py-4 bg-[#6800FF] text-white font-bold rounded-2xl hover:bg-[#5000CC] hover:scale-105 transition-all shadow-lg shadow-[#6800FF40]">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-white border-2 border-[#6800FF] text-[#6800FF] font-bold rounded-2xl hover:bg-[#6800FF10] hover:scale-105 transition-all">
                Let's Talk
              </a>
            </div>

            {/* Social Proof / Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 opacity-60">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#1A1A1A]">3+</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Years Coding Exp.</span>
              </div>
              <div className="w-px h-12 bg-[#6800FF20]" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#1A1A1A]">10+</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#6800FF20] animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-[#6800FF10] animate-reverse-spin" />
              
              {/* Image Container */}
              <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/GONZALES, Mark Lawrence bscs. (7).jpg" 
                  alt="Lawrence Gonzales" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6800FF20] to-transparent" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#6800FF10] rounded-lg flex items-center justify-center">
                    🚀
                  </div>
                  <span className="font-bold text-sm">Fast & Scalable</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-2xl shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#6800FF10] rounded-lg flex items-center justify-center">
                    💎
                  </div>
                  <span className="font-bold text-sm">Pixel Perfect</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-40">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6800FF]">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#6800FF] to-transparent" />
      </div>
    </section>
  );
}
