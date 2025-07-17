"use client";

import { useEffect, useRef } from "react";

interface MorphingBackgroundProps {
  className?: string;
  intensity?: number;
}

export default function MorphingBackground({ 
  className = "",
  intensity = 0.3
}: MorphingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createGradient = (time: number) => {
      const gradient = ctx.createRadialGradient(
        canvas.offsetWidth * (0.5 + Math.sin(time * 0.001) * 0.2),
        canvas.offsetHeight * (0.5 + Math.cos(time * 0.0015) * 0.2),
        0,
        canvas.offsetWidth * (0.5 + Math.sin(time * 0.001) * 0.2),
        canvas.offsetHeight * (0.5 + Math.cos(time * 0.0015) * 0.2),
        Math.max(canvas.offsetWidth, canvas.offsetHeight) * 0.8
      );

      const alpha1 = 0.02 + Math.sin(time * 0.002) * 0.01;
      const alpha2 = 0.01 + Math.cos(time * 0.0025) * 0.005;
      const alpha3 = 0.005 + Math.sin(time * 0.003) * 0.003;

      gradient.addColorStop(0, `rgba(30, 41, 59, ${alpha1 * intensity})`);
      gradient.addColorStop(0.4, `rgba(51, 65, 85, ${alpha2 * intensity})`);
      gradient.addColorStop(0.7, `rgba(71, 85, 105, ${alpha3 * intensity})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      return gradient;
    };

    const createSecondaryGradient = (time: number) => {
      const gradient = ctx.createRadialGradient(
        canvas.offsetWidth * (0.3 + Math.cos(time * 0.0012) * 0.3),
        canvas.offsetHeight * (0.7 + Math.sin(time * 0.0018) * 0.3),
        0,
        canvas.offsetWidth * (0.3 + Math.cos(time * 0.0012) * 0.3),
        canvas.offsetHeight * (0.7 + Math.sin(time * 0.0018) * 0.3),
        Math.max(canvas.offsetWidth, canvas.offsetHeight) * 0.6
      );

      const alpha1 = 0.015 + Math.cos(time * 0.0022) * 0.008;
      const alpha2 = 0.008 + Math.sin(time * 0.0028) * 0.004;

      gradient.addColorStop(0, `rgba(15, 23, 42, ${alpha1 * intensity})`);
      gradient.addColorStop(0.6, `rgba(30, 41, 59, ${alpha2 * intensity})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      return gradient;
    };

    const drawMorphingShapes = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Save context
      ctx.save();

      // Primary morphing gradient
      ctx.fillStyle = createGradient(time);
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Secondary morphing gradient
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = createSecondaryGradient(time);
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Tertiary flowing gradient
      ctx.globalCompositeOperation = "multiply";
      const tertiaryGradient = ctx.createLinearGradient(
        0, 
        0, 
        canvas.offsetWidth, 
        canvas.offsetHeight
      );
      
      const flow = Math.sin(time * 0.001) * 0.5 + 0.5;
      tertiaryGradient.addColorStop(0, `rgba(248, 250, 252, ${0.02 * flow * intensity})`);
      tertiaryGradient.addColorStop(0.5, `rgba(241, 245, 249, ${0.01 * flow * intensity})`);
      tertiaryGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      ctx.fillStyle = tertiaryGradient;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Restore context
      ctx.restore();
    };

    const animate = () => {
      timeRef.current += 16; // ~60fps
      drawMorphingShapes(timeRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
