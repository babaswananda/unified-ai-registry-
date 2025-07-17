"use client";

interface StaticBackgroundProps {
  className?: string;
}

export default function StaticBackground({ 
  className = ""
}: StaticBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Pure static background - no animations, no canvas, no JavaScript */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Static CSS-only gradients */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/6 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-purple-500/4 rounded-full blur-xl" />
      
      {/* Simple border gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      {/* Static grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}
