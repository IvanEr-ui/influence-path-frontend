import { Introduction, CardSlider } from '@features/bunner/index'
import './banner.css'

export const Banner = () => {
    return (
        <div className="banner">
            <Introduction />
            <CardSlider />
        </div>
    )
}