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
        bg-[#1E293B]
        border border-[#2cb7c9]/20
        rounded-lg
        overflow-hidden
        transition-all
        duration-200
        hover:border-[#2cb7c9]
        hover:shadow-lg
        hover:-translate-y-1
        ${isSelected ? "border-[#f4a261] ring-1 ring-[#F4A896]" : ""}
    `}
        >
            <div className="aspect-square overflow-hidden bg-slate-800">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    onClick={onOpenModal}
                />
            </div>

            <div className="p-3">
                <h3 className="text-sm uppercase tracking-wide text-slate-200">
                    {product.name}
                </h3>

                <p className="text-base font-semibold text-[#f2c94c] mt-1">
                    ${product.price}
                </p>

                <button
                    onClick={onOpenModal}
                    className="mt-3 text-xs uppercase tracking-wider text-[#2cb7c9] hover:text-[#5fd3e0] transition"
                >
                    Ver detalle
                </button>
            </div>
        </div>
    );
}