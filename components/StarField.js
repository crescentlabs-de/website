'use client'
import { useEffect, useRef } from 'react'

export default function StarField({ density = 150, speed = 'normal' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear existing stars
    container.innerHTML = ''

    // Create stars
    for (let i = 0; i < density; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      
      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      
      // Random size (1-3px)
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      
      // Random animation duration based on speed
      const baseDuration = speed === 'fast' ? 2 : speed === 'slow' ? 5 : 3
      const duration = baseDuration + Math.random() * 3
      star.style.animationDuration = `${duration}s`
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`
      
      // Random opacity
      star.style.opacity = (Math.random() * 0.5 + 0.3).toString()
      
      container.appendChild(star)
    }

    // Add some larger, brighter stars
    for (let i = 0; i < density / 10; i++) {
      const brightStar = document.createElement('div')
      brightStar.className = 'star'
      brightStar.style.left = `${Math.random() * 100}%`
      brightStar.style.top = `${Math.random() * 100}%`
      brightStar.style.width = '3px'
      brightStar.style.height = '3px'
      brightStar.style.background = '#00E5CC'
      brightStar.style.boxShadow = '0 0 10px #00E5CC, 0 0 20px #00E5CC'
      brightStar.style.animationDuration = `${2 + Math.random() * 2}s`
      brightStar.style.animationDelay = `${Math.random() * 2}s`
      container.appendChild(brightStar)
    }
  }, [density, speed])

  return <div ref={containerRef} className="starfield" />
}