"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltedCardProps {
  children: React.ReactNode
  className?: string
  tiltMaxAngle?: number
  scale?: number
  perspective?: number
}

export function TiltedCard({
  children,
  className,
  tiltMaxAngle = 15,
  scale = 1.05,
  perspective = 1000
}: TiltedCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * -tiltMaxAngle
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * tiltMaxAngle
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6",
        className
      )}
      style={{
        perspective: `${perspective}px`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? scale : 1
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {children}
    </motion.div>
  )
}
