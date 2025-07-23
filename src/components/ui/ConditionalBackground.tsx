"use client";

import { useMobileDetection } from "@/hooks/useMobileDetection";
import MorphingBackground from "./MorphingBackground";
import AnimatedGrid from "./AnimatedGrid";
import ParticleField from "./ParticleField";
import FloatingElements from "./FloatingElements";
import StaticBackground from "./StaticBackground";

interface ConditionalBackgroundProps {
  intensity?: number;
  particleCount?: number;
  floatingCount?: number;
  gridSize?: number;
  className?: string;
}

export default function ConditionalBackground({
  intensity = 0.8,
  particleCount = 100,
  floatingCount = 12,
  gridSize = 100,
  className = ""
}: ConditionalBackgroundProps) {
  const { shouldReduceAnimations, isMobile, isTablet } = useMobileDetection();

  // Use static background only for devices that explicitly prefer reduced motion
  if (shouldReduceAnimations) {
    return <StaticBackground className={className} />;
  }

  // Use minimal background for mobile devices to prevent crashes
  if (isMobile) {
    return <StaticBackground className={className} />;
  }

  // Use simplified background for tablets
  if (isTablet) {
    return (
      <>
        <MorphingBackground intensity={intensity * 0.3} className={className} />
        <ParticleField
          particleCount={Math.floor(particleCount * 0.2)}
          color="rgba(0, 255, 255, 0.2)"
          darkColor="rgba(0, 255, 255, 0.3)"
          className={className}
        />
      </>
    );
  }

  // Use full animated background for desktop devices
  return (
    <>
      <MorphingBackground intensity={intensity} className={className} />
      <AnimatedGrid
        gridSize={gridSize}
        lineColor="rgba(0, 255, 255, 0.03)"
        pulseColor="rgba(0, 255, 255, 0.2)"
        intensity={intensity}
        className={className}
      />
      <ParticleField
        particleCount={particleCount}
        color="rgba(0, 255, 255, 0.4)"
        darkColor="rgba(0, 255, 255, 0.6)"
        className={className}
      />
      {floatingCount > 0 && <FloatingElements count={floatingCount} className={className} />}
    </>
  );
}
