"use client";

import { useMobileDetection } from "@/hooks/useMobileDetection";
import MorphingBackground from "./MorphingBackground";
import AnimatedGrid from "./AnimatedGrid";
import ParticleField from "./ParticleField";
import FloatingElements from "./FloatingElements";
import LightweightBackground from "./LightweightBackground";

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
  const { shouldReduceAnimations } = useMobileDetection();

  if (shouldReduceAnimations) {
    // Use lightweight CSS-only background for mobile/low-end devices
    return <LightweightBackground className={className} />;
  }

  // Use full animated background for desktop/high-end devices
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
