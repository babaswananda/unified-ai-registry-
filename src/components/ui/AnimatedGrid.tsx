"use client";

import { useEffect, useRef } from "react";

interface AnimatedGridProps {
  className?: string;
  gridSize?: number;
  lineColor?: string;
  pulseColor?: string;
  intensity?: number;
}

export default function AnimatedGrid({
  className = "",
  gridSize = 50,
  lineColor = "rgba(30, 41, 59, 0.1)",
  pulseColor = "rgba(30, 41, 59, 0.3)",
  intensity = 0.5
}: AnimatedGridProps) {
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

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const cols = Math.ceil(canvas.offsetWidth / gridSize) + 1;
      const rows = Math.ceil(canvas.offsetHeight / gridSize) + 1;

      // Draw base grid
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;
      ctx.beginPath();

      // Vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
      }

      // Horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * gridSize;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
      }

      ctx.stroke();

      // Draw animated pulses
      const pulseSpeed = 0.002;
      const waveLength = 200;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          // Calculate wave effect
          const distance = Math.sqrt(
            Math.pow(x - canvas.offsetWidth / 2, 2) + 
            Math.pow(y - canvas.offsetHeight / 2, 2)
          );
          
          const wave = Math.sin((distance / waveLength) - (time * pulseSpeed)) * intensity;
          const opacity = Math.max(0, wave);
          
          if (opacity > 0.1) {
            // Draw pulsing intersection
            ctx.fillStyle = pulseColor.replace(/[\d\.]+\)$/g, `${opacity})`);
            ctx.beginPath();
            ctx.arc(x, y, 2 + opacity * 3, 0, Math.PI * 2);
            ctx.fill();

            // Draw radiating lines
            if (opacity > 0.3) {
              ctx.strokeStyle = pulseColor.replace(/[\d\.]+\)$/g, `${opacity * 0.5})`);
              ctx.lineWidth = 1;
              ctx.beginPath();
              
              // Horizontal pulse
              ctx.moveTo(x - gridSize / 2, y);
              ctx.lineTo(x + gridSize / 2, y);
              
              // Vertical pulse
              ctx.moveTo(x, y - gridSize / 2);
              ctx.lineTo(x, y + gridSize / 2);
              
              ctx.stroke();
            }
          }
        }
      }

      // Draw flowing data streams
      const streamCount = 3;
      for (let i = 0; i < streamCount; i++) {
        const streamTime = time * 0.001 + i * 2;
        const streamX = (Math.sin(streamTime) * 0.3 + 0.5) * canvas.offsetWidth;
        const streamY = (Math.cos(streamTime * 0.7) * 0.3 + 0.5) * canvas.offsetHeight;
        
        // Draw stream trail
        ctx.strokeStyle = pulseColor.replace(/[\d\.]+\)$/g, `${0.6 * intensity})`);
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const trailLength = 5;
        for (let j = 0; j < trailLength; j++) {
          const trailTime = streamTime - j * 0.1;
          const trailX = (Math.sin(trailTime) * 0.3 + 0.5) * canvas.offsetWidth;
          const trailY = (Math.cos(trailTime * 0.7) * 0.3 + 0.5) * canvas.offsetHeight;
          const trailOpacity = (trailLength - j) / trailLength * 0.6 * intensity;
          
          ctx.strokeStyle = pulseColor.replace(/[\d\.]+\)$/g, `${trailOpacity})`);
          
          if (j === 0) {
            ctx.moveTo(trailX, trailY);
          } else {
            ctx.lineTo(trailX, trailY);
          }
        }
        ctx.stroke();
        
        // Draw stream head
        ctx.fillStyle = pulseColor.replace(/[\d\.]+\)$/g, `${0.8 * intensity})`);
        ctx.beginPath();
        ctx.arc(streamX, streamY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      timeRef.current += 16;
      drawGrid(timeRef.current);
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
  }, [gridSize, lineColor, pulseColor, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
