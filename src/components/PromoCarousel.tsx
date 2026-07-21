'use client';

import { useRef, useState, useEffect } from "react";

export default function PromoCarousel() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        updateScroll();
    }, []);

    function scroll(direction: "left" | "right") {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction === "right" ? 400 : -400,
            behavior: "smooth",
        });
    }

    function updateScroll() {
        if (!sliderRef.current) return;

        const el = sliderRef.current;

        setCanScrollLeft(el.scrollLeft > 0);

        setCanScrollRight(
            el.scrollLeft < el.scrollWidth - el.clientWidth - 5
        );
    }

    return (
        <section className="
            max-w-6xl
            mx-auto
            px-4
            pt-4
            pb-8
            relative">

            <button
                onClick={() => scroll("left")}
                className={`
                ${!canScrollLeft ? "hidden" : "hidden lg:flex"}
                absolute
                left-2
                top-1/2
                -translate-y-1/2
                z-10
                w-10
                h-10
                rounded-full
                bg-[#1E293B]
                text-white
                items-center
                justify-center
                hover:bg-[#2cb7c9]`}>
                ←</button>

            <div
                onScroll={updateScroll}
                ref={sliderRef}
                className="
                    flex
                    gap-6
                    overflow-x-auto
                    snap-x
                    snap-mandatory
                    scrollbar-hide">

                <img
                    src="/images/banners/mates.webp"
                    className="
                        min-w-[85%]
                        lg:min-w-[45%]
                        snap-center
                        rounded-2xl
                        shadow-lg
                        object-contain
                        bg-white/5
                        p-2"/>

                <img
                    src="/images/banners/cockades.webp"
                    className="
                        min-w-[85%]
                        lg:min-w-[45%]
                        snap-center
                        rounded-2xl
                        shadow-lg
                        object-contain
                        bg-white/5
                        p-2"/>

                <img
                    src="/images/banners/aboutus.webp"
                    className="
                        min-w-[85%]
                        lg:min-w-[45%]
                        snap-center
                        rounded-2xl
                        shadow-lg
                        object-contain
                        bg-white/5
                        p-2"/>
            </div>

            <button
                onClick={() => scroll("right")}
                className={`
${!canScrollRight ? "hidden" : "hidden lg:flex"}
absolute
right-2
top-1/2
-translate-y-1/2
z-10
w-10
h-10
rounded-full
bg-[#013b7b]/70
backdrop-blur-sm
border
border-[#2cb7c9]/30
text-white
items-center
justify-center
hover:bg-[#2cb7c9]
transition-all
hover:scale-110
`}>
                →</button>
        </section>
    );
}