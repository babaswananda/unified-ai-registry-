"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function StickyOperatorCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 1000px
      if (window.scrollY > 1000 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-2xl shadow-orange-500/20 border border-orange-400/30 max-w-sm">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="pr-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl">🔄</span>
            <h3 className="font-bold text-lg">Join the Operator Class</h3>
          </div>
          
          <p className="text-sm text-orange-100 mb-4">
            Get paid to train, review, and optimize AI systems in the new economy.
          </p>
          
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-orange-600 hover:bg-orange-50 w-full font-semibold"
          >
            Earn with Unified
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
