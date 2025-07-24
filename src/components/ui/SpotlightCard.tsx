"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "cyan" | "orange" | "purple" | "silver" | "green" | "blue" | "pink" | "red" | "white";
  spotlightColor?: string;
  glowSpread?: number;
  glowProximity?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  variant = "cyan",
  spotlightColor,
  glowSpread = 40,
  glowProximity = 64
}: SpotlightCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getSpotlightColor = () => {
    if (spotlightColor) return spotlightColor;
    
    switch (variant) {
      case "cyan": return "rgba(6, 182, 212, 0.15)";
      case "orange": return "rgba(249, 115, 22, 0.15)";
      case "purple": return "rgba(168, 85, 247, 0.15)";
      case "silver": return "rgba(148, 163, 184, 0.15)";
      case "green": return "rgba(34, 197, 94, 0.15)";
      case "blue": return "rgba(59, 130, 246, 0.15)";
      case "pink": return "rgba(236, 72, 153, 0.15)";
      case "red": return "rgba(239, 68, 68, 0.15)";
      case "white": return "rgba(255, 255, 255, 0.1)";
      default: return "rgba(6, 182, 212, 0.15)";
    }
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={cn("relative rounded-xl border p-1 transition-all duration-300 hover:scale-105", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <GlowingEffect
        variant={variant}
        spread={glowSpread}
        glow={true}
        disabled={false}
        proximity={glowProximity}
        inactiveZone={0.01}
        borderWidth={1}
      />
      
      <div className="relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
        {/* Spotlight effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${getSpotlightColor()}, transparent 40%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
