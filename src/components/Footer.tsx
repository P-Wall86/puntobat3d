export default function Footer() {
    return (
        <footer className="mt-20 border-t border-[#2cb7c9]/30 bg-[#013b7b]/70 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                    <div>
                        <h3 className="text-xl font-extrabold tracking-wide text-white">
                            Punto BAT 3D
                        </h3>

                        <p className="mt-2 text-sm font-light text-slate-200">
                            Diseño e impresión 3D personalizada
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-light text-slate-200 mb-3">
                            Seguinos en:
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/puntobatar" target="_blank" rel="noopener noreferrer">
                                <img src="/images/socials/facebook.svg" alt="Facebook" className="w-6 h-6 opacity-70 hover:opacity-100 hover:scale-110 invert transition"/>
                            </a>
                            <a href="https://www.instagram.com/puntobat_3d" target="_blank" rel="noopener noreferrer">
                                <img src="/images/socials/instagram.svg" alt="Instagram" className="w-6 h-6 opacity-70 hover:opacity-100 hover:scale-110 invert transition"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center">
                    <p className="text-xs tracking-normal font-light text-slate-300">
                        © {new Date().getFullYear()} Punto BAT 3D · Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}