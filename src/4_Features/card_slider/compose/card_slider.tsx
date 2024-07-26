import { useEffect, useState } from 'react';
import { LayoutCards } from './../ui/layout_cards';
import { ICard } from '../model/types/index';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './card_slider.css'
import { SwiperSlide } from 'swiper/react';


const slider_card: ICard[] = [
    {
        id: 1,
        img: "img1",
        title: "title1",
        description: "description1",
        link: "https://swiperjs.com/demos/images/nature-1.jpg",
        icon: "icon1"
    },
    {
        id: 2,
        img: "img2",
        title: "title2",
        description: "description2",
        link: "https://swiperjs.com/demos/images/nature-2.jpg",
        icon: "icon2"
    },
    {
        id: 3,
        img: "img3",
        title: "title3",
        description: "description3",
        link: "https://swiperjs.com/demos/images/nature-3.jpg",
        icon: "icon3"
    },
    {
        id: 4,
        img: "img4",
        title: "title4",
        description: "description4",
        link: "https://swiperjs.com/demos/images/nature-4.jpg",
        icon: "icon4"
    },
];

export const CardSlider = () => {
    const [cards, setCards] = useState<ICard[]>();

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setCards([...slider_card]);
        }, 500);
    }, []);

    return (
        <div className="card-slider">
            <LayoutCards>
                {cards && cards.map((card) => (
                    <SwiperSlide>
                        <img src={card.link} alt={card.title} />
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </LayoutCards>
        </div>
    );
}