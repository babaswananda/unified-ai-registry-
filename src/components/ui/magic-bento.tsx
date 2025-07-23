"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoItem {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
  background?: string
}

interface MagicBentoProps {
  items: BentoItem[]
  className?: string
}

export function MagicBento({ items, className }: MagicBentoProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={cn(
            "relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 cursor-pointer",
            item.className
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          onHoverStart={() => setHoveredItem(item.id)}
          onHoverEnd={() => setHoveredItem(null)}
        >
          {/* Background Effect */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: item.background || "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
            }}
            animate={{
              opacity: hoveredItem === item.id ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating Particles */}
          {hoveredItem === item.id && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${item.id}-${i}`}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: "100%",
                    opacity: 0
                  }}
                  animate={{
                    y: "-10%",
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Content */}
          <div className="relative z-10">
            {item.icon && (
              <motion.div
                className="mb-4"
                animate={{
                  rotate: hoveredItem === item.id ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
            )}
            
            <motion.h3
              className="text-lg font-semibold mb-2"
              animate={{
                color: hoveredItem === item.id ? "#3b82f6" : "currentColor"
              }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400"
              animate={{
                y: hoveredItem === item.id ? -2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {item.description}
            </motion.p>
          </div>

          {/* Border Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-blue-500 opacity-0"
            animate={{
              opacity: hoveredItem === item.id ? 0.5 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
