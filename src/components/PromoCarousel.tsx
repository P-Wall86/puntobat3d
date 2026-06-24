'use client';

import { useRef } from "react";

export default function PromoCarousel() {
    const sliderRef = useRef<HTMLDivElement>(null);

    function scroll(direction: "left" | "right") {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction === "right" ? 400 : -400,
            behavior: "smooth",
        });
    }

    return (
        <section className="
            max-w-6xl
            mx-auto
            px-4
            py-8
            relative
        ">

            <button
                onClick={() => scroll("left")}
                className="
                    hidden
                    lg:flex
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
                    hover:bg-[#2cb7c9]
                "
            >
                ←
            </button>


            <div
                ref={sliderRef}
                className="
                    flex
                    gap-6
                    overflow-x-auto
                    snap-x
                    snap-mandatory
                    scrollbar-hide
                "
            >

                <img
                    src="/images/banners/mates.webp"
                    className="
                        min-w-[85%]
                        lg:min-w-[45%]
                        snap-center
                        rounded-2xl
                        object-contain
                    "
                />

                <img
                    src="/images/banners/cockades.webp"
                    className="
                        min-w-[85%]
                        lg:min-w-[45%]
                        snap-center
                        rounded-2xl
                        object-contain
                    "
                />

                <img
                    src="/images/banners/aboutus.webp"
                    className="
                        min-w-[85%]
                        lg:min-w-[45%]
                        snap-center
                        rounded-2xl
                        object-contain
                    "
                />

            </div>


            <button
                onClick={() => scroll("right")}
                className="
                    hidden
                    lg:flex
                    absolute
                    right-2
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
                    hover:bg-[#2cb7c9]
                "
            >
                →
            </button>

        </section>
    );
}