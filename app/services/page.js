'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

function CodeRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Code-related characters — mix of syntax & keywords
    const pool = '{}()[];=><.,/*@$01\\SwiftUIvarletconstfuncreturnimportexport'.split('')
    const keywords = ['SwiftUI', 'React', 'func ', 'const ', 'return', '=> {', '.map(', 'async', 'await ', '@State', 'class ', 'import']
    const fontSize = 13
    const colWidth = 20

    let w, h, columns, drops

    const init = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      columns = Math.floor(w / colWidth)
      drops = Array.from({ length: columns }, (_, i) => ({
        y: Math.random() * -80,
        speed: 0.18 + Math.random() * 0.22,
        opacity: 0.028 + (i % 7) * 0.007,
        // ~15% of columns show a keyword fragment instead of single char
        isKw: Math.random() < 0.15,
        kw: keywords[Math.floor(Math.random() * keywords.length)],
        kwTimer: 0,
      }))
    }

    init()
    window.addEventListener('resize', init)

    let scrollY = 0
    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    let frame
    const draw = () => {
      // Semi-transparent fill to create fading trail
      ctx.fillStyle = 'rgba(5, 5, 8, 0.038)'
      ctx.fillRect(0, 0, w, h)

      const speedBoost = 1 + scrollY * 0.00035

      for (let i = 0; i < columns; i++) {
        const d = drops[i]
        // Skip every 3rd column for a sparser, more elegant look
        if (i % 3 === 1) continue

        ctx.font = `${fontSize}px "Space Mono", monospace`

        const headGlow = d.y * fontSize > 0 && d.y * fontSize < h && Math.random() > 0.94
        if (headGlow) {
          ctx.fillStyle = `rgba(160, 255, 240, 0.18)`
        } else {
          ctx.fillStyle = `rgba(0, 229, 204, ${d.opacity})`
        }

        const text = d.isKw && d.kwTimer > 0
          ? d.kw.charAt(Math.floor(Math.random() * d.kw.length))
          : pool[Math.floor(Math.random() * pool.length)]

        ctx.fillText(text, i * colWidth, d.y * fontSize)

        d.y += d.speed * speedBoost
        d.kwTimer = Math.max(0, d.kwTimer - 1)

        if (d.y * fontSize > h && Math.random() > 0.974) {
          d.y = Math.random() * -40
          d.speed = 0.18 + Math.random() * 0.22
          d.opacity = 0.028 + (i % 7) * 0.007
          d.isKw = Math.random() < 0.15
          d.kw = keywords[Math.floor(Math.random() * keywords.length)]
          d.kwTimer = d.kw.length * 3
        }
      }

      frame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', init)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ zIndex: 0, width: '100vw', height: '100svh' }}
    />
  )
}

export default function Services() {
  const { tr } = useLanguage()
  const s = tr?.services || {}
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const blobRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle') // idle | loading | success | error
  const [formError, setFormError] = useState('')

  useEffect(() => {
    const onScroll = () => {
      if (blobRef.current) blobRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.06 }
    )
    observerRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) observerRefs.current.push(el)
  }

  const vis = (id) => isVisible[id] ? 'animate-reveal-spring' : 'opacity-0'

  const steps = [
    { num: '01', title: s.step1Title || 'Kennenlernen', desc: s.step1 || '' },
    { num: '02', title: s.step2Title || 'Konzept & Angebot', desc: s.step2 || '' },
    { num: '03', title: s.step3Title || 'Umsetzung', desc: s.step3 || '' },
    { num: '04', title: s.step4Title || 'Launch & Support', desc: s.step4 || '' },
  ]

  const whyPoints = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: s.why1Title || 'Direkt & transparent',
      desc: s.why1 || '',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: s.why2Title || 'Schnell & zuverlässig',
      desc: s.why2 || '',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: s.why3Title || 'Qualität die hält',
      desc: s.why3 || '',
    },
  ]

  return (
    <main className="bg-[#050508] min-h-svh overflow-hidden">
      <CodeRain />
      <div className="relative z-[1]">
      <Navbar variant="dark" />

      {/* HERO */}
      <section className="relative min-h-svh flex items-center justify-center px-6 pt-20">
        {/* Background blobs */}
        <div ref={blobRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] animate-breathe" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[180px] animate-breathe delay-700" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              {s.heroEyebrow || 'Leistungen'}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.08] tracking-tight mb-8 animate-slide-up">
            {(s.heroHeadline || 'Ihr digitaler Auftritt.\nEndlich professionell.').split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'block text-gradient-purple' : 'block'}>{line}</span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up delay-100">
            {s.heroSub || 'Wir helfen kleinen und mittelständischen Unternehmen, mit moderner Technologie mehr Kunden zu gewinnen.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
              {s.heroCta || 'Kostenloses Erstgespräch'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 text-gray-300 px-8 py-4 rounded-full font-medium border border-white/10 hover:border-white/30 hover:text-white transition-all hover:-translate-y-0.5">
              {s.solutionTitle || 'Unsere Leistungen'}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-1 text-white/30 animate-bounce" style={{ animationDuration: '2s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: -8, opacity: 0.5 }}><path d="M6 9l6 6 6-6" /></svg>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            id="pain-header"
            ref={addToRefs}
            className={`text-center mb-16 ${vis('pain-header')}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {s.problemTitle || 'Kennen Sie das?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: s.pain1Title || 'Ihre Website ist veraltet', desc: s.pain1 || '', icon: '🌐' },
              { title: s.pain2Title || 'Keine digitale Präsenz', desc: s.pain2 || '', icon: '📉' },
              { title: s.pain3Title || 'Zu teuer, zu langsam', desc: s.pain3 || '', icon: '💸' },
            ].map((pain, i) => (
              <div
                key={i}
                id={`pain-${i}`}
                ref={addToRefs}
                className={`relative p-8 rounded-2xl border border-red-500/10 bg-red-500/5 ${isVisible[`pain-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{pain.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{pain.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="services" className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div
            id="services-header"
            ref={addToRefs}
            className={`text-center mb-16 ${vis('services-header')}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {s.packagesTitle || 'Unsere Pakete'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {s.packagesSub || 'Von der ersten Seite bis zur vollständigen digitalen Plattform — das richtige Paket für jede Phase.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 'tier1',
                badge: s.tier1Badge || 'Website',
                badgeColor: 'rgba(129,140,248,0.1)',
                badgeBorder: 'rgba(129,140,248,0.3)',
                badgeText: '#818CF8',
                lineVia: 'via-indigo-500/50',
                stroke: '#818CF8',
                hoverBorder: 'hover:border-indigo-500/40',
                ctaClass: 'text-indigo-400 hover:text-indigo-300',
                featured: false,
                title: s.tier1Title || 'Launch Page',
                ideal: s.tier1Ideal || 'Ideal für: Startups, Kampagnen, lokale Unternehmen',
                desc: s.tier1Desc || '',
                features: s.tier1Features || [],
              },
              {
                id: 'tier2',
                badge: s.tier2Badge || 'Website',
                badgeColor: 'rgba(167,139,250,0.1)',
                badgeBorder: 'rgba(167,139,250,0.3)',
                badgeText: '#A78BFA',
                lineVia: 'via-violet-500/50',
                stroke: '#A78BFA',
                hoverBorder: 'hover:border-violet-500/40',
                ctaClass: 'text-violet-400 hover:text-violet-300',
                featured: false,
                title: s.tier2Title || 'Growth Website',
                ideal: s.tier2Ideal || 'Ideal für: KMUs mit mehreren Leistungen',
                desc: s.tier2Desc || '',
                features: s.tier2Features || [],
              },
              {
                id: 'tier3',
                badge: s.tier3Badge || 'iOS App',
                badgeColor: 'rgba(34,211,238,0.1)',
                badgeBorder: 'rgba(34,211,238,0.3)',
                badgeText: '#22D3EE',
                lineVia: 'via-cyan-500/50',
                stroke: '#22D3EE',
                hoverBorder: 'hover:border-cyan-500/40',
                ctaClass: 'text-cyan-400 hover:text-cyan-300',
                featured: false,
                title: s.tier3Title || 'Native App',
                ideal: s.tier3Ideal || 'Ideal für: Kundenbindung, interne Prozesse',
                desc: s.tier3Desc || '',
                features: s.tier3Features || [],
              },
              {
                id: 'tier4',
                badge: s.tier4Badge || 'Komplett-Lösung',
                badgeColor: 'rgba(129,140,248,0.18)',
                badgeBorder: 'rgba(129,140,248,0.45)',
                badgeText: '#C4B5FD',
                lineVia: 'via-indigo-400/70',
                stroke: '#C4B5FD',
                hoverBorder: 'hover:border-indigo-400/50',
                ctaClass: 'text-indigo-300 hover:text-indigo-200',
                featured: true,
                title: s.tier4Title || 'Digital Platform',
                ideal: s.tier4Ideal || 'Ideal für: Wachstumsstarke Unternehmen',
                desc: s.tier4Desc || '',
                features: s.tier4Features || [],
              },
            ].map((pkg, i) => (
              <div
                key={pkg.id}
                id={`pkg-${i}`}
                ref={addToRefs}
                className={`relative p-8 rounded-3xl border flex flex-col ${pkg.featured ? 'border-indigo-500/30 bg-indigo-950/20' : 'border-white/10 bg-white/3'} ${pkg.hoverBorder} transition-all duration-500 ${isVisible[`pkg-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${pkg.lineVia} to-transparent rounded-t-3xl`} />

                {/* Icon + Badge row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: pkg.badgeColor }}>
                    {i === 0 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={pkg.stroke} strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M3 9h18M7 13h6M7 17h4"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={pkg.stroke} strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M3 9h18M9 21V9"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={pkg.stroke} strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2"/>
                        <path d="M12 18h.01"/>
                      </svg>
                    )}
                    {i === 3 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={pkg.stroke} strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ color: pkg.badgeText, background: pkg.badgeColor, border: `1px solid ${pkg.badgeBorder}` }}>
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                <p className="text-xs mb-4" style={{ color: 'rgba(156,163,175,0.65)' }}>{pkg.ideal}</p>
                <p className="text-gray-400 leading-relaxed text-sm mb-6">{pkg.desc}</p>

                <div className="w-full h-px bg-white/5 mb-6" />

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={pkg.stroke} strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a href="#contact" className={`inline-flex items-center gap-2 font-medium text-sm transition-colors ${pkg.ctaClass}`}>
                    {s.heroCta || 'Kostenloses Erstgespräch'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            id="process-header"
            ref={addToRefs}
            className={`text-center mb-20 ${vis('process-header')}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {s.processTitle || 'So arbeiten wir'}
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/40 to-transparent hidden sm:block md:-translate-x-px" />

            <div className="space-y-12 md:space-y-0">
              {steps.map((step, i) => (
                <div
                  key={i}
                  id={`step-${i}`}
                  ref={addToRefs}
                  className={`relative flex md:items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible[`step-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className={`inline-block bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="text-indigo-400 font-mono text-sm font-bold mb-2">{step.num}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[#050508] border-2 border-indigo-500/50 flex items-center justify-center z-10 flex-shrink-0 hidden sm:flex">
                    <span className="text-indigo-400 font-bold text-sm">{i + 1}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/15 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div
            id="why-header"
            ref={addToRefs}
            className={`text-center mb-16 ${vis('why-header')}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {s.whyTitle || 'Warum CrescentLabs?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPoints.map((point, i) => (
              <div
                key={i}
                id={`why-${i}`}
                ref={addToRefs}
                className={`text-center ${isVisible[`why-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-5 text-indigo-400">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div
            id="contact-header"
            ref={addToRefs}
            className={`text-center mb-12 ${vis('contact-header')}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {s.contactTitle || 'Bereit anzufangen?'}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {s.contactSub || 'Schreiben Sie uns — das Erstgespräch ist kostenlos und unverbindlich.'}
            </p>
          </div>

          <div
            id="contact-form"
            ref={addToRefs}
            className={`glass rounded-3xl p-8 md:p-10 ${vis('contact-form')}`}
          >
            {formStatus === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="text-white text-lg font-semibold mb-2">{s.contactSuccessTitle || 'Anfrage erhalten!'}</p>
                <p className="text-gray-400 text-sm">{s.contactSuccessSub || 'Wir melden uns innerhalb von 24 Stunden.'}</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault()
                  setFormStatus('loading')
                  setFormError('')
                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(form),
                    })
                    const data = await res.json()
                    if (!res.ok) throw new Error(data.error || 'Fehler')
                    setFormStatus('success')
                  } catch (err) {
                    setFormError(err.message || 'Fehler beim Senden.')
                    setFormStatus('idle')
                  }
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder={s.contactName || 'Ihr Name'}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                  />
                  <input
                    type="email"
                    required
                    placeholder={s.contactEmail || 'E-Mail-Adresse'}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder={s.contactCompany || 'Unternehmen (optional)'}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                />
                <textarea
                  rows={5}
                  required
                  placeholder={s.contactMessage || 'Was brauchen Sie? Beschreiben Sie kurz Ihr Projekt ...'}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none text-sm"
                />
                {formError && (
                  <p className="text-red-400 text-sm">{formError}</p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? '...' : (s.contactSend || 'Kostenlos anfragen')}
                </button>
              </form>
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-2">{s.contactOr || 'Oder direkt per E-Mail:'}</p>
              <a href="mailto:info@crescentlabs.de" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-sm">
                info@crescentlabs.de
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
      </div>
    </main>
  )
}
