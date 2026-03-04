'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function Memorandum() {
  const { tr, lang } = useLanguage()
  const m = tr?.memorandum || {}
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.08 }
    )
    observerRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) observerRefs.current.push(el)
  }

  const vis = (id, extra = '') => isVisible[id] ? `animate-reveal-spring ${extra}` : 'opacity-0'

  const features = m.features || [
    { title: 'Minimales Design', desc: 'Kein Durcheinander, keine Ablenkung.' },
    { title: 'Tägliche Impulse', desc: 'Schreibimpulse für deine Reflexion.' },
    { title: 'Datenschutz zuerst', desc: 'Dein Tagebuch bleibt auf deinem Gerät.' },
    { title: 'Organisierte Einträge', desc: 'Suche nach Datum oder Stichwort.' },
    { title: 'Zeitbewusste Begrüßung', desc: 'Begrüßungen die sich je nach Tageszeit ändern.' },
    { title: 'Export & Backup', desc: 'Exportiere deine Einträge jederzeit.' },
  ]

  const featureIcons = [
    <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>,
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></svg>,
    <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
  ]

  return (
    <main className="bg-[#F8F6F2] min-h-svh overflow-hidden">
      <Navbar variant="light" />

      {/* HERO */}
      <section className="relative min-h-svh flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <span className="text-[120px] md:text-[180px] font-serif text-gray-200 leading-none select-none"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>M</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 animate-slide-up"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {m.headline || 'Memorandum'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-4 animate-slide-up delay-100 font-light">
            {m.sub || 'Deine Gedanken. Wunderschön bewahrt.'}
          </p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto animate-slide-up delay-200 leading-relaxed">
            {m.body || 'Ein minimales Tagebuch, das dir aus dem Weg geht.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <a href="#"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:-translate-y-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              {m.ctaDownload || 'Für iOS laden'}
            </a>
            <a href="#features"
              className="inline-flex items-center justify-center gap-2 text-gray-600 px-8 py-4 rounded-full font-medium border border-gray-300 hover:border-gray-400 hover:-translate-y-0.5 transition-all">
              {m.ctaLearn || 'Mehr erfahren'}
            </a>
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div id="memo-preview" ref={addToRefs} className={`relative ${isVisible['memo-preview'] ? 'animate-rise-up' : 'opacity-0'}`}>
            <div className="relative mx-auto max-w-sm">
              <div className="relative bg-gray-900 phone-mockup">
                <div style={{ background: '#F8F6F2', borderRadius: '2.5rem', overflow: 'hidden', aspectRatio: '9/19.5', position: 'relative' }}>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10" />
                  <div style={{ paddingTop: 64, paddingLeft: 20, paddingRight: 20, height: '100%', position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
                      <div>
                        <p style={{ fontSize: 10, color: '#aaa', marginBottom: 4 }}>Memorandum</p>
                        <h2 style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 2 }}>{lang === 'de' ? 'Gute Nacht, Freund' : 'Good night, Friend'}</h2>
                        <p style={{ fontSize: 10, color: '#aaa' }}>{lang === 'de' ? 'Samstag, 8. November 2025' : 'Saturday, November 8, 2025'}</p>
                      </div>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                        </svg>
                      </div>
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <h3 style={{ fontSize: 22, color: '#ccc', marginBottom: 4, fontFamily: 'Cormorant Garamond, serif' }}>{lang === 'de' ? 'Titel' : 'Title'}</h3>
                      <p style={{ fontSize: 12, color: '#bbb', lineHeight: 1.5 }}>{lang === 'de' ? 'Was beschäftigt dich heute?' : 'What\'s on your mind today?'}</p>
                    </div>
                    <div style={{ position: 'absolute', bottom: 120, left: '50%', transform: 'translateX(-50%)', userSelect: 'none', pointerEvents: 'none' }}>
                      <span style={{ fontSize: 180, color: 'rgba(0,0,0,0.05)', fontFamily: 'Cormorant Garamond, serif', lineHeight: 1 }}>M</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
                        {[
                          <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
                          <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
                          <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
                        ].map((icon, i) => (
                          <div key={i} style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.8)', boxShadow: '0 2px 6px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-12 -bottom-8 h-16 bg-gray-900/8 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div id="memo-features-header" ref={addToRefs} className={`text-center mb-20 ${vis('memo-features-header')}`}>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {m.featuresTitle || 'Mit Intention gestaltet'}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{m.featuresSub || ''}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <div
                key={i}
                id={`memo-feature-${i}`}
                ref={addToRefs}
                className={`group ${isVisible[`memo-feature-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="text-gray-400 mb-4 group-hover:text-gray-600 transition-colors">{featureIcons[i]}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-32 px-6 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto text-center">
          <div id="memo-quote" ref={addToRefs} className={isVisible['memo-quote'] ? 'animate-reveal-blur' : 'opacity-0'}>
            <blockquote className="text-3xl md:text-4xl font-serif text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {m.quote || '"Das Schreiben ist der Akt des Entdeckens, was man glaubt."'}
            </blockquote>
            <cite className="text-gray-400 text-sm uppercase tracking-wider">{m.quoteAuthor || '— David Hare'}</cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div id="memo-cta" ref={addToRefs} className={`text-center ${isVisible['memo-cta'] ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {m.ctaTitle || 'Beginne deine Geschichte'}
            </h2>
            <p className="text-gray-500 text-lg mb-10">{m.ctaSub || ''}</p>
            <a href="#"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full font-medium hover:bg-gray-800 transition-all hover:-translate-y-0.5 text-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              {m.ctaBtn || 'Kostenlos laden'}
            </a>
            <p className="text-gray-400 text-sm mt-6">{m.ctaNote || 'Verfügbar ab iOS 17'}</p>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
