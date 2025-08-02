"use client";

import type { ReactNode } from "react";
import { CheckCircle } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};
export const PricingTierCardDualAction = (props: {
    title: string;
    description?: string;
    contentTitle: string;
    contentDescription: ReactNode;
    badge?: string;
    price: string;
    features: string[];
    className?: string;
}) => (
    <div key={props.title} className="flex flex-col overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
        <div className="flex flex-col p-6 pb-8 md:p-8">
            <div className="flex justify-between">
                <span className="text-lg font-semibold text-tertiary">{props.title}</span>
                {props.badge && (
                    <Badge size="lg" type="pill-color" color="brand">
                        {props.badge}
                    </Badge>
                )}
            </div>

            <div className="mt-4 flex items-end gap-1">
                <p className="text-display-lg font-semibold text-primary md:text-display-xl">{props.price}</p>
                <span className="pb-2 text-md font-medium text-tertiary">per month</span>
            </div>

            <p className="mt-4 text-md text-tertiary">{props.description}</p>

            <div className="mt-8 flex flex-col gap-3 self-stretch">
                <Button size="xl">Get started</Button>
                <Button color="secondary" size="xl">
                    Chat to sales
                </Button>
            </div>
        </div>

        <div className="flex flex-col gap-6 px-6 pt-8 pb-10 ring-1 ring-secondary md:px-8">
            <div>
                <p className="text-md font-semibold text-primary uppercase">{props.contentTitle}</p>
                <p className="mt-1 text-md text-tertiary">{props.contentDescription}</p>
            </div>
            <ul className="flex flex-col gap-4">
                {props.features.map((feat) => (
                    <CheckItemText key={feat} iconStyle="outlined" color="primary" text={feat} />
                ))}
            </ul>
        </div>
    </div>
);
