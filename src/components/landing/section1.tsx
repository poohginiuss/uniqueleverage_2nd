import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

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
                src="/vector-dot.png"
                className="pointer-events-none absolute top-[75%] left-1/7 z-0 hidden w-[30%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 md:block dark:brightness-[0.2]"
                alt="Center dot pattern"
            />

            {/* Right corner dot pattern */}
            <img
                aria-hidden="true"
                loading="lazy"
                src="/vector-dot.png"
                className="pointer-events-none absolute top-[75%] left-[75%] z-0 hidden w-[25%] max-w-[500px] -translate-y-1/2 md:block dark:brightness-[0.2]"
                alt="Side dot pattern"
            />

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

            <section className="relative overflow-hidden pt-0 md:pt-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Automation for salespeople.{" "}
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-6 md:text-xl">
                            Getting people to your vehicles and turning them into potential customers is what we do best. Carefully crafted for teams and
                            individuals.
                        </p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="email"
                                type="email"
                                wrapperClassName="py-0.5"
                                placeholder="Enter your email"
                                hint={
                                    <span>
                                        We care about your data in our{" "}
                                        <a
                                            href="#"
                                            className="rounded-sm underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy
                                        </a>
                                        .
                                    </span>
                                }
                            />
                            <Button type="submit" size="xl">
                                Start Free Trial
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="mx-auto mt-16 mb-0 w-full max-w-container px-4 md:h-full md:px-8">
                    <div className="flex flex-col md:items-start">
                        <div className="mx-auto flex h-full w-full items-center justify-center md:max-h-full md:w-full md:max-w-full md:items-start lg:max-h-full">
                                <img className="hidden size-full object-cover md:block" src="/some.png" alt="Spirals" />
                                <img className="size-full object-cover md:hidden" src="/some-sm.png" alt="Spirals" />
                        </div>
                    </div>
                </div>

            </section>
            
        </div>
    );
};