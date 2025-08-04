import { Button } from "@/components/base/buttons/button";
import { NewButton } from "./base-components/moving-border";
import { FeaturesBanner } from "./base-components/features-banner";

export const HeaderSection = () => {
    return (
        <div className="relative overflow-hidden pt-7 md:pt-7 bg-secondary_alt">
            {/* Background pattern */}
            <img
                aria-hidden="true"
                loading="lazy"
                src="/background.png"
                className="pointer-events-none absolute inset-0 z-0 hidden w-full h-full object-cover md:block dark:brightness-[0.2]"
                alt="Grid pattern background"
            />

            {/* Center dot pattern */}
            <img
                aria-hidden="true"
                loading="lazy"
                src="/radial-center.png"
                className="pointer-events-none absolute top-[40%] left-1/2 z-0 hidden w-[50%] max-w-[900px] -translate-x-1/2 -translate-y-1/2 md:block dark:brightness-[0.2]"
                alt="Center dot pattern"
            />

            {/* Right corner dot pattern */}
            {/* <img
                aria-hidden="true"
                loading="lazy"
                src="/vector-dot.png"
                className="pointer-events-none absolute top-[75%] left-[75%] z-0 hidden w-[25%] max-w-[500px] -translate-y-1/2 md:block dark:brightness-[0.2]"
                alt="Side dot pattern"
            /> */}

            {/* Mobile background*/}
            <img
                aria-hidden="true"
                loading="lazy"
                src="/background.png"
                className="pointer-events-none absolute inset-0 z-0 w-full h-full object-cover md:hidden dark:brightness-[0.2]"
                alt="Grid pattern background"
            />
            {/* <img
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
                alt="Grid pattern background"
            /> */}

            <section className="relative overflow-hidden pt-0 md:pt-14">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col gap-7 md:gap-2 items-center text-center">
                        <NewButton
                            className="relative inline-flex items-center gap-1 px-3 py-1.5 rounded-full group overflow-hidden border border-brand-700 hover:bg-brand-700/10 transition-colors duration-300 ease-in-out"
                            >
                            
                            {/* Foreground Content */}
                            <div className="relative z-10 flex items-center gap-1">
                                {/* Badge with Pulse */}
                                <span className="uppercase text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-0.5 rounded-full">
                                new
                                </span>

                                {/* Text with Slide-in Animation */}
                                <span className="text-sm font-bold text-white transform transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 opacity-90">
                                Use AI to chat with your ads data
                                </span>

                                {/* Arrow Icon with Slide and Fade */}
                                <div className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:opacity-100 opacity-80">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="text-white"
                                >
                                    <path
                                    d="M22.4142 12L14 20.4142L12.5858 19L18.5858 13H2V11H18.5858L12.5858 5L14 3.58579L22.4142 12Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </div>
                            </div>
                        </NewButton>
                        <h1 className="text-display-md text-white font-semibold text-primary mt-9 md:text-display-lg lg:text-display-xl">
                            Automation for salespeople.{" "}
                        </h1>
                        <p className="mt-4 text-white max-w-3xl text-lg md:mt-6 md:text-xl">
                            Getting people to your vehicles and turning them into potential customers is what we do best. Carefully crafted for teams and
                            individuals.
                        </p>
                        <div
                            className="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:flex-col md:items-center"
                        >
                            <Button type="submit" size="xl">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
                <FeaturesBanner />
                <div className="mx-auto mt-16 mb-0 w-full max-w-container px-4 md:h-full md:px-8">
                    <div className="flex flex-col md:items-start">
                        <div className="mx-auto flex h-full w-full items-center justify-center md:max-h-full md:w-full md:max-w-full md:items-start lg:max-h-full">
                                <img className="hidden size-full object-cover md:block" src="/some.svg" alt="Spirals" />
                                <img className="size-full object-cover md:hidden" src="/some-sm.png" alt="Spirals" />
                        </div>
                    </div>
                </div>

            </section>
            
        </div>
    );
};