import type { Product } from "@/types/products";

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
        <div className={`bg-black/25 backdrop-blur-md border border-[#2cb7c9]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2cb7c9]/70 shadow-md hover:shadow-xl ${isSelected ? "border-[#e76f7a] ring-2 ring-[#e76f7a]/40" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-xl mx-3 mt-3 p-2">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-[1.03]" onClick={onOpenModal}/>
            </div>
            <div className="p-4">
                <h3 className="text-sm uppercase tracking-wide font-extrabold leading-tight line-clamp-2 text-white">
                    {product.name}
                </h3>
                <button onClick={onOpenModal} className="group mt-4 text-xs uppercase tracking-widest font-extrabold text-[#2cb7c9] hover:text-[#5fd3e0] transition">
                    Ver detalle
                    <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1">
                        →
                    </span>
                </button>
            </div>
        </div>
    );
}