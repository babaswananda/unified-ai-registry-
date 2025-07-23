"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AuroraBackgroundProps {
  className?: string
  children?: React.ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true
}: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        {/* Aurora Effect */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
              radial-gradient(ellipse 80% 80% at 80% 50%, rgba(255, 119, 198, 0.3), transparent),
              radial-gradient(ellipse 80% 80% at 20% 50%, rgba(120, 255, 198, 0.3), transparent)
            `
          }}
          animate={{
            background: [
              `radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
               radial-gradient(ellipse 80% 80% at 80% 50%, rgba(255, 119, 198, 0.3), transparent),
               radial-gradient(ellipse 80% 80% at 20% 50%, rgba(120, 255, 198, 0.3), transparent)`,
              `radial-gradient(ellipse 80% 80% at 30% -10%, rgba(255, 119, 198, 0.3), transparent),
               radial-gradient(ellipse 80% 80% at 70% 60%, rgba(120, 255, 198, 0.3), transparent),
               radial-gradient(ellipse 80% 80% at 10% 40%, rgba(120, 119, 198, 0.3), transparent)`,
              `radial-gradient(ellipse 80% 80% at 60% -30%, rgba(120, 255, 198, 0.3), transparent),
               radial-gradient(ellipse 80% 80% at 90% 40%, rgba(120, 119, 198, 0.3), transparent),
               radial-gradient(ellipse 80% 80% at 30% 60%, rgba(255, 119, 198, 0.3), transparent)`
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        {/* Radial Gradient Overlay */}
        {showRadialGradient && (
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 50% 80% at 20% 40%, transparent 0%, rgba(255, 255, 255, 0.1) 100%),
                          radial-gradient(ellipse 50% 80% at 80% 50%, transparent 0%, rgba(255, 255, 255, 0.15) 100%),
                          radial-gradient(ellipse 50% 80% at 40% 80%, transparent 0%, rgba(255, 255, 255, 0.1) 100%)`
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
