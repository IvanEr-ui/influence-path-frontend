// 1 инпут - 1 структура данных (либо массив, либо объект, либо примитивы ...)

import { Button, ButtonProps } from "antd"
import cn from 'classnames'
import './BaseButton.css'

type IButtonProps = {
    className?: string,
    variant?: "primary" | "secondory" | "outlined",
} & ButtonProps

export function UiButton(
    { children, className, variant, ...baseInputSelectProps }: IButtonProps
) {
    return (
        <div className={cn("custom_button", className, variant)}>
            <Button
                type="primary"
                {...baseInputSelectProps}
            >
                {children}
            </Button>
        </div >

    )
}