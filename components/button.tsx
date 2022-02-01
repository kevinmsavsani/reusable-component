import React from "react";
import clsx from "clsx";
import HeadlessButton, { HeadlessButtonProps } from "./headless-button";

export interface ButtonProps extends Omit<HeadlessButtonProps, "style"> {
        sizing?: "xl" | "md" | "lg" | "sm";
        variant?: "primary" | "secondary" | "tertiary";
}

const Button = React.forwardRef(
        (props: ButtonProps,
                ref: React.ForwardedRef<HTMLButtonElement>) : JSX.Element => {
                        const {sizing="lg", variant="primary", ...rest} = props;
                return (
                        <HeadlessButton
                        className={
                                clsx([
                                        "outline-none focus:ring-4 hover:ring-4 focus:ring-indigo-400 rounded-md",
                                        sizing === "xl" && "px-4 py-4 text-3xl",
                                        sizing === "lg" && "px-3 py-3 text-2xl",
                                        sizing === "md" && "px-2 py-2 text-xl",
                                        sizing === "sm" && "px-1 py-1 text-base",
                                        variant === "primary" && "bg-indigo-500 text-white/95 border",
                                        variant === "secondary" && "text-zinc-600 border",
                                        variant === "tertiary" && " text-zinc-600",
                                ])
                        }
                        ref={ref}
                        {...rest}></HeadlessButton>
                )
                }
);

export default Button;
