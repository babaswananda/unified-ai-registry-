"use client";

import { useState, useEffect } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import StaticBackground from "./StaticBackground";

interface MobileOptimizedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileOptimizedLayout({ 
  children, 
  className = "" 
}: MobileOptimizedLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isMobile } = useMobileDetection();

  useEffect(() => {
    // Ensure the component is fully loaded before showing content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black ${className}`}>
      {isMobile && <StaticBackground />}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
