"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ScrambleTextProps {
  text: string
  className?: string
  speed?: number
  scrambleSpeed?: number
  characters?: string
}

export function ScrambleText({
  text,
  className,
  speed = 50,
  scrambleSpeed = 20,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const scramble = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsAnimating(false)
      }

      iteration += 1 / 3
    }, scrambleSpeed)
  }

  useEffect(() => {
    const timeout = setTimeout(scramble, speed)
    return () => clearTimeout(timeout)
  }, [text])

  return (
    <span
      className={cn("font-mono cursor-pointer", className)}
      onClick={scramble}
    >
      {displayText || text}
    </span>
  )
}
