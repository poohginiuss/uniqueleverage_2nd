"use client";

import { PricingTierCardDualAction } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const PricingSectionSimpleCards03 = () => {
    const plans = [
        {
            title: "Basic plan",
            price: "$10",
            description: "Basic features for up to 10 users.",
            badge: "Popular",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in <span className="text-md font-semibold">Starter</span> plus....
                </>
            ),
            features: [
                "Access to basic features",
                "Basic reporting and analytics",
                "Up to 10 individual users",
                "20 GB individual data",
                "Basic chat and email support",
            ],
        },
        {
            title: "Business plan",
            price: "$20",
            description: "Advanced features and reporting.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in <span className="text-md font-semibold">Basic</span> plus....
                </>
            ),
            features: [
                "Access to basic features",
                "Basic reporting and analytics",
                "Up to 10 individual users",
                "20 GB individual data",
                "Basic chat and email support",
            ],
        },
        {
            title: "Enterprise plan",
            price: "$40",
            description: "Unlimited features.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in <span className="text-md font-semibold">Business</span> plus....
                </>
            ),
            features: [
                "Access to basic features",
                "Basic reporting and analytics",
                "Up to 10 individual users",
                "20 GB individual data",
                "Basic chat and email support",
            ],
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Plans that fit your scale</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                    </p>
                </div>

                <div className="mt-12 grid w-full grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardDualAction key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};
