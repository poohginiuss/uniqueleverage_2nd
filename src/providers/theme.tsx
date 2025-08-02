"use client";

import { ThemeProvider } from "next-themes";

export function Theme({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" value={{ light: "light-mode" }} enableSystem>
            {children}
        </ThemeProvider>
    );
}
