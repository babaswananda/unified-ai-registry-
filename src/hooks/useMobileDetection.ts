"use client";

import { useState, useEffect } from 'react';

interface MobileDetection {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  shouldReduceAnimations: boolean;
}

export function useMobileDetection(): MobileDetection {
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
      
      // Check for mobile devices
      const isMobile = width <= 768 || /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // Check for tablets
      const isTablet = width > 768 && width <= 1024 && /ipad|android|tablet/i.test(userAgent);
      
      // Check for desktop
      const isDesktop = width > 1024 && !isMobile && !isTablet;
      
      // Check if we should reduce animations
      const shouldReduceAnimations = 
        isMobile || 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        // Check for low-end devices
        (navigator as any).hardwareConcurrency <= 2 ||
        (navigator as any).deviceMemory <= 2;

      setDetection({
        isMobile,
        isTablet,
        isDesktop,
        shouldReduceAnimations,
      });
    };

    // Initial check
    checkDevice();

    // Listen for resize events
    window.addEventListener('resize', checkDevice);
    
    // Listen for orientation changes on mobile
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  return detection;
}
