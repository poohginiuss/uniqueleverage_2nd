import { Fragment, useState } from "react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { PricingTierCardDualAction } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
 
export const PricingSection = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");
 
    const plans = [
        {
            title: "The Basic.",
            price: selectedPlan === "monthly" ? "$99" : "$89",
            description: "Our most popular plan",
            badge: "Popular",
            contentTitle: "1 License ",
            contentDescription: (
                <>
                    Perfect for 1 individual.
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
            title: "Go PRO.",
            price: selectedPlan === "monthly" ? "$249" : "$219",
            description: "Growing teams up to 10 users.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in <span className="text-md font-semibold">Basic</span> plus....
                </>
            ),
            features: [
                "Personalized for each salesperson",
                "Post in multiple locations near you",
                "Up to 10 individual users",
                "40 GB individual data each user",
                "Priority chat and email support",
            ],
        },
        {
            title: "Ads Manager",
            price: selectedPlan === "monthly" ? "$499" : "$459",
            description: "Advanced features + unlimited users.",
            contentTitle: "FEATURES",
            contentDescription: (
                <>
                    Everything in <span className="text-md font-semibold">PRO</span> plus....
                </>
            ),
            features: [
                "Advanced custom fields",
                "Audit log and data history",
                "Unlimited individual users",
                "Unlimited individual data",
                "Personalized + priority service",
            ],
        },
    ];
 
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>
 
                    <h2 className="mt-3 text-display-xs font-semibold text-primary md:text-display-lg">Simple, transparent pricing</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        We believe marketing should be accessible to all companies, no matter the size.
                    </p>
                    <Tabs selectedKey={selectedPlan} onSelectionChange={(item) => setSelectedPlan(item as string)} className="w-full md:w-auto">
                        <TabList
                            type="button-border"
                            size="md"
                            items={[
                                { id: "monthly", label: "Monthly billing" },
                                { id: "annually", label: "Annual billing" },
                            ]}
                            className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1"
                        />
                    </Tabs>
                </div>
 
                <div className="mt-16 grid w-full grid-cols-1 items-end gap-4 md:mt-24 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardDualAction key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};