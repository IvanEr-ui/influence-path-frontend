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
            <div style={{ marginTop: "100px" }}>
                {banner}
                {ambProgramSelection}
                {ambProgramsList}
                {footer}
            </div >
        </>
    )
}

export default MainLayout