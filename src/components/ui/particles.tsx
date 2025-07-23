"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

interface Particle {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

export function Particles({
  className,
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const mouseMoved = useRef(false)
  const canvasSize = useRef({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    
    const handleResize = () => initCanvas()
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasContainerRef.current) {
        const rect = canvasContainerRef.current.getBoundingClientRect()
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
        mouseMoved.current = true
      }
    }

    window.addEventListener("resize", handleResize)
    canvasContainerRef.current?.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvasContainerRef.current?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const initCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) return

    circles.current.length = 0
    canvasSize.current.w = canvasContainerRef.current.offsetWidth
    canvasSize.current.h = canvasContainerRef.current.offsetHeight

    canvasRef.current.width = canvasSize.current.w * dpr
    canvasRef.current.height = canvasSize.current.h * dpr
    canvasRef.current.style.width = `${canvasSize.current.w}px`
    canvasRef.current.style.height = `${canvasSize.current.h}px`
    context.current.scale(dpr, dpr)

    for (let i = 0; i < quantity; i++) {
      const circle: Particle = {
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        translateX: 0,
        translateY: 0,
        size: Math.random() * 2 + size,
        alpha: 0,
        targetAlpha: Math.random() * 0.6 + 0.1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        magnetism: 0.1 + Math.random() * 4
      }
      circles.current.push(circle)
    }
  }

  const animate = () => {
    if (!context.current || !canvasRef.current) return

    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)

    circles.current.forEach((circle, i) => {
      // Handle movement
      circle.x += circle.dx + vx
      circle.y += circle.dy + vy

      // Handle alpha
      circle.alpha += (circle.targetAlpha - circle.alpha) * 0.02

      // Handle mouse interaction
      if (mouseMoved.current) {
        const distance = Math.sqrt(
          Math.pow(mousePosition.current.x - circle.x, 2) +
          Math.pow(mousePosition.current.y - circle.y, 2)
        )
        
        if (distance < 100) {
          circle.alpha = 0.3
          circle.targetAlpha = 0.6
        } else {
          circle.targetAlpha = circle.alpha * 0.95
        }
      }

      // Boundary check
      if (circle.x < 0 || circle.x > canvasSize.current.w) {
        circle.dx = -circle.dx
      }
      if (circle.y < 0 || circle.y > canvasSize.current.h) {
        circle.dy = -circle.dy
      }

      // Draw
      context.current!.globalAlpha = circle.alpha
      context.current!.fillStyle = color
      context.current!.beginPath()
      context.current!.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
      context.current!.fill()
    })

    requestAnimationFrame(animate)
  }

  return (
    <div className={cn("pointer-events-none", className)} ref={canvasContainerRef}>
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}
