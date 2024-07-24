import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { IInputTextProps, } from '@shared/ui/form/InputText/InputText'

export interface config extends IFormUser {
    name: keyof IFormUser; // Убедитесь, что name является ключом IFormUser
}

export interface IFormUser {
    email: string,
    password: string,
    duplicate: string
}

export const InputsSignUpUser: IInputTextProps[] = [
    {
        id: "1",
        label: 'Адресс электронной почты',
        placeholder: "Введите почту",
        name: 'email',
        required: true,
        style: { backgroundColor: "black", color: "white", height: "44px" },
    },
    {
        id: "2",
        label: 'Пароль',
        labelRigth: 'Забыли пароль?',
        name: 'password',
        required: true,
        style: { backgroundColor: "black", color: "white", height: "44px" },
        iconRender: (visible: boolean) => (visible ? <EyeTwoTone style={{ color: "white" }} /> : <EyeInvisibleOutlined style={{ color: "white" }} />)
    },
    {
        id: "3",
        label: 'Повторите пароль',
        name: 'duplicate',
        required: true,
        style: { backgroundColor: "black", color: "white", height: "44px" },
        minLength: 6,
        iconRender: (visible: boolean) => (visible ? <EyeTwoTone style={{ color: "white" }} /> : <EyeInvisibleOutlined style={{ color: "white" }} />)
    }
]

export const initialFormState: IFormUser = {
    email: "",
    password: "",
    duplicate: ""
} 