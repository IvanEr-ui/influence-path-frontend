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
        <Button
            type="primary"
            className={cn("custom_button", className, variant)}
            {...baseInputSelectProps}
        >
            {children}
        </Button>
    )
}