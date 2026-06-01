
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
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-2xl bg-[#0F172A] text-white rounded-xl overflow-hidden shadow-xl border border-slate-700 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl text-white z-10"
                >
                    ×
                </button>

                <div className="grid md:grid-cols-2">
                    {/* IMAGE LEFT */}
                    <div className="bg-slate-900 flex items-center justify-center h-full">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* INFO RIGHT */}
                    <div className="p-6 flex flex-col justify-center gap-4">
                        <h3 className="text-xl uppercase tracking-wide">
                            {product.name}
                        </h3>

                        <p className="text-[#F4A896] text-lg">
                            ${product.price} {product.currency}
                        </p>

                        <p className="text-sm text-slate-300 leading-relaxed">
                            {product.description}
                        </p>

                        <button
                            onClick={onToggle}
                            className={`
                                mt-2 py-3 rounded text-sm uppercase tracking-wider transition
                                ${isSelected
                                    ? "bg-[#F4A896] text-[#0F172A]"
                                    : "bg-cyan-500 text-white hover:bg-cyan-400"
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