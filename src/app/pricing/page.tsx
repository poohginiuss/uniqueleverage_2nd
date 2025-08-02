"use client";

import { Header } from "@/components/landing/header";
import { PricingSection } from "@/components/landing/pricing/pricing-section";
import { FAQAccordion } from "@/components/landing/pricing/faq-section";
import { FooterLarge01 } from "@/components/landing/footer";


export default () => {
    return (
        <div className="bg-primary">
            <Header />

            <PricingSection />

            <FAQAccordion />

            <FooterLarge01 />
        </div>
    );
};
