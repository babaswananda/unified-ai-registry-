"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  variant?: "fade" | "slide" | "scale" | "rotate"
}

export function SplitText({
  text,
  className,
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
  variant = "fade"
}: SplitTextProps) {
  const words = text.split(" ")

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    rotate: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: { opacity: 1, rotateX: 0 }
    }
  }

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: delay,
        staggerChildren: stagger
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`word-${word}-${index}`}
          className="inline-block mr-2"
          variants={variants[variant]}
          transition={{ duration }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
