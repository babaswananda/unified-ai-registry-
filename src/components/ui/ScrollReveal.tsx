"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  distance = 50,
  className = "",
  threshold = 0.1,
  once = true
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }, delay);
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, once, hasAnimated]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1) rotate(0deg)";
    
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(1) rotate(0deg)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(1) rotate(0deg)`;
      case "left":
        return `translate3d(${distance}px, 0, 0) scale(1) rotate(0deg)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(1) rotate(0deg)`;
      case "scale":
        return `translate3d(0, 0, 0) scale(0.8) rotate(0deg)`;
      case "rotate":
        return `translate3d(0, 0, 0) scale(1) rotate(-10deg)`;
      default:
        return `translate3d(0, ${distance}px, 0) scale(1) rotate(0deg)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: "transform, opacity"
      }}
    >
      {children}
    </div>
  );
}
