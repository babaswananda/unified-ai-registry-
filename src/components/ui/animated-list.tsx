"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedListItem {
  id: string
  content: React.ReactNode
  delay?: number
}

interface AnimatedListProps {
  items: AnimatedListItem[]
  className?: string
  variant?: "fade" | "slide" | "scale" | "flip"
  stagger?: number
}

export function AnimatedList({
  items,
  className,
  variant = "slide",
  stagger = 0.1
}: AnimatedListProps) {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 }
    },
    flip: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: { opacity: 1, rotateX: 0 },
      exit: { opacity: 0, rotateX: 90 }
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={variants[variant]}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.5,
              delay: (item.delay || 0) + (index * stagger),
              ease: "easeOut"
            }}
            layout
            className="relative"
          >
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Content */}
            <motion.div
              className="relative z-10"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {item.content}
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
