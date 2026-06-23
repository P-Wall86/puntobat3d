'use client';

import { useEffect, useState } from "react";

type Props = {
    activeCart: boolean;
};

export default function BackToTop({ activeCart }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed
                bottom-[85px]
                right-7
                lg:bottom-[110px]
                lg:right-9.5
                z-[1000]
                w-10
                h-10
                sm:w-[45px]
                sm:h-[45px]
                rounded-full
                flex
                items-center
                justify-center
                text-lg
                sm:text-xl
                shadow-lg
                transition
                ${
                    activeCart
                        ? "bg-[#F4A896] text-[#0F172A] hover:bg-[#E29280]"
                        : "bg-green-600 text-white hover:bg-green-500"
                }
            `}
        >
            ↑
        </button>
    );
}