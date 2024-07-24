import { UiButton } from '@shared/ui/form/button/Button';
import { Link } from 'react-router-dom';
import './footerForm.css';
import { Discrod, Google, Telegram } from '@shared/assets/icons/svg/index'

interface IFooterForm {
    authDiscordPATH?: string,
    authGooglePATH?: string,
    authTelegramPATH?: string,
}

export function FooterForm({ authDiscordPATH = '/', authGooglePATH = '/', authTelegramPATH = '/' }: IFooterForm) {
    return (
        <>
            <div className='footer-form'>
                <div className='continue-with'>
                    <div className='left_line'></div>
                    <span className='between_line_text'>или продолжить с помощью</span>
                    <div className='rigth_line'></div>
                </div>
                <div className='buttons-auth'>
                    <Link to={authDiscordPATH}>
                        <UiButton variant='primary' style={{ fontSize: "10px", fontWeight: "bold", width: "93px" }}>
                            <img src={Discrod} alt="Discord" />
                            Discord
                        </UiButton>
                    </Link>
                    <Link to={authGooglePATH}>
                        <UiButton variant='primary' style={{ fontSize: "10px", fontWeight: "bold", width: "93px" }}>
                            <img src={Google} alt="Google" />
                            Google
                        </UiButton>
                    </Link>
                    <Link to={authTelegramPATH}>
                        <UiButton variant='primary' style={{ fontSize: "10px", fontWeight: "bold", width: "93px" }}>
                            <img src={Telegram} alt="Telegram" />
                            Telegram
                        </UiButton>
                    </Link>
                </div>
                <div className='privacy-terms'>
                    <span>Политика конфиденциальности</span>
                    <span>Условия использования</span>
                </div>
            </div>
        </>
    );
}