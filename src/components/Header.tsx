"use client";

import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-[#013b7b]/70 backdrop-blur-sm border-b border-[#2cb7c9]/30">
                <div className="max-w-6xl mx-auto px-4 py-3 lg:py-4">
                    <nav>
                        <ul className=" flex justify-around text-xs sm:text-sm lg:text-base tracking-widest uppercase">
                            <li>
                                <Link href="#section1" className="text-white font-extrabold hover:text-[#2cb7c9] transition">
                                    Mates
                                </Link>
                            </li>
                            <li>
                                <Link href="#section2" className="text-white font-extrabold hover:text-[#2cb7c9] transition">
                                    Llaveros
                                </Link>
                            </li>
                            <li>
                                <Link href="#section3" className="text-white font-extrabold hover:text-[#2cb7c9] transition">
                                    Adornos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}