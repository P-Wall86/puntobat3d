'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo/Logo.webp"
                            alt="Logo"
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                        />
                    </Link>

                    {/* TITLE */}
                    <h1 className="absolute left-1/2 -translate-x-1/2 text-lg tracking-[6px] font-semibold text-slate-400">
                        Punto BAT 3D
                    </h1>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-8 text-xs uppercase tracking-widest text-slate-400">
                            <li><Link href="#section1" className="hover:text-white">Mates</Link></li>
                            <li><Link href="#section2" className="hover:text-white">Llaveros</Link></li>
                            <li><Link href="#section3" className="hover:text-white">Adornos</Link></li>
                        </ul>
                    </nav>

                    {/* BURGER */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* MOBILE NAV */}
            {open && (
                <nav className="md:hidden fixed top-[72px] left-0 w-full bg-[#0F172A] border-t border-white/10 z-40 text-center py-6">
                    <ul className="space-y-4 uppercase text-sm tracking-widest text-slate-200">
                        <li><Link href="#section1" onClick={() => setOpen(false)}>Mates</Link></li>
                        <li><Link href="#section2" onClick={() => setOpen(false)}>Llaveros</Link></li>
                        <li><Link href="#section3" onClick={() => setOpen(false)}>Adornos</Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
}