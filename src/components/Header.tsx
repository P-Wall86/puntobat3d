'use client';

import Link from 'next/link';

export default function Header() {

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-[#2cb7c9]">
                <div className="max-w-6xl mx-auto px-4 py-3 lg:py-4">
                    <nav>
                        <ul className="
                            flex
                            justify-around
                            text-xs
                            sm:text-sm
                            lg:text-base
                            sm:text-sm
                            tracking-widest 
                            uppercase 
                            text-slate-300">
                            <li>
                                <Link
                                    href="#section1"
                                    className="hover:text-[#2cb7c9]">
                                    Mates
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#section2"
                                    className="hover:text-[#2cb7c9]">
                                    Llaveros
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#section3"
                                    className="hover:text-[#2cb7c9]">
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