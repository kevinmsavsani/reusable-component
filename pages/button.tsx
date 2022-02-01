import type {NextPage} from "next";
import React, {useEffect, useRef} from "react";
import Button from "../components/button";

const sizing: React.ComponentProps<typeof Button>["sizing"][] = [
        "xl",
        "lg",
        "md",
        "sm"
];

const variants: React.ComponentProps<typeof Button>["variant"][] = [
        "primary",
        "secondary",
        "tertiary"
];

const Home: NextPage = () => {
        const buttonRef = useRef<HTMLButtonElement>(null);

        return (
                <div className="min-h-screen flex flex-col justify-start py-12 px-12">
                        <div className="container mx-auto grid grid-cols-3 grid-rows-4 gap-x-6">
                                {sizing.map((size)=> (
                                        <React.Fragment key={size}>
                                                {variants.map((variant)=> (
                                                        <div key={`${size}-${variant}`}
                                                className="flex flex-col items-center justify-start px-2 py-2">
                                                        <Button variant={variant} sizing={size}>
                                                                Button
                                                        </Button>
                                                </div>
                                                ))}
                                        </React.Fragment>
                                ))}
                        </div>
                </div>
        )
}

export default Home;