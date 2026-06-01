export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-800 bg-[#0F172A]">
            <div className="max-w-6xl mx-auto px-4 py-10">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">

                    <div>
                        <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
                            Punto BAT
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Diseño e impresión 3D personalizada
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400 mb-3">
                            Seguinos en:
                        </p>

                        <div className="flex gap-4">

                            <a
                                href="https://www.facebook.com/puntobatar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/socials/facebook.svg"
                                    alt="Facebook"
                                    className="w-6 h-6 invert opacity-70 hover:opacity-100 transition"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/puntobat_3d"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/socials/instagram.svg"
                                    alt="Instagram"
                                    className="w-6 h-6 invert opacity-70 hover:opacity-100 transition"
                                />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="mt-10 border-t border-slate-800 pt-6 text-center">
                    <p className="text-xs tracking-wide text-slate-500">
                        © {new Date().getFullYear()} Punto BAT 3D · Todos los derechos reservados
                    </p>
                </div>

            </div>
        </footer>
    );
}