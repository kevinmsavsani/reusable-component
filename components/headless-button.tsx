import React from "react";

export interface HeadlessButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const HeadlessButton = React.forwardRef(
        (props: Readonly<HeadlessButtonProps>,
                ref: React.ForwardedRef<HTMLButtonElement>) : JSX.Element => {
                        return <button ref={ref} {...props} />;
                }
);

export default HeadlessButton;