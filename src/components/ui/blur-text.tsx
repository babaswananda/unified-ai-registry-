"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export function BlurText({
  text,
  className,
  delay = 0,
  duration = 1
}: BlurTextProps) {
  return (
    <motion.div
      className={cn("", className)}
      initial={{
        filter: "blur(10px)",
        opacity: 0
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {text}
    </motion.div>
  )
}
