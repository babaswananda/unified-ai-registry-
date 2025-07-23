"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollVelocityProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
  direction?: "left" | "right"
}

export function ScrollVelocity({
  children,
  className,
  baseVelocity = 100,
  direction = "left"
}: ScrollVelocityProps) {
  const baseX = useRef(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useRef(0)
  const smoothVelocity = useSpring(scrollVelocity.current, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const [repeatCount, setRepeatCount] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const directionFactor = direction === "left" ? -1 : 1
  const x = useTransform(velocityFactor, (latest) => {
    let moveBy = directionFactor * baseVelocity * (latest / 1000)
    
    if (velocityFactor.get() < 0) {
      directionFactor * -1
    }

    moveBy += directionFactor * moveBy * Math.abs(latest)
    baseX.current += moveBy

    return baseX.current
  })

  useEffect(() => {
    const updateRepeatCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const contentWidth = containerRef.current.scrollWidth / repeatCount
        const newRepeatCount = Math.ceil(containerWidth / contentWidth) + 1
        setRepeatCount(newRepeatCount)
      }
    }

    updateRepeatCount()
    window.addEventListener("resize", updateRepeatCount)
    return () => window.removeEventListener("resize", updateRepeatCount)
  }, [repeatCount])

  useEffect(() => {
    const updateVelocity = () => {
      scrollVelocity.current = scrollY.getVelocity()
    }

    const unsubscribe = scrollY.on("change", updateVelocity)
    return unsubscribe
  }, [scrollY])

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)} ref={containerRef}>
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        {Array.from({ length: repeatCount }).map((_, i) => (
          <span key={`scroll-velocity-item-${i}`} className="block mr-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
