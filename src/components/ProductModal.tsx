import { useEffect } from "react";

type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    description: string;
    image: string;
};

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
        <div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={onClose}
        >

            <div
                className="w-[220px] md:w-[800px] bg-[#1E293B] max-w-[95vw] text-white
                        rounded-2xl overflow-hidden shadow-2xl border border-[#2cb7c9]/20
                        relative flex flex-col md:flex-row touch-auto"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-sm text-slate-400 hover:text-[#2cb7c9] z-20 bg-slate-900/80 rounded-full w-5 h-5 flex items-center justify-center transition-colors border border-slate-700/50"
                >
                    ×
                </button>

                <div className="w-full h-60 md:w-[45%] md:h-auto
                    bg-slate-900/40 flex items-center justify-center pt-3 md:pt-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto md:w-full md:h-full object-contain"
                    />
                </div>

                <div className="p-3 md:flex-1 md:p-8 flex flex-col gap-2 md:justify-center">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-xs md:text-2xl font-bold uppercase tracking-wide 
                        text-white break-words leading-tight">
                            {product.name}
                        </h3>

                        <p className="text-[#f2c94c] text-xs md:text-xl font-bold mt-0.5">
                            ${product.price} {product.currency}
                        </p>

                        <p className="text-xs md:text-sm text-slate-300 leading-normal
                        max-h-[70px] md:max-h-none overflow-y-auto md:overflow-visible
                        pr-1 break-words mt-1">
                            {product.description}
                        </p>
                    </div>

                    <button
                        onClick={onToggle}
                        className={`
                            w-full mt-2 py-2 rounded-xl text-[10px] uppercase tracking-wider transition font-bold active:scale-95 shadow-md
                            ${isSelected
                                ? "bg-[#e76f7a] text-black hover:bg-[#d45f6a]"
                                : "bg-[#f2c94c] text-black hover:bg-[#e0b83a]"
                            }
                        `}
                    >
                        {isSelected ? "Quitar" : "Agregar"}
                    </button>
                </div>
            </div>
        </div>
    );
}