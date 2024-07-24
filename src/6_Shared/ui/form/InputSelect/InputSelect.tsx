// 1 инпут - 1 структура данных (либо массив, либо объект, либо примитивы ...)

import { Select, SelectProps } from "antd"
import cn from 'classnames'
import './BaseInputSelect.css'

type ISelectProps<ValueType extends string | number> = {
    label: string
} & Omit<SelectProps<ValueType>, 'placeholder' | 'mode'>

export function InputSelect<ValueType extends string | number>(
    { children, className, label = "", ...baseInputSelectProps }: ISelectProps<ValueType>
) {
    return (
        <div className={cn("custom_field_wrapper", className)}>
            <Select
                size="large"
                allowClear
                showSearch
                showAction={['focus']}
                getPopupContainer={trigger => trigger.parentNode}
                filterOption={false}
                {...baseInputSelectProps}
            >
                {children}
            </Select>
            {label && <label className="field-label">{label}</label>}
        </div >

    )
}