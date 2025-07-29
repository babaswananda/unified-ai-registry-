"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "cyan" | "orange" | "purple" | "silver" | "green" | "blue" | "pink" | "red" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "cyan",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    const getGradient = () => {
      switch (variant) {
        case "white":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #ffffff 0%,
            #f8fafc calc(50% / var(--repeating-conic-gradient-times)),
            #ffffff calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "cyan":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #06b6d4 0%,
            #0891b2 calc(50% / var(--repeating-conic-gradient-times)),
            #06b6d4 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "orange":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #f97316 0%,
            #ea580c calc(50% / var(--repeating-conic-gradient-times)),
            #f97316 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "purple":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #a855f7 0%,
            #9333ea calc(50% / var(--repeating-conic-gradient-times)),
            #a855f7 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "silver":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #94a3b8 0%,
            #64748b calc(50% / var(--repeating-conic-gradient-times)),
            #94a3b8 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "green":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #22c55e 0%,
            #16a34a calc(50% / var(--repeating-conic-gradient-times)),
            #22c55e calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "blue":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #3b82f6 0%,
            #2563eb calc(50% / var(--repeating-conic-gradient-times)),
            #3b82f6 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "pink":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #ec4899 0%,
            #db2777 calc(50% / var(--repeating-conic-gradient-times)),
            #ec4899 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        case "red":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #ef4444 0%,
            #dc2626 calc(50% / var(--repeating-conic-gradient-times)),
            #ef4444 calc(100% / var(--repeating-conic-gradient-times))
          )`;
        default:
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #06b6d4 0%,
            #0891b2 calc(50% / var(--repeating-conic-gradient-times)),
            #06b6d4 calc(100% / var(--repeating-conic-gradient-times))
          )`;
      }
    };

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            variant === "cyan" && "border-cyan-400",
            variant === "orange" && "border-orange-400",
            variant === "purple" && "border-purple-400",
            variant === "silver" && "border-slate-400",
            variant === "green" && "border-green-400",
            variant === "blue" && "border-blue-400",
            variant === "pink" && "border-pink-400",
            variant === "red" && "border-red-400",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient": getGradient(),
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[-1px]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
