"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CurvedTextProps {
  text: string
  className?: string
  radius?: number
  fontSize?: number
  animate?: boolean
  speed?: number
}

export function CurvedText({
  text,
  className,
  radius = 100,
  fontSize = 16,
  animate = true,
  speed = 10
}: CurvedTextProps) {
  const characters = text.split("")
  const angleStep = (2 * Math.PI) / characters.length

  return (
    <div className={cn("relative", className)} style={{ width: radius * 2, height: radius * 2 }}>
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="absolute inset-0"
      >
        <defs>
          <path
            id="circle"
            d={`M ${radius}, ${radius} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        
        <motion.text
          fontSize={fontSize}
          fill="currentColor"
          className="font-medium"
          animate={animate ? { rotate: 360 } : {}}
          transition={animate ? { duration: speed, repeat: Infinity, ease: "linear" } : {}}
          style={{ transformOrigin: `${radius}px ${radius}px` }}
        >
          <textPath href="#circle" startOffset="0%">
            {text}
          </textPath>
        </motion.text>
      </svg>
    </div>
  )
}
