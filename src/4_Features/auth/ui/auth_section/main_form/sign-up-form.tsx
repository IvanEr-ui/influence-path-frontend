import React, { useState } from 'react';
import { InputText, } from '@shared/ui/form/InputText/InputText'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import './mainSignForm.css'
import { UiButton } from '@shared/ui/form/button/Button';

import { api } from '@shared/api/api-instance';
import { ApiSignUp } from '@shared/api/api';

interface IFormUser {
    email: string,
    password: string,
    duplicate: string
}

const SignUp: IFormUser = {
    email: "",
    password: "",
    duplicate: ""
}

export function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [formState, setFormState] = useState(SignUp)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setFormState((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            ApiSignUp({
                "email": formState.email,
                "password": formState.password
            }).then((data) => {
                setIsLoading(false)
                console.log(data)
            })
        } catch {
            setIsLoading(false)
            console.log("Ошибка ")
        }

    }


    return <>
        <div className="sign_form">
            <form onSubmit={onSubmit}>
                <h1>Создать аккаунт</h1>
                <div style={{ marginTop: "32px" }}>
                    <InputText
                        label='Адресс электронной почты'
                        placeholder='Введите почту'
                        name='email'
                        required={true}
                        value={formState.email}
                        onChange={onChange}
                        style={{ backgroundColor: "black", color: "white", height: "44px" }} />
                </div>
                <div style={{ marginTop: "32px" }}>
                    <InputText.Password
                        label='Пароль'
                        labelRigth='Забыли пароль?'
                        name='password'
                        required={true}
                        value={formState.password}
                        onChange={onChange}
                        iconRender={(visible) => (visible ? <EyeTwoTone style={{ color: "white" }} /> : <EyeInvisibleOutlined style={{ color: "white" }} />)}
                        style={{ backgroundColor: "black", color: "white", height: "44px" }} />
                </div>
                <div style={{ marginTop: "32px" }}>
                    <InputText.Password
                        label='Повторите пароль'
                        name='duplicate'
                        required={true}
                        value={formState.duplicate}
                        onChange={onChange}
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
                        htmlType="submit"
                    >
                        Создать аккаунт
                    </UiButton>
                </div>

            </form>
        </div >
        {
            isLoading && <div>...isLoagin</div>
        }
    </>
}