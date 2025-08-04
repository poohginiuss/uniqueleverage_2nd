"use client";
import React from "react";
import { NewButton } from "./base-components/moving-border";
 
export const Sss = () => {
  return (
    <div>
        <NewButton
            borderRadius="1.5rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            Borders are cool
        </NewButton>
        <NewButton
            href="/#"
            className="relative inline-flex items-center gap-1 px-3 py-1.5 rounded-full group overflow-hidden border border-brand-700 hover:bg-brand-700/10 transition-colors duration-300 ease-in-out"
            >
            {/* Blur Background Animation Layer */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                <div className="absolute w-[150%] h-[150%] -top-[75%] -left-[75%] bg-blue-600/30 blur-2xl rounded-full 
                scale-0 group-hover:scale-100 group-hover:translate-x-1/4 group-hover:translate-y-1/4 
                transition-transform duration-700 ease-out" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex items-center gap-1">
                {/* Badge with Pulse */}
                <span className="uppercase text-xs font-bold bg-brand-700 text-white px-2 py-0.5 rounded-full animate-pulse">
                new
                </span>

                {/* Text with Slide-in Animation */}
                <span className="text-sm font-bold text-white transform transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 opacity-90">
                Use AI to chat with your ads data
                </span>

                {/* Arrow Icon with Slide and Fade */}
                <div className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:opacity-100 opacity-80">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-white"
                >
                    <path
                    d="M22.4142 12L14 20.4142L12.5858 19L18.5858 13H2V11H18.5858L12.5858 5L14 3.58579L22.4142 12Z"
                    fill="currentColor"
                    />
                </svg>
                </div>
            </div>
        </NewButton>
    </div>
  );
}