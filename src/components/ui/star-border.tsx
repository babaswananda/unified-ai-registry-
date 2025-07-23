"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StarBorderProps {
  children: React.ReactNode
  className?: string
  speed?: number
  starColor?: string
  borderColor?: string
}

export function StarBorder({
  children,
  className,
  speed = 2,
  starColor = "#fbbf24",
  borderColor = "#3b82f6"
}: StarBorderProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(45deg, ${borderColor}, transparent, ${borderColor})`,
          padding: "2px",
          // Set initial color to match the first animation frame to avoid warnings
          color: borderColor
        }}
        animate={{
          background: [
            `linear-gradient(0deg, ${borderColor}, transparent, ${borderColor})`,
            `linear-gradient(90deg, ${borderColor}, transparent, ${borderColor})`,
            `linear-gradient(180deg, ${borderColor}, transparent, ${borderColor})`,
            `linear-gradient(270deg, ${borderColor}, transparent, ${borderColor})`,
            `linear-gradient(360deg, ${borderColor}, transparent, ${borderColor})`
          ]
          // Remove color animation to prevent warnings
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg">
          {children}
        </div>
      </motion.div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        {/* Generate stars with unique IDs based on their parent component instance */}
        {Array.from({ length: 8 }).map((_, i) => {
          // Generate deterministic but unique positions
          const positions = [
            { left: 10.23, top: 15.78 },
            { left: 25.47, top: 45.32 },
            { left: 40.89, top: 75.61 },
            { left: 60.12, top: 25.94 },
            { left: 75.36, top: 55.27 },
            { left: 85.74, top: 85.43 },
            { left: 90.58, top: 10.19 },
            { left: 15.63, top: 65.82 }
          ];
          
          // Use index in the positions array to ensure uniqueness
          const position = positions[i];
          
          return (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              // Set initial values to match the first animation frame
              scale: 0,
              rotate: 0,
              opacity: 0
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke={starColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
              style={{
                color: starColor,
                fill: "none"
              }} // Add explicit color and fill style to prevent animation warnings
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
    </div>
  )
}
