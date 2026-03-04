'use client'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer({ variant = 'dark' }) {
  const { tr } = useLanguage()
  const f = tr?.footer || {}

  const isDark = variant === 'dark'
  const bgColor = isDark ? 'bg-[#050508]' : 'bg-gray-50'
  const textColor = isDark ? 'text-white' : 'text-gray-900'
  const mutedColor = isDark ? 'text-gray-500' : 'text-gray-500'
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-gray-900'
  const borderColor = isDark ? 'border-white/10' : 'border-gray-200'
  const year = new Date().getFullYear()

  return (
    <footer className={`${bgColor} ${textColor} py-16 relative z-10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-0 mb-5">
              <svg height="30" viewBox="0 0 83 100">
                <defs>
                  <mask id="footerMask">
                    <circle cx="50" cy="50" r="47" fill="white" />
                    <circle cx="68" cy="50" r="37" fill="black" />
                  </mask>
                </defs>
                <circle cx="50" cy="50" r="47" fill={isDark ? 'white' : '#1a1a1a'} mask="url(#footerMask)" />
              </svg>
              <span className="text-base tracking-tight">
                <span className="font-medium">Crescent</span><span className="font-light">Labs</span>
              </span>
            </Link>
            <p className={`${mutedColor} text-sm leading-relaxed`}>
              {f.tagline || 'Wir schaffen digitale Erlebnisse, die begeistern.'}
            </p>
          </div>

          {/* Apps */}
          <div>
            <h4 className={`font-semibold mb-4 text-xs uppercase tracking-widest ${mutedColor}`}>{f.apps || 'Apps'}</h4>
            <ul className="space-y-3">
              {[
                { href: '/focusmission', label: 'FocusMission' },
                { href: '/memorandum', label: 'Memorandum' },
                { href: '/2do', label: '2Do' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={`${mutedColor} ${hoverColor} transition-colors text-sm`}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold mb-4 text-xs uppercase tracking-widest ${mutedColor}`}>{f.services || 'Leistungen'}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className={`${mutedColor} ${hoverColor} transition-colors text-sm`}>
                  {f.webDev || 'Webentwicklung'}
                </Link>
              </li>
              <li>
                <Link href="/services" className={`${mutedColor} ${hoverColor} transition-colors text-sm`}>
                  {f.iosDev || 'iOS-Entwicklung'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`font-semibold mb-4 text-xs uppercase tracking-widest ${mutedColor}`}>{f.connect || 'Kontakt'}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@crescentlabs.de" className={`${mutedColor} ${hoverColor} transition-colors text-sm`}>
                  info@crescentlabs.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="text-center md:text-left">
            <p className={`${mutedColor} text-sm`}>© {year} CrescentLabs UG (haftungsbeschränkt).</p>
            <p className={`${mutedColor} text-sm mt-1`}>{f.engineered || 'Entwickelt in Deutschland'}</p>
          </div>
          <div className="flex gap-6">
            {[
              { href: '/privacy', label: f.privacy || 'Datenschutz' },
              { href: '/terms', label: f.terms || 'AGB' },
              { href: '/imprint', label: f.imprint || 'Impressum' },
            ].map(l => (
              <Link key={l.href} href={l.href} className={`${mutedColor} ${hoverColor} transition-colors text-sm`}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
