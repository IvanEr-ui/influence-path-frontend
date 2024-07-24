import { Link } from 'react-router-dom'


import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface ICard {
    id: number,
    img: string,
    title: string,
    description: string,
    link: string
    icon: string,
}

export const Card = ({ item }: { item: ICard }) => {
    return (
        <SwiperSlide  >
            <Link to={item.link}>
                <div>
                    <img src="#" />
                </div>
                <div >
                    <div><img src={item.icon} /><p>{item.title}</p></div>
                    <p >{item.description}</p>
                </div>
            </Link>
        </SwiperSlide>
    )
}