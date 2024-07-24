//import styles from './card_slider.module.css'
import { Card } from '@features/bunner/ui/card';
import { LayoutCards } from '@features/bunner/ui/layout_cards';

const slider_item = [
    {
        id: 1,
        img: "img1",
        title: "title1",
        description: "description1",
        link: "link1",
        icon: "icon1"
    },
    {
        id: 2,
        img: "img2",
        title: "title2",
        description: "description2",
        link: "link2",
        icon: "icon2"
    },
    {
        id: 3,
        img: "img3",
        title: "title3",
        description: "description3",
        link: "link3",
        icon: "icon3"
    },
    {
        id: 4,
        img: "img4",
        title: "title4",
        description: "description4",
        link: "link4",
        icon: "icon4"
    },
]

export const CardSlider = () => {
    return (
        <LayoutCards>
            {slider_item.map((card) =>
                <Card key={card.id} card={card} />
            )}
        </LayoutCards>
    )
}