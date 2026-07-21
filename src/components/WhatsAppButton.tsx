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
        <button onClick={onClick} className="fixed bottom-5 right-5 z-50 transition-transform hover:scale-110 active:scale-95">
            <img src={hasProducts ? "/images/logo/Cart2.webp" : "/images/logo/Cart1.webp"} alt="Consulta WhatsApp" className="w-14 sm:w-16 lg:w-20 h-auto"/>
            {hasProducts && (
                <span className="absolute -top-1 -right-1 px-1 rounded-full min-w-4 h-4 sm:h-5 sm:min-w-5 sm:text-xs text-[10px] font-extrabold flex items-center justify-center font-bold bg-[#F4A896] text-slate-900">
                    {count}
                </span>
            )}
        </button>
    );
}