"use client";

import { useState, useEffect } from 'react';

interface MobileDetection {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  shouldReduceAnimations: boolean;
}

export function useMobileDetection(): MobileDetection {
  // Start with desktop-first approach for development - assume desktop until proven otherwise
  const [detection, setDetection] = useState<MobileDetection>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    shouldReduceAnimations: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const width = window.innerWidth;

      // Less aggressive mobile detection - primarily based on screen width
      const isMobile = width <= 480;

      // Check for tablets
      const isTablet = width > 480 && width <= 1024;

      // Check for desktop
      const isDesktop = width > 1024;

      // Only reduce animations for very small devices or when explicitly requested
      const shouldReduceAnimations =
        width <= 320 || // Very small devices
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setDetection({
        isMobile,
        isTablet,
        isDesktop,
        shouldReduceAnimations,
      });
    };

    // Initial check with a small delay to ensure DOM is ready
    setTimeout(checkDevice, 100);

    // Listen for resize events
    window.addEventListener('resize', checkDevice);

    // Listen for orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(checkDevice, 100);
    });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  return detection;
}
