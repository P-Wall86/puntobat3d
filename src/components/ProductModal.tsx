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
    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-[95%] sm:max-w-2xl bg-[#1E293B] text-white rounded-xl overflow-hidden shadow-xl border border-[#2cb7c9]/30 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 text-2xl text-white hover:text-[#2cb7c9] z-10 bg-black/30 rounded-full w-7 h-7 flex items-center justify-center"
                >
                    ×
                </button>

                <div className="flex flex-col md:grid md:grid-cols-2">
                    <div className="md:bg-slate-900">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain bg-slate-900"
                        />
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col justify-center gap-3">
                        <h3 className="text-lg sm:text-xl uppercase tracking-wide text-white">
                            {product.name}
                        </h3>

                        <p className="text-[#f2c94c] text-base sm:text-lg font-semibold">
                            ${product.price} {product.currency}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {product.description}
                        </p>

                        <button
                            onClick={onToggle}
                            className={`
                        mt-2 py-2.5 rounded text-sm uppercase tracking-wider transition font-bold
                        ${isSelected
                                    ? "bg-[#e76f7a] text-black hover:bg-[#d45f6a]"
                                    : "bg-[#f2c94c] text-black hover:bg-[#e0b83a]"
                                }
                    `}
                        >
                            {isSelected ? "Quitar de consulta" : "Agregar a consulta"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}