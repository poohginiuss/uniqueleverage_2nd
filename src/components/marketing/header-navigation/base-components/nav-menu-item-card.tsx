"use client";

import { type ReactNode } from "react";

interface ImageCardProps {
    href?: string;
    imgSrc?: string;
    title: string;
    subtitle: string;
    actionsContent?: ReactNode;
}

export const ImageCardHorizontal = (props: ImageCardProps) => {
    return (
        <a
            href={props.href}
            className="flex flex-col gap-4 rounded-lg px-4 py-3 outline-focus-ring transition hover:bg-primary_hover focus-visible:outline-2 sm:flex-row md:gap-3 md:px-3"
        >
            {props.imgSrc ? (
                <img src={props.imgSrc} alt={props.title} className="h-50 w-full shrink-0 rounded-md bg-secondary object-cover sm:h-22 sm:w-36" />
            ) : (
                <div className="h-50 w-full shrink-0 rounded-md bg-secondary sm:h-22 sm:w-36" />
            )}

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-2 overflow-hidden text-md font-semibold text-ellipsis text-primary">{props.title}</h4>
                    <p className="line-clamp-2 text-sm text-ellipsis text-tertiary">{props.subtitle}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

export const ImageCardVertical = (props: ImageCardProps) => {
    return (
        <a
            href={props.href}
            className="flex w-full flex-col gap-4 rounded-lg px-4 py-3 outline-focus-ring transition hover:bg-primary_hover focus-visible:outline-2 sm:max-w-xs"
        >
            {props.imgSrc ? (
                <img src={props.imgSrc} alt={props.title} className="h-50 w-full shrink-0 rounded-md bg-secondary object-cover sm:h-34 sm:max-w-60" />
            ) : (
                <div className="h-50 w-full shrink-0 rounded-md bg-secondary sm:h-34 sm:max-w-60" />
            )}

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-1 overflow-hidden text-md font-semibold text-ellipsis text-primary">{props.title}</h4>
                    <p className="line-clamp-2 text-sm text-ellipsis text-tertiary">{props.subtitle}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

interface VideoCardProps {
    href?: string;
    imgSrc: string;
    title: string;
    description: string;
    actionsContent?: ReactNode;
}

export const VideoCardHorizontal = (props: VideoCardProps) => {
    return (
        <a
            href={props.href}
            className="flex flex-col gap-4 rounded-lg px-4 py-3 outline-focus-ring transition hover:bg-primary_hover focus-visible:outline-2 sm:flex-row md:gap-3 md:px-3"
        >
            <div className="relative h-34 w-60 shrink-0 overflow-hidden rounded-md sm:h-26 sm:w-44">
                <img alt={props.title} src={props.imgSrc} className="size-full object-cover" />

                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-5 text-fg-white">
                        <path
                            d="M2.19995 2.86327C2.19995 1.61155 3.57248 0.844595 4.63851 1.50061L12.9856 6.63731C14.0009 7.26209 14.0009 8.73784 12.9856 9.36262L4.63851 14.4993C3.57247 15.1553 2.19995 14.3884 2.19995 13.1367V2.86327Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-2 overflow-hidden text-md font-semibold text-ellipsis text-primary">{props.title}</h4>
                    <p className="line-clamp-2 text-sm text-ellipsis text-tertiary">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

export const VideoCardVertical = (props: VideoCardProps) => {
    return (
        <a
            href={props.href}
            className="flex flex-col gap-4 rounded-lg px-4 py-3 outline-focus-ring transition hover:bg-primary_hover focus-visible:outline-2 sm:max-w-xs"
        >
            <img alt={props.title} src={props.imgSrc} className="h-34 w-60 shrink-0 rounded-md object-cover" />

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-1 overflow-hidden text-md font-semibold text-ellipsis text-primary">{props.title}</h4>
                    <p className="line-clamp-2 text-sm text-ellipsis text-tertiary">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

interface FeatureCardProps {
    href?: string;
    imgSrc: string;
    title: string;
    description: string;
    actionsContent?: ReactNode;
}

export const FeatureCardHorizontal = (props: FeatureCardProps) => {
    return (
        <a
            href={props.href}
            className="flex flex-col gap-4 rounded-lg px-4 py-3 outline-focus-ring transition hover:bg-primary_hover focus-visible:outline-2 sm:flex-row"
        >
            <img alt={props.title} src={props.imgSrc} className="h-50 shrink-0 rounded-md object-cover sm:h-26 sm:w-44" />

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-2 overflow-hidden text-md font-semibold text-ellipsis text-primary">{props.title}</h4>
                    <p className="line-clamp-2 text-sm text-ellipsis text-tertiary">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

export const FeatureCardVertical = (props: FeatureCardProps) => {
    return (
        <a href={props.href} className="flex w-full flex-col gap-4 rounded-lg p-3 outline-focus-ring transition hover:bg-primary_hover focus-visible:outline-2">
            <img alt={props.title} src={props.imgSrc} className="h-50 shrink-0 rounded-md object-cover sm:h-40" />

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-1 overflow-hidden text-md font-semibold text-ellipsis text-primary">{props.title}</h4>
                    <p className="line-clamp-2 text-sm text-wrap text-ellipsis text-tertiary">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};
