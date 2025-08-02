import React from "react";
import { Code01, PuzzlePiece02, Stars03, ZapFast } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeatureCard } from "./base-components/feature-card";

const features = [
    {
        icon: <Stars03 />,
        title: "Create your account",
        description: "Log in anytime to see which vehicles, audiences, and ads are converting — and what’s not worth spending on.",
    },
    {
        icon: <Code01 />,
        title: "Setup Meta Pixel",
        description: "We install your Meta Pixel and track every visit, click, form, and call — all the way down to the exact vehicle.",
    },
    {
        icon: <Code01 />,
        title: "Sync Inventory",
        description: "We connect to your existing feed (DealerCenter, vAuto, CarsForSale, etc.) and keep listings up-to-date.",
    },
    {
        icon: <PuzzlePiece02 />,
        title: "Launch Sponsored Ads",
        description: "We run Sponsored Ads that drive traffic straight to your live inventory, not a generic landing page or form.",
    },
    {
        icon: <ZapFast />,
        title: "Manage Marketplace",
        description: "Bring back people who visited your site or browsed listings on Cars.com, Autotrader, and Marketplace.",
    },
    {
        icon: <Code01 />,
        title: "Track Website Conversions",
        description: "We connect to your existing feed (DealerCenter, vAuto, CarsForSale, etc.) and keep listings up-to-date.",
    },
];

export const CTASimpleCentered = () => {
    return (
        <section className="bg-primary py-8 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <Badge color="brand" size="lg" type="pill-color">
                        How It Works
                    </Badge>
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-md">Get setup in 10 minutes or less</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Just connect your feed, set your settings, and let it run — your inventory updates itself from here. It’s really that simple.{" "}
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        {/* <Button color="secondary" size="xl">
                            Book demo
                        </Button> */}
                        <Button size="xl">Get Started</Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 py-24 md:grid-cols-2 md:py-12">
                    {features.map((item, i) => (
                        <FeatureCard key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
