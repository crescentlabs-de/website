'use client'
import { useId } from 'react'

export default function CrescentLabsLogo({
  width,
  height = 40,
  className = '',
  color = '#111',
}) {
  const uid = useId().replace(/:/g, '')
  const maskId = `moon-${uid}`
  const filterId = `shadow-${uid}`

  return (
    <svg
      viewBox="0 0 420 100"
      height={height}
      {...(width != null ? { width } : {})}
      className={className}
      overflow="visible"
      aria-label="CrescentLabs"
    >
      <defs>
        <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor={color} floodOpacity="0.2" />
        </filter>
        <mask id={maskId}>
          <circle cx="50" cy="50" r="40" fill="white" />
          <circle cx="68" cy="32" r="32" fill="black" />
        </mask>
      </defs>

      {/* Crescent moon */}
      <circle
        cx="50" cy="50" r="40"
        fill={color}
        mask={`url(#${maskId})`}
        filter={`url(#${filterId})`}
      />

      {/* Wordmark */}
      <text
        x="105" y="67"
        fontFamily="Inter, 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="48"
        fill={color}
        filter={`url(#${filterId})`}
      >
        <tspan fontWeight="500">Crescent</tspan><tspan fontWeight="300">Labs</tspan>
      </text>
    </svg>
  )
}
