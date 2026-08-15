'use client';

import { useEffect } from "react";

type PreviewModalProps = {
    selectedProducts: string[];
    productCategoryMap: Map<string, string>;
    productSubcategoryMap: Map<string, string>; // ← NUEVO
    onClose: () => void;
    onRemove: (productName: string) => void;
    onSendWhatsApp: () => void;
};

export default function PreviewModal({
    selectedProducts,
    productCategoryMap,
    productSubcategoryMap,
    onClose,
    onRemove,
    onSendWhatsApp,
}: PreviewModalProps) {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    // Mapeo de nombres de categorías para mostrar
    const categoryLabels: Record<string, string> = {
        mates: 'Mates',
        llaveros: 'Llaveros',
        figuras: 'Figuras',
        organizadores: 'Organizadores',
        varios: 'Varios',
    };

    // Mapeo de nombres de subcategorías para mostrar
    const subcategoryLabels: Record<string, string> = {
        fiestas: 'Fiestas',
        carteles: 'Carteles',
        toppers: 'Toppers',
        otros: 'Otros',
        especiales: 'Especiales',
    };

    // Función para obtener la clave de agrupamiento
    const getGroupKey = (productName: string): string => {
        const category = productCategoryMap.get(productName) || 'varios';
        if (category === 'varios') {
            const subcategory = productSubcategoryMap.get(productName);
            if (subcategory && subcategoryLabels[subcategory]) {
                return `Varios › ${subcategoryLabels[subcategory]}`;
            }
            return 'Varios';
        }
        return categoryLabels[category] || category;
    };

    // Agrupar productos por categoría (y subcategoría si es "varios")
    const groupedProducts = selectedProducts.reduce((acc, productName) => {
        const groupKey = getGroupKey(productName);
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(productName);
        return acc;
    }, {} as Record<string, string[]>);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4" onClick={onClose}>
            <div className="relative w-[82vw] max-w-md rounded-2xl bg-[#013b7b]/40 backdrop-blur-sm border border-[#2cb7c9]/20 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>   
                <button onClick={onClose} className="absolute top-2 right-2 z-20 flex h-7 w-7 text-lg items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/80 text-slate-400 transition-colors hover:text-[#2cb7c9]">
                    x
                </button>   
                <div className="p-3 sm:p-5 md:p-8">
                    <h3 className="mb-6 text-center text-base sm:text-lg md:text-2xl font-bold uppercase tracking-wide text-white">
                        Tu consulta
                    </h3>
                    {selectedProducts.length === 0 ? (
                        <p className="py-6 text-center text-sm sm:text-base text-slate-300">
                            Seleccioná un producto.
                        </p>
                    ) : (
                        <div className="max-h-72 overflow-y-auto overflow-x-hidden">
                            {Object.entries(groupedProducts).map(([groupKey, products]) => (
                                <div key={groupKey} className="mb-4 last:mb-0">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2cb7c9] mb-2 border-b border-[#2cb7c9]/10 pb-1">
                                        {groupKey}
                                    </h4>
                                    <ul>
                                        {products.map((productName) => (
                                            <li key={productName} className="flex items-center justify-between py-2.5">
                                                <span className="pr-3 text-sm font-bold uppercase tracking-wide text-white">
                                                    {productName}
                                                </span>
                                                <button 
                                                    onClick={() => onRemove(productName)} 
                                                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-[#b83f55] transition-all hover:bg-[#e76f7a]/10 hover:scale-105"
                                                >
                                                    x
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                    <button onClick={onSendWhatsApp} disabled={selectedProducts.length === 0} className="mt-6 w-full rounded-xl bg-[#f2c94c] py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black shadow-md transition active:scale-95 hover:bg-[#e0b83a] disabled:cursor-not-allowed disabled:opacity-50">
                        Enviar WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}