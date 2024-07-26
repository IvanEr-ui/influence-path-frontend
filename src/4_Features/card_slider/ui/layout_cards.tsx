import { ReactNode } from "react"
import { Swiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const LayoutCards = ({ children }: { children: ReactNode }) => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {children}
        </Swiper >
    )
}