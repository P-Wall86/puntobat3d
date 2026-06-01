type WhatsAppButtonProps = {
    count: number;
    onClick: () => void;
};

export default function WhatsAppButton({
    count,
    onClick,
}: WhatsAppButtonProps) {
    const hasProducts = count > 0;

    return (
        <button
            onClick={onClick}
            className="fixed bottom-5 right-5 z-50"
        >
            <img
                src={
                    hasProducts
                        ? "/images/logo/Cart2.webp"
                        : "/images/logo/Cart1.webp"
                }
                alt="Consulta WhatsApp"
                className="w-20 h-auto"
            />

            {hasProducts && (
                <span
                    className="
            absolute
            -top-1
            -right-1
            min-w-5
            h-5
            px-1
            rounded-full
            flex
            items-center
            justify-center
            text-xs
            font-bold
            bg-pink-300
            text-slate-900">
                    {count}
                </span>
            )}
        </button>
    );
}