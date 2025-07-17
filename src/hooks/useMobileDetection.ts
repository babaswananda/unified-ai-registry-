"use client";

import { useState, useEffect } from 'react';

interface MobileDetection {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  shouldReduceAnimations: boolean;
}

export function useMobileDetection(): MobileDetection {
  // Start with mobile-first approach - assume mobile until proven otherwise
  const [detection, setDetection] = useState<MobileDetection>({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
    shouldReduceAnimations: true,
  });

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const width = window.innerWidth;

      // More aggressive mobile detection
      const isMobile = width <= 768 ||
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent) ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;

      // Check for tablets
      const isTablet = !isMobile && width > 768 && width <= 1024 && /ipad|android|tablet/i.test(userAgent);

      // Check for desktop
      const isDesktop = !isMobile && !isTablet && width > 1024;

      // Be very aggressive about reducing animations on mobile
      const shouldReduceAnimations =
        isMobile ||
        isTablet ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        // Check for low-end devices
        (navigator as any).hardwareConcurrency <= 4 ||
        (navigator as any).deviceMemory <= 4 ||
        // Check for slow connections
        (navigator as any).connection?.effectiveType === 'slow-2g' ||
        (navigator as any).connection?.effectiveType === '2g' ||
        (navigator as any).connection?.effectiveType === '3g';

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
