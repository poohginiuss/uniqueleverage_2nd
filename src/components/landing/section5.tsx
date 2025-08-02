import { type FC, type HTMLAttributes } from "react";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icons";
import { Badge } from "@/components/base/badges/badges";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";
 
const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};
 
export const FeaturesAlternatingLayout = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge color="brand" size="lg" type="pill-color">
                        Feartures
                    </Badge>
                    <h2 className="mt-3 text-display-xs font-semibold text-primary md:text-display-md">Your Inventory, handled.</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Connects with most feed providers to help dealers and sales teams save time, stay synced, and sell more—automatically.
                    </p>
                </div>
            </div>
 
            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-xl font-semibold text-primary md:text-display-sm">All your feeds in one place</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Click to connect your inventory feeds—no tech skills needed. We support multiple sources, giving you full visibility and control
                            over data most dealers never see.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "One-click setup with your existing feed providers",
                                "Automated syncing for pricing, photos, and updates",
                                "Combine multiple feeds in one view",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>
 
                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/featurecard/1.png"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/featurecard/1.png"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>
 
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={MessageChatCircle} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-xl font-semibold text-primary md:text-display-sm">Together, but separate</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Each salesperson has their own login, account, and inbox—so posts, messages, and listings stay personal.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Automate posts, pricing updates, and removals",
                                "Customize descriptions and locations per user",
                                "Messages go straight to each rep's inbox",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>
 
                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/featurecard/2.png"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/featurecard/2.png"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>
 
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-xl font-semibold text-primary md:text-display-sm">Launch. Optimize. Repeat.</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Turn on campaigns, set your daily budget, and let Unique Leverage drive the traffic.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Sponsored ads targeting in market shoppers",
                                "Retarget website visitors (7-90 days)",
                                "Choose a budget that works for you",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>
 
                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/featurecard/3.png"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/featurecard/3.png"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>
            </div>
        </section>
    );
};