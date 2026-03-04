import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, display: 'flex', background: '#050508', borderRadius: 6 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          {/* Crescent moon as path (no mask needed) */}
          <path fill="white" d="M 21 7.5 A 11 11 0 1 0 21 24.5 A 8.5 8.5 0 1 1 21 7.5 Z" />
          {/* Stars */}
          <circle cx="25" cy="8"  r="1"   fill="white" fillOpacity="0.8" />
          <circle cx="27" cy="15" r="0.7" fill="white" fillOpacity="0.6" />
          <circle cx="25" cy="23" r="0.9" fill="white" fillOpacity="0.7" />
          <circle cx="22" cy="5"  r="0.6" fill="white" fillOpacity="0.5" />
        </svg>
      </div>
    ),
    { width: 32, height: 32 }
  )
}
