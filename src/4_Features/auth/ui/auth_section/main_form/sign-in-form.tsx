import { InputText, } from '@shared/ui/form/InputText/InputText'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import './mainSignForm.css'
import { UiButton } from '@shared/ui/form/button/Button';
import { Link } from 'react-router-dom';

import ROUTES from '@shared/consts/routes';

export function SignInForm() {
    return <>
        <div className="sign_form">
            <form>
                <h1>Войти</h1>
                <div style={{ marginTop: "32px" }}>
                    <InputText
                        label='Логин'
                        placeholder='Введите логин'
                        style={{ backgroundColor: "black", color: "white", height: "44px" }} />
                </div>
                <div style={{ marginTop: "32px" }}>
                    <InputText.Password

                        label='Пароль'
                        labelRigth='Забыли пароль?'
                        iconRender={(visible) => (visible ? <EyeTwoTone style={{ color: "white" }} /> : <EyeInvisibleOutlined style={{ color: "white" }} />)}
                        style={{ backgroundColor: "black", color: "white", height: "44px" }} />
                </div>
                <div style={{ marginTop: "32px" }}>

                    <UiButton
                        variant='primary'
                        style={{
                            backgroundColor: "#D9D9D9",
                            fontSize: "20px",
                            color: "black",
                            fontWeight: "bold",
                            width: "412px",
                            height: "44px"
                        }}
                    >
                        Войти
                    </UiButton>
                </div>

            </form>

        </div >
    </>
}