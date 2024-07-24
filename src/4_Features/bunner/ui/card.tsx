import { Link } from 'react-router-dom'


import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css'

interface ICard {
    id: number,
    img: string,
    title: string,
    description: string,
    link: string
    icon: string,
}

export const Card = ({ card }: { card: ICard }) => {
    return (
        <SwiperSlide>
            {/* <Link to={card.link}>
                <div>
                    <img src="#" />
                </div>
                <div >
                    <div><img src={card.icon} /><p>{card.title}</p></div>
                    <p >{card.description}</p>
                </div>
            </Link> */}
            <p style={{ color: "black" }}>{card.title}</p>
        </SwiperSlide>
    )
}