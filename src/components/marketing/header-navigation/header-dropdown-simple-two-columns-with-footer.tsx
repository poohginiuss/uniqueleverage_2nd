"use client";

import { Header } from "./components/header";
import { DropdownMenuSimpleTwoColumnsWithFooter } from "./dropdown-header-navigation";

export const HeaderDropdownSimpleTwoColumnsWithFooter = () => (
    <Header
        items={[
            { label: "Products", href: "/products", menu: <DropdownMenuSimpleTwoColumnsWithFooter /> },
            { label: "Services", href: "/Services", menu: <DropdownMenuSimpleTwoColumnsWithFooter /> },
            { label: "Pricing", href: "/pricing" },
            { label: "Resources", href: "/resources", menu: <DropdownMenuSimpleTwoColumnsWithFooter /> },
            { label: "About", href: "/about" },
        ]}
    />
);
