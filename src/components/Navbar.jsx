import { useState, useEffect } from "react";

const links = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = links.map(l => document.querySelector(l.href));
            const current = sections.findLast(s => s && s.getBoundingClientRect().top <= 100);
            if (current) setActive(`#${current.id}`);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
                ? "bg-white/70 backdrop-blur-md border-b border-[#6800FF10] py-3" 
                : "bg-transparent py-5"
        }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <button 
                    onClick={() => handleClick("#home")} 
                    className="text-2xl font-black text-[#1A1A1A] tracking-tighter group flex items-center gap-2"
                >
                    <div className="w-10 h-10 bg-[#6800FF] rounded-xl flex items-center justify-center text-white text-base">
                        LG
                    </div>
                    <span>Lawrence<span className="text-[#6800FF]">.</span></span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 bg-[#6800FF05] p-1.5 rounded-2xl border border-[#6800FF10]">
                    {links.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                                active === link.href
                                    ? "bg-[#6800FF] text-white shadow-lg shadow-[#6800FF30]"
                                    : "text-[#4A4A4A] hover:text-[#6800FF] hover:bg-[#6800FF05]"
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a 
                        href="#contact" 
                        className="px-6 py-3 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#6800FF] transition-all hover:scale-105 active:scale-95"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-[#6800FF10] text-[#1A1A1A] hover:bg-[#6800FF10] transition-all"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#6800FF10] p-6 shadow-2xl animate-fade-in">
                    <div className="flex flex-col gap-3">
                        {links.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleClick(link.href)}
                                className={`px-6 py-4 rounded-2xl text-base font-bold text-left transition-all ${
                                    active === link.href
                                        ? "bg-[#6800FF10] text-[#6800FF] border border-[#6800FF20]"
                                        : "text-[#4A4A4A] hover:bg-[#6800FF05]"
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a 
                            href="#contact"
                            className="mt-4 px-6 py-5 bg-[#6800FF] text-white text-center font-bold rounded-2xl shadow-lg shadow-[#6800FF30]"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
