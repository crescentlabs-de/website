'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const apps = [
  {
    href: '/focusmission',
    color: '#00E5CC',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    href: '/memorandum',
    color: '#C0C0C8',
    icon: (
      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600, lineHeight: 1 }}>M</span>
    ),
  },
  {
    href: '/2do',
    color: '#6366F1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
]
const appKeys = ['focusmission', 'memorandum', 'twodo']

export default function Navbar({ variant = 'dark' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false)
  const [appsHover, setAppsHover] = useState(false)
  const dropdownTimer = useRef(null)
  const { lang, setLang, tr } = useLanguage()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isDark = variant === 'dark'
  const navBg = scrolled
    ? isDark ? 'bg-[#0A0A0F]/90 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl shadow-sm'
    : 'bg-transparent'
  const textColor = isDark ? 'text-white' : 'text-gray-900'
  const mutedColor = isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
  const borderColor = isDark ? 'border-white/10' : 'border-gray-200'
  const dropdownBg = isDark
    ? 'bg-[#0F0F18]/95 border-white/10'
    : 'bg-white/98 border-gray-200'

  const openDropdown = () => { clearTimeout(dropdownTimer.current); setAppsHover(true) }
  const closeDropdown = () => { dropdownTimer.current = setTimeout(() => setAppsHover(false), 120) }

  const n = tr?.nav || {}

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group flex-shrink-0">
            <svg height="32" viewBox="0 0 83 100" className="transition-transform duration-300 group-hover:scale-110">
              <defs>
                <filter id="navGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <mask id="navMask">
                  <circle cx="50" cy="50" r="47" fill="white" />
                  <circle cx="68" cy="50" r="37" fill="black" />
                </mask>
              </defs>
              <circle cx="50" cy="50" r="47"
                fill={isDark ? 'white' : '#1a1a1a'}
                filter={isDark ? 'url(#navGlow)' : undefined}
                mask="url(#navMask)" />
            </svg>
            <span className={`text-[1.05rem] tracking-tight font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Crescent<span className="font-light">Labs</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">

            <Link href="/services" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mutedColor}`}>
              {n.services || 'Leistungen'}
            </Link>

            {/* Apps dropdown */}
            <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <button className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${mutedColor}`}>
                {n.apps || 'Apps'}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform duration-200 ${appsHover ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {appsHover && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border backdrop-blur-2xl shadow-2xl overflow-hidden ${dropdownBg}`}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <div className="p-2">
                    {apps.map((app, i) => {
                      const key = appKeys[i]
                      const info = n.appsDropdown?.[key] || {}
                      return (
                        <Link
                          key={app.href}
                          href={app.href}
                          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isDark ? 'hover:bg-white/8' : 'hover:bg-gray-50'}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${app.color}22`, color: app.color }}
                          >
                            {app.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.name}</p>
                            <p className={`text-xs truncate ${isDark ? 'text-white/45' : 'text-gray-500'}`}>{info.desc}</p>
                          </div>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className={`flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#contact" className="btn-cyan text-sm py-2.5 px-5 ml-2">
              {n.cta || 'Kontakt'}
            </Link>

            {/* Language switcher */}
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className={`ml-1.5 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border ${
                isDark
                  ? 'border-white/10 text-white/50 hover:text-white/90 hover:border-white/20'
                  : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
              title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            >
              <span className="text-base leading-none">{lang === 'de' ? '🇬🇧' : '🇩🇪'}</span>
              <span>{lang === 'de' ? 'EN' : 'DE'}</span>
            </button>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden p-2 ${textColor}`}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M6 6l12 12M6 18L18 6" />
                : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={`md:hidden py-4 border-t ${borderColor} animate-slide-up`}>
            <div className="flex flex-col gap-0.5">

              <Link
                href="/services"
                className={`px-2 py-3 rounded-lg text-base font-medium ${textColor}`}
                onClick={() => setMobileOpen(false)}
              >
                {n.services || 'Leistungen'}
              </Link>

              {/* Apps accordion */}
              <button
                onClick={() => setMobileAppsOpen(!mobileAppsOpen)}
                className={`flex items-center justify-between w-full px-2 py-3 rounded-lg text-base font-medium ${textColor}`}
              >
                {n.apps || 'Apps'}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform ${mobileAppsOpen ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobileAppsOpen && (
                <div className={`ml-3 mb-1 border-l ${borderColor} pl-4 space-y-1`}>
                  {apps.map((app, i) => {
                    const info = n.appsDropdown?.[appKeys[i]] || {}
                    return (
                      <Link
                        key={app.href}
                        href={app.href}
                        className={`flex items-center gap-3 py-2.5 ${mutedColor}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${app.color}22`, color: app.color }}>
                          {app.icon}
                        </div>
                        <span className="text-sm font-medium">{info.name}</span>
                      </Link>
                    )
                  })}
                </div>
              )}

              <div className={`flex items-center gap-3 pt-3 mt-1 border-t ${borderColor}`}>
                <Link
                  href="/#contact"
                  className="btn-cyan flex-1 text-center text-sm py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {n.cta || 'Kontakt'}
                </Link>
                <button
                  onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                  className={`flex items-center gap-1 px-3 py-3 rounded-xl border text-sm ${isDark ? 'border-white/10 text-white/60' : 'border-gray-200 text-gray-500'}`}
                >
                  <span className="text-base">{lang === 'de' ? '🇬🇧' : '🇩🇪'}</span>
                  <span className="text-xs font-semibold uppercase">{lang === 'de' ? 'EN' : 'DE'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
