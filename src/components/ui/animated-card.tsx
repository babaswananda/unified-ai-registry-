"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Particles } from "./particles"
import { DotGrid } from "./dot-grid"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  variant?: "spotlight" | "tilt" | "glare" | "particles" | "dots" | "ripple"
  spotlightColor?: string
  particleColor?: string
  dotColor?: string
}

export function AnimatedCard({
  children,
  className,
  variant = "spotlight",
  spotlightColor = "rgba(59, 130, 246, 0.1)",
  particleColor = "#3b82f6",
  dotColor = "rgb(59, 130, 246)"
}: AnimatedCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })

    // For tilt effect
    if (variant === "tilt") {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * -10
      const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * 10
      setRotateX(rotateXValue)
      setRotateY(rotateYValue)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const baseClasses = "relative overflow-hidden rounded-lg border border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent p-6"

  const cardContent = (
    <>
      {/* Background Effects */}
      {variant === "particles" && (
        <Particles 
          className="absolute inset-0 opacity-30" 
          quantity={20} 
          color={particleColor}
          size={0.5}
        />
      )}
      
      {variant === "dots" && (
        <DotGrid 
          className="absolute inset-0 opacity-20" 
          dotColor={dotColor}
          spacing={15}
          dotSize={0.5}
        />
      )}

      {/* Spotlight effect */}
      {variant === "spotlight" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: isHovered
              ? `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)`
              : "none",
            opacity: isHovered ? 1 : 0
          }}
        />
      )}

      {/* Glare effect */}
      {variant === "glare" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: isHovered
              ? `linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`
              : "none",
            transform: isHovered
              ? `translate(${(mousePosition.x - 150) * 0.1}px, ${(mousePosition.y - 150) * 0.1}px)`
              : "none",
            opacity: isHovered ? 1 : 0
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </>
  )

  if (variant === "tilt") {
    return (
      <motion.div
        ref={cardRef}
        className={cn(baseClasses, className)}
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {cardContent}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(baseClasses, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {cardContent}
    </motion.div>
  )
}
