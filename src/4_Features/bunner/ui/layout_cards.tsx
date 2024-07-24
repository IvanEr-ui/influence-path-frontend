import { ReactNode } from "react"
import { Swiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import './slider.css'

export const LayoutCards = ({ children }: { children: ReactNode }) => {
    const params = {
        effect: 'coverflow',
        spaceBetween: 64,
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
        modules: [EffectCoverflow, Pagination],
        className: "card_slider"
    }

    return (
        <Swiper
            navigation={true} modules={[Pagination]}
        >
            {children}
        </Swiper >
    )
}