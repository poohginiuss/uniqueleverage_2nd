"use client";

import type { SVGProps } from "react";
import { useId } from "react";
import { cx } from "@/utils/cx";

export const UntitledLogoMinimal = (props: SVGProps<SVGSVGElement>) => {
    const id = useId();

    return (
        <img
            src="/mini-for-black.svg" // Adjust this path to match your public folder or hosting location
            alt="Logo"
            className={cx("size-10 origin-center scale-[1.0]", props.className)}
            draggable={false}
        />
    );
};
