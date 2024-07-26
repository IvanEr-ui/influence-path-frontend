import { CardSlider } from '@features/card_slider/index'
import { Introduction } from './ui/introduction/introduction'
import './banner.css'

export const Banner = () => {
    return (
        <div className="banner">
            <Introduction />
            <CardSlider />
        </div>
    )
}