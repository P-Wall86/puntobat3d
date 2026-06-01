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
                className="relative w-full max-w-sm rounded-md bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-2xl font-light text-slate-400 transition hover:text-slate-900"
                >
                    ×
                </button>

                <div className="p-6">

                    <h3 className="mb-6 text-center text-lg font-semibold uppercase tracking-[0.15em] text-slate-900">
                        Tu consulta
                    </h3>

                    {selectedProducts.length === 0 ? (
                        <p className="py-6 text-center text-sm text-slate-500">
                            Seleccioná un producto.
                        </p>
                    ) : (
                        <ul className="max-h-72 overflow-y-auto">
                            {selectedProducts.map((product) => (
                                <li
                                    key={product}
                                    className="flex items-center justify-between border-b border-slate-200 py-3"
                                >
                                    <span className="pr-3 text-sm text-slate-700">
                                        {product}
                                    </span>

                                    <button
                                        onClick={() => onRemove(product)}
                                        className="text-xl text-red-500 transition hover:scale-110"
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
                            bg-cyan-500
                            py-4
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-white
                            transition
                            hover:bg-[#0F172A]
                            disabled:cursor-not-allowed
                            disabled:opacity-50">
                        Enviar WhatsApp
                    </button>

                </div>
            </div>
        </div>
    );
}