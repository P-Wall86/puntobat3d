type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    description: string;
    image: string;
    category: string;
};

type ProductCardProps = {
    product: Product;
    isSelected: boolean;
    onOpenModal: () => void;
};

export default function ProductCard({
    product,
    isSelected,
    onOpenModal,
}: ProductCardProps) {
    return (
        <div
            className={`
                bg-[#0F172A]
                border border-slate-700
                rounded-lg
                overflow-hidden
                transition
                ${isSelected ? "border-[#F4A896]" : "hover:border-slate-500"}
            `}
        >
            <div className="aspect-square overflow-hidden bg-slate-900">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onClick={onOpenModal}
                />
            </div>

            <div className="p-2">
                <h3 className="text-sm uppercase tracking-wide">
                    {product.name}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                    ${product.price}
                </p>

                <button
                    onClick={onOpenModal}
                    className="mt-3 text-xs uppercase tracking-wider text-[#F4A896]"
                >
                    Ver detalle
                </button>
            </div>
        </div>
    );
}