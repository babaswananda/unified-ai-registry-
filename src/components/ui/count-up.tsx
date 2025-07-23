"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: string
}

export function CountUp({
  end,
  start = 0,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ","
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = start + (end - start) * easeOutQuart
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, start, end, duration])

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals)
    if (separator && num >= 1000) {
      return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    }
    return fixed
  }

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </motion.span>
  )
}
