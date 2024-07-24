import MainLayout from "./ui/Layout"
import { Header, Banner } from "@widgets/index"

export const MainPage = () => {
    return (
        <MainLayout
            header={<Header />}
            banner={<Banner />}
        />
    )
}