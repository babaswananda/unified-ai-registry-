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

  // Use lightweight animated background for mobile devices
  if (isMobile) {
    return (
      <>
        <StaticBackground className={className} />
        <AnimatedGrid
          gridSize={gridSize * 1.5}
          lineColor="rgba(0, 255, 255, 0.08)"
          pulseColor="rgba(0, 255, 255, 0.2)"
          intensity={intensity * 0.4}
          className={className}
        />
        <ParticleField
          particleCount={Math.floor(particleCount * 0.15)}
          color="rgba(0, 255, 255, 0.4)"
          darkColor="rgba(0, 255, 255, 0.5)"
          className={className}
        />
      </>
    );
  }

  // Use simplified background for tablets
  if (isTablet) {
    return (
      <>
        <MorphingBackground intensity={intensity * 0.5} className={className} />
        <AnimatedGrid
          gridSize={gridSize * 1.2}
          lineColor="rgba(0, 255, 255, 0.08)"
          pulseColor="rgba(0, 255, 255, 0.25)"
          intensity={intensity * 0.5}
          className={className}
        />
        <ParticleField
          particleCount={Math.floor(particleCount * 0.3)}
          color="rgba(0, 255, 255, 0.5)"
          darkColor="rgba(0, 255, 255, 0.6)"
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
        lineColor="rgba(0, 255, 255, 0.1)"
        pulseColor="rgba(0, 255, 255, 0.4)"
        intensity={intensity}
        className={className}
      />
      <ParticleField
        particleCount={particleCount}
        color="rgba(0, 255, 255, 0.6)"
        darkColor="rgba(0, 255, 255, 0.8)"
        className={className}
      />
      {floatingCount > 0 && <FloatingElements count={floatingCount} className={className} />}
    </>
  );
}
