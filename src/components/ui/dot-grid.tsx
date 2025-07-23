"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DotGridProps {
  className?: string
  dotSize?: number
  dotColor?: string
  spacing?: number
  fade?: boolean
}

export function DotGrid({
  className,
  dotSize = 1,
  dotColor = "rgb(156, 163, 175)",
  spacing = 20,
  fade = true
}: DotGridProps) {
  const dots = []
  const rows = Math.ceil(100 / (spacing / 10))
  const cols = Math.ceil(100 / (spacing / 10))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push({
        id: `${i}-${j}`,
        x: (j * spacing) + (spacing / 2),
        y: (i * spacing) + (spacing / 2)
      })
    }
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        className="size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {fade && (
            <radialGradient id="dotFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={dotColor} stopOpacity="0.8" />
              <stop offset="50%" stopColor={dotColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={dotColor} stopOpacity="0.1" />
            </radialGradient>
          )}
        </defs>
        
        {dots.map((dot, index) => (
          <motion.circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dotSize}
            fill={fade ? "url(#dotFade)" : dotColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.001,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>
    </div>
  )
}
