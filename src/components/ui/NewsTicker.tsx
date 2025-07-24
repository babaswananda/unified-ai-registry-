"use client";

import { useState, useEffect } from "react";

interface NewsTickerProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function NewsTicker({ items, speed = 50, className = "" }: NewsTickerProps) {
  const [isPaused, setIsPaused] = useState(false);

  const tickerItems = [...items, ...items]; // Duplicate for seamless loop

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-cyan-500/20 py-3 ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {tickerItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-cyan-400 font-semibold text-sm"
          >
            <span className="text-cyan-300 mr-2">🔥</span>
            {item}
            <span className="text-cyan-300 ml-2">•</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
}
