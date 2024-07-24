import styles from './header_menu.module.css'

import { UiButton } from '@shared/ui/form/button/Button'
import { Link } from 'react-router-dom'
import AuthLogo from '../../../../public/AuthLogin.svg'

import ROUTES from '@shared/consts/routes'

export const HeaderMenu = () => {
    return (
        <div className={styles.header_menu}>
            <Link to={ROUTES.AMBASSADOR_PROGRAMS}><p>Амбассадорские <br />программы</p></Link>
            <Link to={ROUTES.PARTNERS}><p>Партнеры</p></Link>
            <Link to={ROUTES.SIGN_IN}>
                <UiButton
                    iconPosition={"start"}
                    style={
                        {
                            backgroundColor: "black",
                            width: "100px",
                            height: "50px",
                            fontSize: "10px",
                            fontWeight: "lighter",
                            color: "white"
                        }
                    }
                >
                    <img src={AuthLogo} alt="" />
                    Войти
                </UiButton>
            </Link>
        </div >
    )
}