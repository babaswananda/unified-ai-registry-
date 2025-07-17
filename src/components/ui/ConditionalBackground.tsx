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
  const { shouldReduceAnimations, isMobile } = useMobileDetection();

  // Use completely static background for mobile devices
  if (isMobile || shouldReduceAnimations) {
    return <StaticBackground className={className} />;
  }

  // Use full animated background only for desktop devices
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
