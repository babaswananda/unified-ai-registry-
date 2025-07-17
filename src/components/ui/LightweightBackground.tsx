"use client";

interface LightweightBackgroundProps {
  className?: string;
}

export default function LightweightBackground({ 
  className = ""
}: LightweightBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Simple CSS-only background effects for mobile */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Static gradient overlays instead of animated canvas */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl" />
      
      {/* Simple CSS grid pattern instead of animated canvas grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
