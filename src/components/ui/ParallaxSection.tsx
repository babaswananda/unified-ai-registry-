"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  offset = 0
}: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        const elementBottom = elementTop + elementHeight;
        const viewportTop = window.pageYOffset;
        const viewportBottom = viewportTop + windowHeight;
        
        if (elementBottom >= viewportTop && elementTop <= viewportBottom) {
          // Element is in viewport, calculate parallax offset
          const scrolled = window.pageYOffset;
          const parallax = (scrolled - elementTop + windowHeight) * speed;
          setScrollY(parallax + offset);
        }
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [speed, offset]);

  return (
    <div
      ref={sectionRef}
      className={`relative ${className}`}
      style={{
        transform: `translate3d(0, ${scrollY}px, 0)`,
        willChange: "transform"
      }}
    >
      {children}
    </div>
  );
}
