"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  text: string
  className?: string
  gradient?: string
  animate?: boolean
  speed?: number
}

export function GradientText({
  text,
  className,
  gradient = "from-blue-600 via-purple-600 to-cyan-600",
  animate = true,
  speed = 3
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`,
        animate && "bg-[length:200%_auto]",
        className
      )}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"]
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: speed,
              repeat: Infinity,
              ease: "linear"
            }
          : {}
      }
      style={
        animate
          ? {
              backgroundSize: "200% auto"
            }
          : {}
      }
    >
      {text}
    </motion.span>
  )
}
