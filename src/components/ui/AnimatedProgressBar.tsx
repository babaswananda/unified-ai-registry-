"use client";

import { useState, useEffect } from "react";

interface AnimatedProgressBarProps {
  progress: number;
  duration?: number;
  className?: string;
  showPercentage?: boolean;
  color?: string;
}

export default function AnimatedProgressBar({
  progress,
  duration = 1500,
  className = "",
  showPercentage = false,
  color = "bg-dark-900"
}: AnimatedProgressBarProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`progress-${progress}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [progress, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progressValue = Math.min((elapsed / duration) * progress, progress);
      
      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - elapsed / duration, 3);
      const easedProgress = Math.min(easeOutCubic * progress, progress);
      
      setCurrentProgress(easedProgress);

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, progress, duration]);

  return (
    <div id={`progress-${progress}`} className={`relative ${className}`}>
      <div className="w-full bg-dark-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300 relative overflow-hidden`}
          style={{ width: `${currentProgress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
      {showPercentage && (
        <div className="text-sm text-dark-600 mt-2 text-center">
          {Math.round(currentProgress)}%
        </div>
      )}
    </div>
  );
}
