import './formLayout.css'

interface IForm {
    header: React.ReactNode,
    formHeader?: React.ReactNode,
    formMain: React.ReactNode,
    formFooter?: React.ReactNode,
    infoSection?: React.ReactNode
}

export function LayoutForm({ header, formHeader, formMain, formFooter, infoSection }: IForm) {
    return <>
        {header}
        <div className='form_info_section'>
            <div className='form_section'>
                {formHeader && formHeader}
                {formMain}
                {formFooter && formFooter}
            </div>
            <div className='info_section'>
                {infoSection}
            </div>
        </div>

    </>
}