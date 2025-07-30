'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-8 z-50 group"
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 scale-150" />
        
        {/* Button */}
        <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-full p-3 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
          <ChevronUp className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </div>
      </div>
    </button>
  )
}
