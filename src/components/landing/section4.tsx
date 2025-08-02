import { type FC, type HTMLAttributes, useState } from "react";
import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeatureTabHorizontal } from "@/components/marketing/features/base-components/feature-tab";
import { Badge } from "@/components/base/badges/badges";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
export const FeaturesTabsMockup = () => {
    const [currentTab, setCurrentTab] = useState(0);
 
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <Badge color="brand" size="lg" type="pill-color">
                        Why use Unique Leverage?
                    </Badge>
 
                    <h2 className="mt-3 text-display-xs font-semibold pr-22 text-primary md:text-display-md">Better Automation. Smarter Campaigns. Stronger Results.</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful tools built for car people to automate Marketplace listings, run sponsored VDP ads, and track what’s actually working.
                    </p>
                </div>
 
                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {[
                            {
                                title: "Automate Marketplace Listings",
                                subtitle: "Whether you’ve got 10 cars or 500, we handle the heavy lifting — posting, updating prices, deleting sold units, and renewals.",
                            },
                            {
                                title: "Ads Manager",
                                subtitle: "We test audiences, monitor results, and show you exactly where your budget's going. You own everything, we manage it. ",
                            },
                            {
                                title: "Retargeting",
                                subtitle: "Use your Meta Pixel to retarget people who already visited your site — even if they didn’t convert. Plus, we target active car shoppers browsing sites like Cars.com, Autotrader, and more!",
                            },
                        ].map((item, index) => (
                            <li key={item.title} onClick={() => setCurrentTab(index)}>
                                <FeatureTabHorizontal
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    isCurrent={index === currentTab}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
 
                    <div className="relative -ml-4 flex h-90 w-screen items-start justify-center sm:w-auto lg:h-128">
                        {/* Phone */}
                        <img
                            aria-hidden="true"
                            loading="lazy"
                            src="/vector-dot.png"
                            className="pointer-events-none absolute top-0 left-[100%] z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
                            alt="Grid pattern background"
                        />
                        <div className="relative flex h-104 w-full justify-center md:h-120 lg:-ml-4 lg:h-140 lg:overflow-y-clip">
                            <IPhoneMockup
                                image="/featured/1.png"
                                imageDark="/featured/1.png"
                                className="absolute top-16 left-1/2 hidden w-78.5 -translate-x-3/4 drop-shadow-iphone-mockup md:block lg:left-0 lg:translate-x-0"
                            />
                            <IPhoneMockup
                                image="/featured/2.png"
                                imageDark="/featured/2.png"
                                className="h-[579px] w-71 drop-shadow-iphone-mockup md:absolute md:top-0 md:right-1/2 md:h-160 md:w-78.5 md:translate-x-2/3 lg:right-0 lg:translate-x-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};