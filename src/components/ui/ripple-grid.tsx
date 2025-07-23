"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RippleGridProps {
  className?: string
  gridSize?: number
  rippleColor?: string
  rippleSpeed?: number
  maxRipples?: number
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export function RippleGrid({
  className,
  gridSize = 20,
  rippleColor = "rgba(59, 130, 246, 0.5)",
  rippleSpeed = 2,
  maxRipples = 5
}: RippleGridProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [nextId, setNextId] = useState(0)

  const createRipple = (x: number, y: number) => {
    const newRipple: Ripple = {
      id: nextId,
      x,
      y,
      size: 0,
      opacity: 1
    }

    setRipples(prev => {
      const updated = [...prev, newRipple]
      return updated.slice(-maxRipples)
    })
    setNextId(prev => prev + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples(prev =>
        prev
          .map(ripple => ({
            ...ripple,
            size: ripple.size + rippleSpeed,
            opacity: Math.max(0, ripple.opacity - 0.02)
          }))
          .filter(ripple => ripple.opacity > 0)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [rippleSpeed])

  useEffect(() => {
    const createRandomRipple = () => {
      const x = Math.random() * 100
      const y = Math.random() * 100
      createRipple(x, y)
    }

    const interval = setInterval(createRandomRipple, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    createRipple(x, y)
  }

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden cursor-pointer", className)}
      onClick={handleClick}
    >
      {/* Grid */}
      <svg className="size-full" viewBox="0 0 100 100">
        <defs>
          <pattern
            id="grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              className="text-gray-300 dark:text-gray-700"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Ripples */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border-2 pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            borderColor: rippleColor,
            opacity: ripple.opacity,
            transform: "translate(-50%, -50%)"
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        />
      ))}
    </div>
  )
}
