import React from 'react';

export default function FooterSection() {
    return (
        <footer className="py-16 bg-[#FFF9EB] border-t border-[#6800FF10]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    
                    {/* Brand Part */}
                    <div className="text-center md:text-left space-y-4">
                        <div className="text-2xl font-black text-[#1A1A1A] tracking-tighter">
                            Lawrence<span className="text-[#6800FF]">.</span>
                        </div>
                        <p className="text-[#4A4A4A] max-w-xs font-medium">
                            Building high-performance digital solutions with a focus on user experience and clean code.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row gap-8 text-center md:text-right">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#6800FF] mb-2">Email Me</p>
                            <a href="mailto:mark.lawrence.gonzales07@gmail.com" className="text-lg font-bold text-[#1A1A1A] hover:text-[#6800FF] transition-colors break-all">
                                mark.lawrence.gonzales07@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#6800FF] mb-2">Call Me</p>
                            <p className="text-lg font-bold text-[#1A1A1A]">0929-560-2695</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[#6800FF05] flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-[#4A4A4A60]">
                    <p>© {new Date().getFullYear()} Mark Lawrence Gonzales. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="https://github.com/lawrence-cs-student" target="_blank" rel="noreferrer" className="hover:text-[#6800FF] transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/mark-lawrence-gonzales-5668b5255" target="_blank" rel="noreferrer" className="hover:text-[#6800FF] transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}