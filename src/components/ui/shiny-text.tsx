"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShinyTextProps {
  text: string
  className?: string
  shimmerWidth?: number
  speed?: number
}

export function ShinyText({
  text,
  className,
  shimmerWidth = 100,
  speed = 3
}: ShinyTextProps) {
  return (
    <div className={cn("relative inline-block overflow-hidden", className)}>
      <span className="relative z-10">{text}</span>
      <motion.div
        className="absolute inset-0 -top-0 -left-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{ width: `${shimmerWidth}px` }}
        animate={{
          x: ["-100px", "calc(100% + 100px)"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
