"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#013b7b]/70 backdrop-blur-sm border-b border-[#2cb7c9]/30">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-3 lg:py-4">
                <nav>
                    {/* Desktop: 1 fila */}
                    <ul className="hidden sm:flex justify-around text-xs lg:text-base tracking-widest uppercase gap-0.5 sm:gap-1">
                        <li>
                            <Link href="#mates" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2">
                                Mates
                            </Link>
                        </li>
                        <li>
                            <Link href="#llaveros" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2">
                                Llaveros
                            </Link>
                        </li>
                        <li>
                            <Link href="#figuras" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2">
                                Figuras
                            </Link>
                        </li>
                        <li>
                            <Link href="#organizadores" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2">
                                Organizadores
                            </Link>
                        </li>
                        <li>
                            <Link href="#varios" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1 sm:px-2">
                                Varios
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile: 2 filas */}
                    <ul className="flex sm:hidden flex-col items-center text-[10px] tracking-widest uppercase gap-0.5">
                        <li className="flex justify-around w-full">
                            <Link href="#mates" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1">
                                Mates
                            </Link>
                            <Link href="#llaveros" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1">
                                Llaveros
                            </Link>
                            <Link href="#figuras" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1">
                                Figuras
                            </Link>
                        </li>
                        <li className="flex justify-around w-full">
                            <Link href="#organizadores" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1">
                                Organizadores
                            </Link>
                            <Link href="#varios" className="text-white font-extrabold hover:text-[#2cb7c9] transition whitespace-nowrap px-1">
                                Varios
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}