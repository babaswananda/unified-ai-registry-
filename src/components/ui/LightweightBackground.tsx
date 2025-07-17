"use client";

interface LightweightBackgroundProps {
  className?: string;
}

export default function LightweightBackground({
  className = ""
}: LightweightBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Static gradient overlays - more visible for mobile */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-500/8 rounded-full blur-2xl animate-pulse"
           style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/6 rounded-full blur-2xl animate-pulse"
           style={{ animationDuration: '5s', animationDelay: '1s' }} />

      {/* Additional mobile-friendly gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/5 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple-500/3 to-transparent" />

      {/* Simple CSS grid pattern - lighter and more visible */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </div>
  );
}
