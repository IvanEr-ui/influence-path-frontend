import { LayoutForm } from "@shared/ui/layouts/form-page-layout"

import { Header } from "@widgets/index"
import { FooterForm, HeaderForm, InfoSection, SignUpForm } from '@features/auth'

import ROUTES from "@shared/consts/routes"

export const SingUpPage = () => {
    return (
        <LayoutForm
            header={<Header />}
            formHeader={
                <HeaderForm
                    accountText="Уже есть аккаунт?"
                    signTextButton="Войти"
                    signPATH={ROUTES.SIGN_IN}
                />
            }
            formMain={<SignUpForm />}
            formFooter={<FooterForm />}
            infoSection={<InfoSection />}
        />
    )
}