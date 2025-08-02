// FeatureCard.tsx
import React from "react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icons";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        
        <div className="flex flex-col gap-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <div className="hidden md:block">
                    <FeaturedIcon color="brand" icon={icon} theme="light" size="md" />
                    </div>
                    <div className="md:hidden">
                        <FeaturedIcon color="brand" icon={icon} theme="light" size="sm" />
                    </div>
                </div>
                <p className="text-lg font-semibold text-primary md:text-xl">{title}</p>
            </div>
            <p className="text-md text-tertiary md:text-lg">{description}</p>
        </div>
    );
};

