"use client";
import { type ComponentProps } from "react";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { HeaderSection } from "@/components/landing/section1";
import { SocialProofFull } from "@/components/landing/section2";
import { TestimonialCard } from "@/components/landing/section3";
import { FeaturesTabsMockup } from "@/components/landing/section4";
import { FeaturesAlternatingLayout } from "@/components/landing/section5";
import { CTASimpleCentered } from "@/components/landing/section6";
import { SocialCards03 } from "@/components/landing/section7";
import { SocialProofFullWidthMasked } from "@/components/landing/section8";
import { CTASimpleCenteredLast } from "@/components/landing/section9";
import { FooterLarge01 } from "@/components/landing/footer";
import { Header } from "@/components/landing/header-for-black";
import { cx } from "@/utils/cx";


const HeaderPrimaryDark = (props: ComponentProps<typeof Header>) => {
    return (
        <Header
            {...props}
            className={cx(
                "bg-[#090717] md:bg-[#090717]", // custom background and border bottom
                "[&_nav>ul>li>a]:text-secondary_on-brand",
                "[&_nav>ul>li>a]:hover:text-secondary_on-brand",
                "[&_nav>ul>li>button]:text-secondary_on-brand",
                "[&_nav>ul>li>button]:hover:text-secondary_on-brand",
                "[&_nav>ul>li>button>svg]:text-fg-brand-secondary_alt",
                "[&_svg_path.fill-fg-primary]:fill-fg-white",
                props.className
            )}
            />
    );
};

export const LandingPage = () => {
    return (
        <div className="relative overflow-hidden bg-secondary_alt">
            <HeaderPrimaryDark className="" />

            <HeaderSection />

            <SectionDivider className="max-md:hidden" />

            <SocialProofFull />
            
            <TestimonialCard />

            <FeaturesTabsMockup />

            <FeaturesAlternatingLayout />

            <CTASimpleCentered />

            <SocialCards03 />

            <SocialProofFullWidthMasked />

            <CTASimpleCenteredLast />

            <FooterLarge01 />
        </div>
    );
};
