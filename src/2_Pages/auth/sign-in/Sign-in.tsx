import { LayoutForm } from "@shared/ui/layouts/form-page-layout"
import { Header } from "@widgets/index"
import { FooterForm, HeaderForm, InfoSection, SignInForm } from '@features/auth'

import ROUTES from "@shared/consts/routes"

export const SingInPage = () => {
    return (
        <LayoutForm
            header={<Header />}
            formHeader={
                <HeaderForm
                    accountText="Еще нет аккаунта?"
                    signTextButton="Создать аккаунт"
                    signPATH={ROUTES.SIGN_UP}
                />
            }
            formMain={<SignInForm />}
            formFooter={<FooterForm />}
            infoSection={<InfoSection />}
        />
    )
}