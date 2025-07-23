"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LetterGlitchProps {
  text: string
  className?: string
  glitchChars?: string
  speed?: number
  intensity?: number
}

export function LetterGlitch({
  text,
  className,
  glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?",
  speed = 50,
  intensity = 3
}: LetterGlitchProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitch = () => {
    if (isGlitching) return
    
    setIsGlitching(true)
    let iterations = 0
    const maxIterations = intensity

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (Math.random() < 0.3 && iterations < maxIterations) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            }
            return char
          })
          .join("")
      )

      iterations++

      if (iterations >= maxIterations) {
        setDisplayText(text)
        clearInterval(interval)
        setIsGlitching(false)
      }
    }, speed)
  }

  useEffect(() => {
    const randomGlitch = () => {
      if (Math.random() < 0.1) { // 10% chance every interval
        glitch()
      }
    }

    const interval = setInterval(randomGlitch, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      className={cn("font-mono cursor-pointer select-none", className)}
      onClick={glitch}
      whileHover={{ scale: 1.05 }}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #ff0000, -2px 0 0 #00ffff",
          "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
          "0 0 0 transparent"
        ]
      } : {}}
      transition={{
        duration: 0.1,
        repeat: isGlitching ? 3 : 0
      }}
    >
      {displayText}
    </motion.span>
  )
}
