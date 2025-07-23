"use client";

import { useRef, useState } from "react";

interface SimpleParticleCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SimpleParticleCard = ({
  children,
  className = "",
  style,
}: SimpleParticleCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    if (!cardRef.current) return;
    
    // Create simple particles
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        if (!cardRef.current) return;
        
        const particle = document.createElement("div");
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(0, 255, 255, 1);
          border-radius: 50%;
          pointer-events: none;
          z-index: 100;
          left: ${Math.random() * cardRef.current.offsetWidth}px;
          top: ${Math.random() * cardRef.current.offsetHeight}px;
          animation: particleFloat 2s ease-out forwards;
        `;
        
        cardRef.current.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 2000);
      }, i * 100);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    // Remove all particles
    if (cardRef.current) {
      const particles = cardRef.current.querySelectorAll('[style*="particleFloat"]');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
          50% {
            opacity: 1;
            transform: scale(1) translateY(-20px);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(-40px);
          }
        }
      `}</style>
      
      <div
        ref={cardRef}
        className={`${className} relative overflow-hidden`}
        style={{
          ...style,
          border: isHovered ? "1px solid rgba(0, 255, 255, 0.3)" : undefined,
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title="Simple Particle Card - Hover for effects!"
      >
        {children}
        {isHovered && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        )}
      </div>
    </>
  );
};

export default SimpleParticleCard;
