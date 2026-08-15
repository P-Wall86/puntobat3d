import { useEffect } from "react";
import type { Product } from "@/types/products";

type ProductModalProps = {
    product: Product;
    isSelected: boolean;
    onClose: () => void;
    onToggle: () => void;
};

export default function ProductModal({
    product,
    isSelected,
    onClose,
    onToggle,
}: ProductModalProps) {
    useEffect(() => {
        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollY);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in" onClick={onClose}>
            <div 
                className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[650px] max-h-[95vh] sm:max-h-[90vh] bg-[#013b7b]/40 backdrop-blur-sm text-white rounded-2xl overflow-hidden shadow-2xl border border-[#2cb7c9]/20 relative flex flex-col md:flex-row" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 z-20 flex h-8 w-8 sm:h-7 sm:w-7 text-base sm:text-lg items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/80 text-slate-400 transition-colors hover:text-[#2cb7c9]"
                >
                    ✕
                </button>

                {/* Imagen - ocupa menos espacio en mobile */}
                <div className="w-full md:w-[45%] aspect-[4/3] md:aspect-auto bg-black/25 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-[30vh] sm:max-h-[40vh] md:max-h-full max-w-full object-contain rounded-xl"
                    />
                </div>

                {/* Texto - scrolleable en mobile */}
                <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col gap-2 overflow-y-auto max-h-[40vh] md:max-h-none">
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold uppercase tracking-wide text-white break-words leading-tight pr-6">
                        {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-normal break-words max-h-[120px] sm:max-h-[200px] overflow-y-auto pr-1">
                        {product.description}
                    </p>
                    <button 
                        onClick={onToggle} 
                        className={`w-full mt-2 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition font-bold active:scale-95 shadow-md ${
                            isSelected 
                                ? "bg-[#e76f7a] text-black hover:bg-[#d45f6a]" 
                                : "bg-[#f2c94c] text-black hover:bg-[#e0b83a]"
                        }`}
                    > 
                        {isSelected ? "Quitar de consulta" : "Agregar a consulta"}
                    </button>
                </div>
            </div>
        </div>
    );
}