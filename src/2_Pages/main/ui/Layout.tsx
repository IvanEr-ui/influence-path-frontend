import React from "react"


interface IMainLayout {
    header: React.ReactNode;
    banner: React.ReactNode;
    ambProgramSelection?: React.ReactNode;
    ambProgramsList?: React.ReactNode;
    footer?: React.ReactNode;
}

const MainLayout = ({ header, banner, ambProgramSelection, ambProgramsList, footer }: IMainLayout) => {
    return (
        <>
            {header}
            {banner}
            {ambProgramSelection}
            {ambProgramsList}
            {footer}
        </>
    )
}

export default MainLayout