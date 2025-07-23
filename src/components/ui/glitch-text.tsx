"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  intensity?: number
  speed?: number
}

export function GlitchText({
  text,
  className,
  intensity = 2,
  speed = 0.1
}: GlitchTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <motion.span
        className="relative z-10"
        animate={{
          x: [0, intensity, -intensity, 0],
          textShadow: [
            "0 0 0 transparent",
            `${intensity}px 0 0 #ff0000, -${intensity}px 0 0 #00ffff`,
            `${intensity}px 0 0 #00ffff, -${intensity}px 0 0 #ff0000`,
            "0 0 0 transparent"
          ]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute top-0 left-0 text-red-500 opacity-70"
        animate={{
          x: [0, -intensity, intensity, 0],
          clipPath: [
            "inset(0 0 0 0)",
            "inset(20% 0 30% 0)",
            "inset(60% 0 10% 0)",
            "inset(0 0 0 0)"
          ]
        }}
        transition={{
          duration: speed * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 text-cyan-500 opacity-70"
        animate={{
          x: [0, intensity, -intensity, 0],
          clipPath: [
            "inset(0 0 0 0)",
            "inset(40% 0 20% 0)",
            "inset(10% 0 70% 0)",
            "inset(0 0 0 0)"
          ]
        }}
        transition={{
          duration: speed * 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
    </div>
  )
}
