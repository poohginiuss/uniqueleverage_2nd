
const logos = [
    {
        name: "Odeaolabs",
        imageUrl: "/brand/1.png",
        darkModeImageUrl: "/brand/1.png",
    },
    {
        name: "Kintsugi",
        imageUrl: "/brand/2.png",
        darkModeImageUrl: "/brand/2.png",
    },
    {
        name: "Stackedlab",
        imageUrl: "/brand/3.png",
        darkModeImageUrl: "/brand/3.png",
    },
    {
        name: "Magnolia",
        imageUrl: "/brand/4.png",
        darkModeImageUrl: "/brand/4.png",
    },
    {
        name: "Powersurge",
        imageUrl: "/brand/5.png",
        darkModeImageUrl: "/brand/5.png",
    },
];

export const SocialProofFull = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Connected to top brands.</p>
                    <div className="flex max-w-full flex-col items-center gap-y-4 mask-x-from-80%">
                        {/* Top layer of logos (visible on all viewports) */}
                        <div className="flex">
                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 motion-reduce:animate-none md:gap-6 md:pl-6">
                                {/* Light mode images (hidden in dark mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.imageUrl} className="h-18 opacity-85 md:h-32 dark:hidden" />
                                ))}
    
                                {/* Dark mode images (hidden in light mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.darkModeImageUrl} className="h-18 opacity-85 not-dark:hidden md:h-32" />
                                ))}
                            </div>
    
                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 motion-reduce:animate-none md:gap-6 md:pl-6">
                                {/* Light mode images (hidden in dark mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.imageUrl} className="h-18 opacity-85 md:h-32 dark:hidden" />
                                ))}
    
                                {/* Dark mode images (hidden in light mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.darkModeImageUrl} className="h-18 opacity-85 not-dark:hidden md:h-32" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};