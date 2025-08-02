import { FaApple, FaWindows } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";

const footerNavList = [
    {
        label: "NAVIGATION",
        items: [
            { label: "Account Log-in", href: "#" },
            { label: "Schedule a Demo", href: "#" },
            {
                label: "Become a Partner",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Pricing", href: "#" },
        ],
    },
    {
        label: "HOW WE CAN HELP",
        items: [
            { label: "Automation", href: "#" },
            { label: "Business Manager", href: "#" },
        ],
    },
    {
        label: "TALK TO US",
        items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookies", href: "#" },
        ],
    },
];

export const FooterLarge01 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-x-0 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <Button color="link-gray" size="sm" className="gap-1">{category.label}</Button>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-color" size="sm" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <div className="flex flex-col items-start gap-7">
                            {/* Zoom Meeting box */}
                            <a href="#" className="flex items-center gap-2 rounded-xl bg-gray-100 px-2 py-3 shadow-sm transition hover:shadow-md">
                                <img src="/zoom-icon.png" alt="Zoom Logo" className="h-10 w-10 rounded-md" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-gray-900">Zoom Meeting</span>
                                    <span className="flex items-center text-xs text-gray-600">
                                        Join The Zoom Meeting<HiArrowRight />
                                    </span>
                                </div>
                            </a>

                            {/* Get the app label */}
                            <div className="flex flex-col items-start gap-3">
                                <span className="text-sm font-medium text-gray-800">Get the app</span>

                                {/* Download buttons */}
                                <div className="flex w-full flex-col items-start gap-2 md:max-w-120 md:flex-row md:items-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-secondary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        <FaWindows className="text-sm" />
                                        Windows
                                    </a>
                                    <a
                                        className="inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-secondary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                        href="#"
                                    >
                                        <FaApple className="text-sm" />
                                        macOs
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-8" />
                    <p className="text-md text-quaternary">© 2025 Unique Leverage, LLC All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
