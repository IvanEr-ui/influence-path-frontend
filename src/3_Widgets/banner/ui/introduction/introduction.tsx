import { UiButton } from '@shared/ui/form/button/Button'
import { Link } from 'react-router-dom'

import './introduction.css'

import ROUTES from '@shared/consts/routes'

export const Introduction = () => {
    return (
        <div className="introduction">
            <h2 className="heading">Любой может внести<br />
                свой вклад в развитие<br />
                проектов, зарабатывать,<br />
                участвуя в<br />
                <span style={{ color: "rgb(252, 104, 250, 0.8)" }}>
                    Амбассадорских<br />
                    Программах
                </span>
            </h2>
            <p className="subheading">Участвуйте в амбассадорских программах и легко организуйте свою<br />
                собственную амбассадорскую программу с нашей <span style={{ color: "rgb(252, 104, 250, 0.8)" }}>инновационной <br />
                    платформой.</span>
            </p>
            <div className="cta-buttons">
                <Link to={ROUTES.SIGN_IN}>
                    <UiButton
                        variant='primary'
                        style={styleButton}>Участвовать</UiButton>
                </Link>
                <Link to={ROUTES.SIGN_IN}>
                    <UiButton
                        variant='primary'
                        style={styleButton}>Запустить</UiButton>
                </Link>
            </div>
        </div>
    )
}

const styleButton = {
    backgroundColor: "black",
    width: "180px",
    height: "50px",
    fontSize: "15px",
    fontWeight: "bold",
    border: "1px solid rgb(252, 104, 250, 0.8)"
}