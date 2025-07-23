"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GridDistortionProps {
  className?: string
  gridSize?: number
  distortionStrength?: number
  color?: string
}

export function GridDistortion({
  className,
  gridSize = 20,
  distortionStrength = 10,
  color = "#3b82f6"
}: GridDistortionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      ctx.strokeStyle = color
      ctx.lineWidth = 0.5

      const cols = Math.ceil(canvas.offsetWidth / gridSize)
      const rows = Math.ceil(canvas.offsetHeight / gridSize)

      // Draw vertical lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          
          // Calculate distortion based on mouse distance
          const dx = mousePosition.current.x - x
          const dy = mousePosition.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150
          
          let distortedX = x
          let distortedY = y
          
          if (distance < maxDistance) {
            const factor = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            distortedX += Math.cos(angle) * factor * distortionStrength
            distortedY += Math.sin(angle) * factor * distortionStrength
          }

          if (j === 0) {
            ctx.moveTo(distortedX, distortedY)
          } else {
            ctx.lineTo(distortedX, distortedY)
          }
        }
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath()
        for (let i = 0; i <= cols; i++) {
          const x = i * gridSize
          const y = j * gridSize
          
          // Calculate distortion based on mouse distance
          const dx = mousePosition.current.x - x
          const dy = mousePosition.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150
          
          let distortedX = x
          let distortedY = y
          
          if (distance < maxDistance) {
            const factor = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            distortedX += Math.cos(angle) * factor * distortionStrength
            distortedY += Math.sin(angle) * factor * distortionStrength
          }

          if (i === 0) {
            ctx.moveTo(distortedX, distortedY)
          } else {
            ctx.lineTo(distortedX, distortedY)
          }
        }
        ctx.stroke()
      }
    }

    const animate = () => {
      drawGrid()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    canvas.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gridSize, distortionStrength, color])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
