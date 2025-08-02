import { Avatar } from "@/components/base/avatar/avatar";
import { useState } from "react";
import { StarIcon } from "@/components/foundations/rating-stars";
import { cx } from "@/utils/cx";
 
export const TestimonialCard = () => {
    const [currentReviewIndex] = useState(0);
    return (
        <section className="bg-primary py-4 md:py-8">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex flex-col gap-6 rounded-2xl bg-secondary px-6 py-10 text-center md:gap-8 md:px-8 md:py-12 lg:p-16">
                    <div className="flex flex-col gap-3 items-center">
                        <div aria-hidden="true" className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={`${currentReviewIndex}-${index}`}
                                    className={cx(
                                        "flex size-5 items-center justify-center",
                                        index < 4 ? "text-fg-brand-secondary" : "text-fg-brand-secondary_alt",
                                    )}
                                >
                                    <StarIcon />
                                </div>
                            ))}
                        </div>
                        <blockquote className="text-display-xs font-medium text-primary sm:text-display-sm md:text-display-md">
                            “Best tool in my dealer group.
                        </blockquote>
                        <blockquote className="text-display-xs font-medium text-primary sm:text-display-sm md:text-display-md">
                            Unique Leverage for the win!”
                        </blockquote>
                    </div>
                    <figcaption className="flex justify-center">
                        <div className="flex origin-bottom flex-col items-center gap-4 will-change-transform">
                            <div className="flex gap-4">
                                <Avatar src="/avatar/1.png" alt="Fleur Cook" size="xl" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold text-primary">Derek Elkins, Owner</p>
                                    <cite className="text-md text-tertiary not-italic">Owner at Green Light Auto</cite>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};