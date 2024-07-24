import './header.css'
import Logo from '@shared/assets/icons/svg/Logo.svg'
import ROUTES from '@shared/consts/routes'

import { Link } from 'react-router-dom'
import { HeaderMenu } from '@features/header_menu'


export const Header = () => {
    return (
        <header>
            <div className="container">
                <Link to={ROUTES.MAIN}>
                    <img src={Logo} className="logo" />
                </Link>
                <div className="line"></div>
                <HeaderMenu />
            </div>
        </header>
    )
}