import { Badge } from "@/components/base/badges/badges";

export const SocialProofFullWidthMasked = () => {
    const logos = [
        {
            name: "Odeaolabs",
            imageUrl: "/brand2/1.png",
            darkModeImageUrl: "/brand2/1.png",
        },
        {
            name: "Kintsugi",
            imageUrl: "/brand2/2.png",
            darkModeImageUrl: "/brand2/2.png",
        },
        {
            name: "Stackedlab",
            imageUrl: "/brand2/3.png",
            darkModeImageUrl: "/brand2/3.png",
        },
        {
            name: "Magnolia",
            imageUrl: "/brand2/4.png",
            darkModeImageUrl: "/brand2/4.png",
        },
        {
            name: "Powersurge",
            imageUrl: "/brand2/5.png",
            darkModeImageUrl: "/brand2/5.png",
        },
        {
            name: "Warpspeed",
            imageUrl: "/brand2/6.png",
            darkModeImageUrl: "/brand2/6.png",
        },
        {
            name: "Leapyear",
            imageUrl: "/brand2/7.png",
            darkModeImageUrl: "/brand2/7.png",
        },
        {
            name: "Easytax",
            imageUrl: "/brand2/8.png",
            darkModeImageUrl: "/brand2/8.png",
        },
        {
            name: "Sisyphus",
            imageUrl: "/brand2/9.png",
            darkModeImageUrl: "/brand2/9.png",
        },
        {
            name: "Catalog",
            imageUrl: "/brand2/10.png",
            darkModeImageUrl: "/brand2/10.png",
        },
        {
            name: "Cwatalog",
            imageUrl: "/brand2/11.png",
            darkModeImageUrl: "/brand2/11.png",
        },
        {
            name: "Ceawerog",
            imageUrl: "/brand2/12.png",
            darkModeImageUrl: "/brand2/12.png",
        },
    ];
 
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto w-full max-w-container px-4 md:px-8">
                        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                            <Badge color="brand" size="lg" type="pill-color">
                                Our Partners
                            </Badge>
                            <h2 className="mt-3 text-display-xs font-semibold text-primary md:text-display-md">The power of partnerships</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Our system works with the tools you already know and love.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex max-w-full flex-col items-center gap-y-4">
                            {/* Top layer of logos (visible on all viewports) */}
                            <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                                {/* Light mode images (hidden in dark mode) */}
                                <img src="/brand2/1.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/2.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/3.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/4.png" className="h-18 w-auto md:h-32" />
                            </div>
                        </div>
                        <div className="flex max-w-full flex-col items-center gap-y-4">
                            <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                                {/* Light mode images (hidden in dark mode) */}
                                <img src="/brand2/5.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/6.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/7.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/8.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/9.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/10.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/11.png" className="h-18 w-auto md:h-32" />
                                <img src="/brand2/12.png" className="h-18 w-auto md:h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};