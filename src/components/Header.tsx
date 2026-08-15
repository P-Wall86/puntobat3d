"use client";

import Link from "next/link";

export default function Header() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", `#${id}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-[#013b7b]/70 backdrop-blur-sm border-b border-[#2cb7c9]/30">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-3 lg:py-4">
                <nav>
                    {/* Desktop */}
                    <ul className="hidden sm:flex justify-around text-xs lg:text-base tracking-widest uppercase gap-0.5 sm:gap-1">
                        <li>
                            <button
                                onClick={() => scrollToSection('mates')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2"
                            >
                                MATES
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('llaveros')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2"
                            >
                                LLAVEROS
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('figuras')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2"
                            >
                                FIGURAS
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('organizadores')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2"
                            >
                                ORGANIZADORES
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('varios')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2"
                            >
                                VARIOS
                            </button>
                        </li>
                    </ul>

                    {/* Mobile */}
                    <ul className="flex sm:hidden flex-col items-center text-[10px] tracking-widest uppercase gap-0.5">
                        <li className="flex justify-around w-full">
                            <button
                                onClick={() => scrollToSection('mates')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1"
                            >
                                MATES
                            </button>
                            <button
                                onClick={() => scrollToSection('llaveros')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1"
                            >
                                LLAVEROS
                            </button>
                            <button
                                onClick={() => scrollToSection('figuras')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1"
                            >
                                FIGURAS
                            </button>
                        </li>
                        <li className="flex justify-around w-full">
                            <button
                                onClick={() => scrollToSection('organizadores')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1"
                            >
                                ORGANIZADORES
                            </button>
                            <button
                                onClick={() => scrollToSection('varios')}
                                className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1"
                            >
                                VARIOS
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}