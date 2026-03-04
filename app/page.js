'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import StarField from '@/components/StarField'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

function ScrollProgress() {
  const barRef = useRef(null)
  useEffect(() => {
    const update = () => {
      const el = barRef.current
      if (!el) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      el.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%'
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div ref={barRef} className="scroll-progress" />
}


function ServiceSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = (idx) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length)
      setFading(false)
    }, 380)
  }

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000)
    return () => clearInterval(timer)
  }, [current, slides.length])

  const slide = slides[current]

  return (
    <div className="w-full lg:w-80 hidden lg:block flex-shrink-0">
      <div
        className="rounded-2xl border border-white/10 flex flex-col"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
          minHeight: 260,
        }}
      >
        {/* Content area */}
        <div
          className="flex-1 p-8"
          style={{
            transition: 'opacity 0.38s ease, transform 0.38s ease',
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(12px)' : 'translateY(0)',
          }}
        >
          <h4 className="text-lg font-bold text-white mb-4">{slide.title}</h4>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)', lineHeight: 1.75 }}>
            {slide.desc}
          </p>
        </div>

        {/* Controls */}
        <div className="px-8 pb-7 flex items-center justify-between">
          {/* Dots centered */}
          <button
            onClick={() => goTo(current - 1)}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 8 : 6,
                  height: i === current ? 8 : 6,
                  borderRadius: '50%',
                  background: i === current ? '#00E5CC' : 'rgba(255,255,255,0.22)',
                  transition: 'all 0.35s ease',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { tr } = useLanguage()
  const h = tr?.home || {}
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const blobsRef = useRef(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', service: '', message: '' })
  const [contactStatus, setContactStatus] = useState('idle') // idle | loading | success | error
  const [contactError, setContactError] = useState('')

  useEffect(() => {
    const fn = () => {
      if (blobsRef.current) blobsRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setIsVisible(p => ({ ...p, [e.target.id]: true }))
      }),
      { threshold: 0.08 }
    )
    observerRefs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  const addToRefs = useCallback((el) => {
    if (el && !observerRefs.current.includes(el)) observerRefs.current.push(el)
  }, [])

  const vis = (id, extra = '') => isVisible[id] ? `animate-reveal-spring ${extra}` : 'opacity-0'

  const appCards = [
    {
      href: '/focusmission',
      color: '#00E5CC',
      colorBg: 'bg-[#00E5CC]/10',
      colorText: 'text-[#00E5CC]',
      colorBorder: 'border-[#00E5CC]/20',
      name: 'FocusMission',
      desc: h.focusmissionDesc || '',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      href: '/memorandum',
      color: '#C0C0C8',
      colorBg: 'bg-white/8',
      colorText: 'text-gray-300',
      colorBorder: 'border-white/10',
      name: 'Memorandum',
      desc: h.memorandumDesc || '',
      icon: (
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 600, lineHeight: 1 }}>M</span>
      ),
    },
    {
      href: '/2do',
      color: '#6366F1',
      colorBg: 'bg-indigo-500/10',
      colorText: 'text-indigo-400',
      colorBorder: 'border-indigo-500/20',
      name: '2Do',
      desc: h.twodoDesc || '',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
    },
  ]

  return (
    <main className="bg-[#0A0A0F] min-h-screen overflow-hidden">
      <ScrollProgress />
      <StarField density={200} />
      <Navbar variant="dark" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div ref={blobsRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[160px] animate-breathe" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-[160px] animate-breathe delay-700" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] text-gray-500 uppercase mb-8 animate-fade-in">
            {h.eyebrow || 'CrescentLabs'}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.15] mb-8">
            <span className="block animate-slide-up">
              {(() => {
                const line = h.headline1 || 'Apps die begeistern.'
                const i = line.indexOf(' ')
                return i === -1 ? line : <><span style={{ color: '#00E5CC' }}>{line.slice(0, i)}</span>{line.slice(i)}</>
              })()}
            </span>
            <span className="block animate-slide-up delay-150 pb-[0.2em]">
              {(() => {
                const line = h.headline2 || 'Websites die überzeugen.'
                const i = line.indexOf(' ')
                return i === -1 ? line : <><span style={{ color: '#00E5CC' }}>{line.slice(0, i)}</span>{line.slice(i)}</>
              })()}
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-14 max-w-2xl mx-auto font-light animate-slide-up delay-300"
            style={{ color: 'rgba(255,255,255,0.65)' }}>
            {h.sub || ''}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
            <Link href="#apps" className="btn-primary">{h.ctaPrimary || 'Unsere Apps'}</Link>
            <Link href="/services" className="btn-cyan">{h.ctaSecondary || 'Jetzt zusammenarbeiten'}</Link>
          </div>
        </div>

        {/* Animated scroll arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float opacity-40">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" className="opacity-50 -mt-3">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div id="svc-teaser" ref={addToRefs}
            className={`glass rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10 ${vis('svc-teaser')}`}>

            <div className="flex-1">
              <span className="font-mono text-sm tracking-[0.25em] text-gray-500 uppercase mb-4 block">
                {tr?.nav?.services || 'Leistungen'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {h.servicesTeaser || 'Leistungen für Ihr Unternehmen'}
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', lineHeight: 1.75 }}>
                {h.servicesTeaserSub || ''}
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: '🌐', text: tr?.services?.webTitle || 'Webentwicklung' },
                  { icon: '📱', text: tr?.services?.iosTitle || 'iOS-Entwicklung' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/services" className="btn-primary inline-block">
                {h.servicesCta || 'Alle Leistungen ansehen'}
              </Link>
            </div>

            <ServiceSlider slides={[
              { title: h.tier1Title || 'Launch Page',       desc: h.tier1Desc || '' },
              { title: h.tier2Title || 'Growth Website',    desc: h.tier2Desc || '' },
              { title: h.tier3Title || 'Native App',        desc: h.tier3Desc || '' },
              { title: h.tier4Title || 'Digital Platform',  desc: h.tier4Desc || '' },
            ]} />
          </div>
        </div>
      </section>

      {/* ── APPS ── */}
      <section id="apps" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div id="apps-header" ref={addToRefs} className={`text-center mb-16 ${vis('apps-header')}`}>
            <span className="font-mono text-sm tracking-[0.25em] text-gray-500 uppercase">{tr?.nav?.apps || 'Apps'}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
              {h.appsTitle || 'Drei Apps. Eine Mission.'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.0625rem', lineHeight: 1.75 }} className="max-w-xl mx-auto">
              {h.appsSub || ''}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {appCards.map((app, i) => (
              <div
                key={app.href}
                id={`app-card-${i}`}
                ref={addToRefs}
                className={`app-card group flex flex-col ${isVisible[`app-card-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${app.colorBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  style={{ color: app.color }}
                >
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.name}</h3>
                <p className="mb-6 leading-relaxed text-[0.95rem]" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                  {app.desc}
                </p>
                <Link
                  href={app.href}
                  className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold ${app.colorText} group/link`}
                >
                  {(h.learnMore || 'Mehr erfahren →').replace(' →', '')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="transition-transform group-hover/link:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="contact-box" ref={addToRefs}
            className={`glass rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden ${isVisible['contact-box'] ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <span className="font-mono text-sm tracking-[0.25em] text-gray-500 uppercase mb-4 block">
                {h.sectionGet || 'Kontakt aufnehmen'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 whitespace-pre-line">
                {(h.contactTitle || 'Lassen Sie uns etwas\nAußergewöhnliches bauen').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="mb-10 max-w-xl mx-auto leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', lineHeight: 1.75 }}>
                {h.contactSub || ''}
              </p>

              {contactStatus === 'success' ? (
                <div className="max-w-lg mx-auto py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <p className="text-white text-lg font-semibold mb-2">{h.contactSuccessTitle || 'Nachricht gesendet!'}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>{h.contactSuccessSub || 'Wir melden uns so schnell wie möglich.'}</p>
                </div>
              ) : (
                <form
                  className="space-y-4 text-left max-w-lg mx-auto"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setContactStatus('loading')
                    setContactError('')
                    try {
                      const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(contactForm),
                      })
                      const data = await res.json()
                      if (!res.ok) throw new Error(data.error || 'Fehler')
                      setContactStatus('success')
                    } catch (err) {
                      setContactError(err.message || 'Fehler beim Senden.')
                      setContactStatus('idle')
                    }
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder={h.contactName || 'Ihr Name'}
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors text-[0.95rem]" />
                    <input type="email" required placeholder={h.contactEmail || 'E-Mail-Adresse'}
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors text-[0.95rem]" />
                  </div>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-500 focus:outline-none focus:border-white/30 transition-colors text-[0.95rem]"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="">{h.contactSelect || 'Womit können wir helfen?'}</option>
                    <option value="web">{h.contactOpt1 || 'Website-Entwicklung'}</option>
                    <option value="ios">{h.contactOpt2 || 'iOS-App-Entwicklung'}</option>
                    <option value="both">{h.contactOpt3 || 'Web & iOS'}</option>
                    <option value="other">{h.contactOpt4 || 'Etwas anderes'}</option>
                  </select>
                  <textarea required placeholder={h.contactMessage || 'Erzählen Sie uns von Ihrem Projekt ...'} rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none text-[0.95rem]" />
                  {contactError && (
                    <p className="text-red-400 text-sm">{contactError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={contactStatus === 'loading'}
                    className="btn-cyan w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {contactStatus === 'loading' ? '...' : (h.contactSend || 'Nachricht senden')}
                  </button>
                </form>
              )}

              <p className="text-sm mt-8" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {h.contactOr || 'Oder direkt per E-Mail:'}{' '}
                <a href="mailto:info@crescentlabs.de"
                  className="underline underline-offset-2 transition-colors hover:text-white/70">
                  info@crescentlabs.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  )
}
