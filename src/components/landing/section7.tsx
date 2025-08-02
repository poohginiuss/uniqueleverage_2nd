import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { cx } from "@/utils/cx";
export const SocialCards03 = () => {
    const reviews = [
        [
            {
                id: "review-01",
                quote: "“Working with Unique Leverage completely transformed our approach. Their clarity and expertise gave us actionable steps that we actually implemented—and the results speak for themselves.”",
                author: {
                    name: "Olivia M.",
                    title: "Founder & CEO",
                    imageUrl: "/avatar/2.png",
                },
                company: null,
            },
            {
                id: "review-02",
                quote: "A high-volume dealership leveraging our targeted marketing campaigns and automated posting tool to power their sales teams in Morristown, New Jersey and Fort Myers, Florida.",
                author: {
                    name: "Fort Myers, Florida",
                    title: "Chet V. Owner & Operator",
                },
                company: {
                    name: "Railspeed",
                    imageUrl: "/brandcard/1.png",
                    imageUrlDark: "/brandcard/1.png",
                },
            },
            {
                id: "review-03",
                quote: "“Unique Leverage helped us streamline our processes and boost productivity. Their guidance was practical, effective, and easy to follow.”",
                author: {
                    name: "Olivia M.",
                    title: "Founder & CEO",
                    imageUrl: "/avatar/2.png",
                },
            },
        ],
        [
            {
                id: "review-01",
                quote: "A growing team, 150+ vehicles, and nonstop video campaigns — all powered by our posting tool and lead-driven marketing strategy.",
                author: {
                    name: "Milwaukee, Wisconsin",
                    title: "John H. Owner & Operator",
                },
                company: {
                    name: "Goodwell",
                    imageUrl: "/brandcard/4.png",
                    imageUrlDark: "/brandcard/4.png",
                },
            },
            {
                id: "review-02",
                quote: "“Unique Leverage helped us streamline our processes and boost productivity. Their guidance was practical, effective, and easy to follow.”",
                author: {
                    name: "Olivia M.",
                    title: "Founder & CEO",
                    imageUrl: "/avatar/2.png",
                },
            },
            {
                id: "review-03",
                quote: "Trailers, Mowers, & Powersports — the campaigns, listing tool, and data were all tailored to fit the niche.",
                author: {
                    name: "Rome, New York",
                    title: "Brad T. Owner & Operator",
                },
                company: {
                    name: "Solaris Energy",
                    imageUrl: "/brandcard/2.png",
                    imageUrlDark: "/brandcard/2.png",
                },
            },
        ],
        [
            {
                id: "review-01",
                quote: "“Unique Leverage helped us streamline our processes and boost productivity. Their guidance was practical, effective, and easy to follow.”",
                author: {
                    name: "Olivia M.",
                    title: "Founder & CEO",
                    imageUrl: "/avatar/2.png",
                },
            },
            {
                id: "review-02",
                quote: "A lean sales team dominating Facebook Marketplace. High volume campaigns focused on lead forms. ",
                author: {
                    name: "Clinton Township, Michigan",
                    title: "Tony R. Owner & Operator",
                },
                company: {
                    name: "Magnolia",
                    imageUrl: "/brandcard/3.png",
                    imageUrlDark: "/brandcard/3.png",
                },
            },
            {
                id: "review-03",
                quote: "“Unique Leverage helped us streamline our processes and boost productivity. Their guidance was practical, effective, and easy to follow.”",
                author: {
                    name: "Olivia M.",
                    title: "Founder & CEO",
                    imageUrl: "/avatar/2.png",
                },
            },
        ],
    ];
 
    let reviewsCount = 0;
    const maxVisibleReviewsOnMobile = 4;
 
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-8 lg:py-8">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h2 className="text-display-xs font-semibold text-primary px-0 lg:text-display-md">Don't just take our word for it</h2>
                <p className="text-md text-tertiary lg:text-xl">Hear from the top dealerships and salespeople in the game using Unique Leverage to optimize their marketing efforts</p>
            </div>
            {/* mask-b-from-[calc(100%-350px)]  */}
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-3 lg:gap-8 lg:px-8">
                {reviews.map((reviewGroup, reviewGroupIndex) => {
                    return (
                        <div
                            key={reviewGroupIndex}
                            className={cx(
                                "flex flex-col gap-5 lg:gap-8",
                                reviewGroupIndex === 0 && "lg:py-8",
                                reviewGroupIndex === 2 && "lg:pt-10",
                                reviewsCount >= maxVisibleReviewsOnMobile && "max-lg:hidden",
                            )}
                        >
                            {reviewGroup.map((review) => {
                                reviewsCount += 1;
 
                                return (
                                    <div
                                        key={review.id}
                                        className={cx(
                                            "flex flex-col gap-8 rounded-xl bg-primary_alt p-6 ring-1 ring-secondary ring-inset lg:justify-between lg:gap-12 lg:p-8",
                                            // reviewsCount >= maxVisibleReviewsOnMobile && "max-lg:hidden",
                                        )}
                                    >
                                        <div className="flex flex-col items-start gap-3">
                                            {review.company && (
                                                <>
                                                    <img className="" src={review.company.imageUrl} alt={review.company.name} />
                                                    <img className=" not-dark:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                                                </>
                                            )}
                                            <blockquote className="text-md text-tertiary">{review.quote}</blockquote>
                                        </div>
                                        <AvatarLabelGroup
                                            size="lg"
                                            src={review.author.imageUrl}
                                            alt={review.author.name}
                                            title={
                                                <span className="relative flex items-center gap-1">
                                                    {review.author.name}
                                                </span>
                                            }
                                            subtitle={review.author.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};