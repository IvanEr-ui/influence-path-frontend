import { UiButton } from '@shared/ui/form/button/Button';
import { Link } from 'react-router-dom';

import './headerForm.css'

interface IHeaderForm {
    accountText: string,
    signTextButton: string,
    signPATH: string
}

export function HeaderForm({ accountText, signTextButton, signPATH }: IHeaderForm) {
    return <>
        <div className='header-form'>
            <span className='account-text'>{accountText}</span>
            <Link to={signPATH}>
                <UiButton
                    variant='primary'
                    style={{ fontSize: "10px", fontWeight: "bold", width: "98px", backgroundColor: "#444343" }}
                >
                    {signTextButton}
                </UiButton>
            </Link>
        </div>
    </>
}