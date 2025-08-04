"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function NewButton({
  borderRadius = "2.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-11 w-83 overflow-hidden bg-transparent p-[3px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.9)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-16 w-16 bg-[radial-gradient(#0764e9_40%,transparent_70%)] opacity-[0.7]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <a
        href="/#"
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a0c2c] to-[#090918]  gap-1 px-3 py-1.5 rounded-full group overflow-hidden border border-brand-700 hover:bg-brand-700/10 transition-colors duration-300 ease-in-out",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.9)`,
        }}
      >
        {/* Blur Background Animation Layer */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
              <div className="absolute w-[150%] h-[150%] -top-[75%] -left-[75%] bg-blue-600/30 blur-2xl rounded-full 
              scale-0 group-hover:scale-100 group-hover:translate-x-1/4 group-hover:translate-y-1/4 
              transition-transform duration-700 ease-out" />
          </div>
          
          {/* Foreground Content */}
          {children}
      </a>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 5000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
