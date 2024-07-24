// 1 инпут - 1 структура данных (либо массив, либо объект, либо примитивы ...)

import { Input, InputProps } from "antd"
import cn from 'classnames'
import './BaseInputText.css'

import { Link } from "react-router-dom"
import ROUTES from "@shared/consts/routes"
import { ReactNode } from "react"

export interface IInputTextProps extends InputProps {
    label?: string
    labelRigth?: string
    placeholder?: string,
    iconRender?: (visible: boolean) => React.ReactNode
}

export function InputText(
    { children, className, label = "", labelRigth = "", placeholder = "", ...baseInputSelectProps }: IInputTextProps
) {
    return (
        <div className={cn("input_text custom_field_wrapper", className)}>
            <div className="field-label">
                {label && <label className="label">{label}</label>}
                {labelRigth &&
                    <label className="label-rigth">{labelRigth}</label>
                }
            </div>
            <Input
                size="large"
                allowClear
                placeholder={placeholder}
                {...baseInputSelectProps}
            >
                {children}
            </Input>
        </div >

    )
}

type IInputTextPasswordProps = {
    iconRender?: (visible: boolean) => ReactNode
} & IInputTextProps


InputText.Password = function ({ children,
    className,
    label = "",
    labelRigth = "",
    placeholder = "",
    iconRender,
    ...baseInputSelectProps
}: IInputTextPasswordProps) {
    return (
        <div className={cn("input_text custom_field_wrapper", className)}>
            <div className="field-label">
                {label && <label className="label">{label}</label>}
                {labelRigth &&
                    <Link to={ROUTES.PASSWORD_RESET}>
                        <label className="label-rigth">{labelRigth}</label>
                    </Link>
                }
            </div>
            <Input.Password
                size="large"
                allowClear
                placeholder={placeholder}
                iconRender={iconRender}
                {...baseInputSelectProps}
            >
                {children}
            </Input.Password>
        </div >
    )
}