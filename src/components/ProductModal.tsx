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
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
            <div className="w-[82vw] max-w-[95vw] md:max-w-[650px] bg-[#013b7b]/40 backdrop-blur-sm text-white rounded-2xl overflow-hidden shadow-2xl border border-[#2cb7c9]/20 relative flex flex-col md:flex-row touch-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 z-20 flex h-7 w-7 text-lg items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/80 text-sm text-slate-400 transition-colors hover:text-[#2cb7c9]">
                    x
                </button>
                <div className="w-full aspect-[4/3] md:aspect-auto md:h-auto md:w-[45%] bg-black/25 backdrop-blur-md flex items-center justify-center p-4">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain rounded-xl"/>
                </div>
                <div className="p-3 sm:p-5 md:flex-1 md:p-8 flex flex-col gap-3 md:justify-center">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold uppercase tracking-wide text-white break-words leading-tight">
                            {product.name}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-300 leading-normal max-h-[70px] md:max-h-none overflow-y-auto md:overflow-visible pr-1 break-words mt-1">
                            {product.description}
                        </p>
                    </div>
                    <button onClick={onToggle} className={`w-full mt-2 py-2 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition font-bold active:scale-95 shadow-md ${isSelected ? "bg-[#e76f7a] text-black hover:bg-[#d45f6a]" : "bg-[#f2c94c] text-black hover:bg-[#e0b83a]"}`}> 
                            {isSelected ? "Quitar de consulta" : "Agregar a consulta"}
                    </button>
                </div>
            </div>
        </div>
    );
}