'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { GlowingEffect } from './glowing-effect'

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
    <div className="fixed bottom-24 right-8 z-50">
      <button
        onClick={scrollToTop}
        className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-full p-3 hover:border-cyan-400/50 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1}
        />
        <ChevronUp className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 relative z-10" />
      </button>
    </div>
  )
}
