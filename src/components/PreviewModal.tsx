'use client';

import { useEffect } from "react";

type PreviewModalProps = {
    selectedProducts: string[];
    onClose: () => void;
    onRemove: (productName: string) => void;
    onSendWhatsApp: () => void;
};

export default function PreviewModal({
    selectedProducts,
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

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="
    relative
    w-[82vw]
    max-w-md
    rounded-2xl
    bg-[#1E293B]
    border
    border-[#2cb7c9]/20
    shadow-2xl
    overflow-hidden
"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="
        absolute
        top-2
        right-2
        z-20
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        border
        border-slate-700/50
        bg-slate-900/80
        text-sm
        text-slate-400
        transition-colors
        hover:text-[#2cb7c9]
    "
                >
                    ×
                </button>

                <div className="
    p-3
    sm:p-5
    md:p-8
">

                    <h3 className="
mb-6
text-center
text-base
sm:text-lg
md:text-2xl
font-bold
uppercase
tracking-wide
text-white
">
                        Tu consulta
                    </h3>

                    {selectedProducts.length === 0 ? (
                        <p className="py-6 text-center text-sm sm:text-base text-slate-300">
                            Seleccioná un producto.
                        </p>
                    ) : (
                        <ul className="max-h-72 overflow-y-auto overflow-x-hidden">
                            {selectedProducts.map((product) => (
                                <li
                                    key={product}
                                    className="flex items-center justify-between border-b border-[#2cb7c9]/20 py-3"
                                >
                                    <span className="pr-3 text-sm font-medium uppercase text-slate-200">
                                        {product}
                                    </span>

                                    <button
                                        onClick={() => onRemove(product)}
                                        className="text-xl text-[#e76f7a] transition hover:scale-110 hover:text-[#d45f6a]"
                                    >
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    <button
                        onClick={onSendWhatsApp}
                        disabled={selectedProducts.length === 0}
                        className="
                            mt-6
                            w-full
                            bg-[#f2c94c]
                            py-4
                            text-xs
                            font-[700]
                            uppercase
                            tracking-wider
                            text-black
                            transition
                            hover:bg-[#e0b83a]
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            rounded-lg">
                        Enviar WhatsApp
                    </button>

                </div>
            </div>
        </div>
    );
}