import { useState, useEffect } from "react";

const links = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5" : "bg-transparent"}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => handleClick("#home")} className="text-white font-bold text-lg tracking-tight">
                    ML<span className="text-sky-400">.</span>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => handleClick(link.href)}
                                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className="md:hidden text-gray-400 hover:text-white transition-colors"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className="text-gray-300 hover:text-white text-sm font-medium text-left transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
