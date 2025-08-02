"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal-for-black";

export const UntitledLogo = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <div {...props} className={cx("flex items-center justify-start overflow-visible h-7 w-max sm:h-8", props.className)}>
            {/* Minimal logo */}
            <UntitledLogoMinimal className="aspect-square h-7 w-8 shrink-0 sm:h-9 sm:w-10" />

            {/* Gap that adjusts to the height of the container */}
            {/* <div className="aspect-[0.3] h-full" /> */}

            {/* Logomark */}
            <img
                src="/main-for-black.svg" // Adjust this path to match your public folder or hosting location
                alt="Unique Leverage"
                className="h-7 w-auto shrink-0 sm:h-8"
                draggable={false}
            />
        </div>
    );
};
