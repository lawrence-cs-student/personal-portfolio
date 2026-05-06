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
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5" : "bg-transparent"}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <button onClick={() => handleClick("#home")} className="text-white font-bold text-xl tracking-tight group">
                    ML<span className="text-sky-400 group-hover:text-sky-300 transition-colors">.</span>
                </button>

                <ul className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => handleClick(link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    active === link.href
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {link.label}
                                {active === link.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sky-400 rounded-full" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
                    {links.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all ${
                                active === link.href
                                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
