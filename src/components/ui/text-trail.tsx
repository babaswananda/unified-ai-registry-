"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextTrailProps {
  text: string
  className?: string
  trailLength?: number
  speed?: number
  colors?: string[]
}

interface TrailChar {
  char: string
  id: number
  opacity: number
}

export function TextTrail({
  text,
  className,
  trailLength = 5,
  speed = 100,
  colors = ["text-blue-500", "text-purple-500", "text-pink-500", "text-red-500"]
}: TextTrailProps) {
  const [trail, setTrail] = useState<TrailChar[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        const newChar: TrailChar = {
          char: text[currentIndex],
          id: Date.now() + currentIndex,
          opacity: 1
        }

        setTrail(prev => {
          const updated = [newChar, ...prev.slice(0, trailLength - 1)]
          return updated.map((char, index) => ({
            ...char,
            opacity: 1 - (index / trailLength)
          }))
        })

        setCurrentIndex(prev => prev + 1)
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentIndex(0)
          setTrail([])
        }, 1000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [currentIndex, text, trailLength, speed])

  return (
    <div className={cn("flex items-center", className)}>
      <AnimatePresence>
        {trail.map((char, index) => (
          <motion.span
            key={char.id}
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ 
              opacity: char.opacity, 
              scale: 1 - (index * 0.1), 
              y: 0 
            }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "inline-block font-bold text-2xl",
              colors[index % colors.length]
            )}
            style={{ 
              opacity: char.opacity,
              marginRight: index === 0 ? '0.1em' : '0'
            }}
          >
            {char.char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
