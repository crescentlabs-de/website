'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import StarField from '@/components/StarField'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

const PLANET_DATA = [
  { key: 'earth',   nDE: 'Erde',    nEN: 'Earth',   radius: 58,  size: 13, color: '#00E5CC', speed: 10,  startAngle: 200 },
  { key: 'moon',    nDE: 'Mond',    nEN: 'Moon',    radius: 100, size: 8,  color: '#9CA3AF', speed: 18,  startAngle: 55  },
  { key: 'mars',    nDE: 'Mars',    nEN: 'Mars',    radius: 148, size: 11, color: '#EF4444', speed: 30,  startAngle: 130 },
  { key: 'jupiter', nDE: 'Jupiter', nEN: 'Jupiter', radius: 200, size: 22, color: '#F59E0B', speed: 46,  startAngle: 280 },
  { key: 'saturn',  nDE: 'Saturn',  nEN: 'Saturn',  radius: 250, size: 16, color: '#FBBF24', speed: 64,  startAngle: 12, ring: true },
  { key: 'uranus',  nDE: 'Uranus',  nEN: 'Uranus',  radius: 292, size: 10, color: '#06B6D4', speed: 84,  startAngle: 165 },
  { key: 'neptune', nDE: 'Neptun',  nEN: 'Neptune', radius: 330, size: 12, color: '#3B82F6', speed: 112, startAngle: 310 },
]
const SIZE = 680

function OrbitalSystem({ active, lang }) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const w = el.getBoundingClientRect().width
      setScale(Math.min(1, w / SIZE))
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: SIZE * scale }}>
      <div style={{
        width: SIZE,
        height: SIZE,
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: `translateX(-50%) scale(${scale})`,
        transformOrigin: 'top center',
      }}>
        {/* Orbital rings */}
        {PLANET_DATA.map((p) => (
          <div key={p.key} style={{
            position: 'absolute',
            width: p.radius * 2,
            height: p.radius * 2,
            top: SIZE / 2 - p.radius,
            left: SIZE / 2 - p.radius,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.06)',
          }} />
        ))}

        {/* Center icon */}
        <div style={{
          position: 'absolute',
          width: 44,
          height: 44,
          top: SIZE / 2 - 22,
          left: SIZE / 2 - 22,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00E5CC, #00B8A3)',
          boxShadow: '0 0 24px rgba(0,229,204,0.6), 0 0 56px rgba(0,229,204,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        {/* Orbiting planets */}
        {PLANET_DATA.map((p) => {
          const delay = -((p.startAngle / 360) * p.speed)
          return (
            <div key={p.key} style={{
              position: 'absolute',
              top: SIZE / 2,
              left: SIZE / 2,
              width: 0,
              height: 0,
              animation: `spin ${p.speed}s linear infinite`,
              animationDelay: `${delay}s`,
              animationPlayState: active ? 'running' : 'paused',
            }}>
              {/* Planet body */}
              <div style={{
                position: 'absolute',
                top: -(p.radius + p.size / 2),
                left: -(p.size / 2),
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                background: p.color,
                boxShadow: `0 0 ${Math.round(p.size * 2)}px ${p.color}99`,
              }}>
                {/* Saturn ring */}
                {p.ring && (
                  <div style={{
                    position: 'absolute',
                    width: p.size * 2.6,
                    height: p.size * 0.5,
                    top: p.size * 0.25,
                    left: -p.size * 0.8,
                    borderRadius: '50%',
                    border: `1.5px solid ${p.color}70`,
                    pointerEvents: 'none',
                  }} />
                )}
              </div>
              {/* Planet label */}
              <div style={{
                position: 'absolute',
                top: -(p.radius + p.size / 2 + 18),
                left: -(p.size / 2),
                width: 60,
                marginLeft: -24,
                textAlign: 'center',
                animation: `spin ${p.speed}s linear infinite reverse`,
                animationDelay: `${delay}s`,
                animationPlayState: active ? 'running' : 'paused',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: p.color + 'bb',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}>
                {lang === 'de' ? p.nDE : p.nEN}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const RING1_INIT = 75    // Earth  — upper right (~2 o'clock)
const RING2_INIT = 210   // Mars   — lower left  (~7 o'clock)
const RING3_INIT = 305   // Jupiter — upper right (~10 o'clock); purple 180° opposite at ~4 o'clock

export default function FocusMission() {
  const { tr, lang } = useLanguage()
  const f = tr?.focusmission || {}
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const blobRef = useRef(null)
  const ring1Ref = useRef(null)
  const ring2Ref = useRef(null)
  const ring3Ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (blobRef.current) blobRef.current.style.transform = `translateY(${y * 0.25}px)`
      if (ring1Ref.current) ring1Ref.current.style.transform = `rotate(${RING1_INIT + y * 0.65}deg)`
      if (ring2Ref.current) ring2Ref.current.style.transform = `rotate(${RING2_INIT + (-y * 0.42)}deg)`
      if (ring3Ref.current) ring3Ref.current.style.transform = `rotate(${RING3_INIT + y * 0.26}deg)`
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
      { threshold: 0.08 }
    )
    observerRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) observerRefs.current.push(el)
  }

  const vis = (id, extra = '') => isVisible[id] ? `animate-reveal-spring ${extra}` : 'opacity-0'

  const features = f.features || [
    { title: 'Missions-Timer', desc: 'Anpassbare Fokus-Sessions mit der bewährten Pomodoro-Technik.' },
    { title: 'Rang-System', desc: 'Starte als Rekrut auf der Erde und erreiche Neptun.' },
    { title: 'Sonnensystem-Ansicht', desc: 'Sieh deinen Fortschritt in einem interaktiven Sonnensystem.' },
    { title: 'Streak-System', desc: 'Baue Momentum mit täglichen Streaks auf.' },
    { title: 'Smart Notifications', desc: 'Werde im richtigen Moment erinnert.' },
    { title: 'Missions-Logbuch', desc: 'Tracke abgeschlossene Missionen mit Statistiken.' },
  ]

  const featureIcons = [
    <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>,
    <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
    <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
    <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  ]

  return (
    <main className="bg-[#0A0A0F] min-h-screen overflow-hidden">
      <StarField density={250} speed="slow" />
      <Navbar variant="dark" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Orbital rings with scroll-driven planets */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer ring */}
          <div className="absolute w-[600px] h-[600px] border border-white/4 rounded-full" />
          <div ref={ring3Ref} className="absolute w-[600px] h-[600px]" style={{ willChange: 'transform', transform: `rotate(${RING3_INIT}deg)` }}>
            {/* Saturn — golden with ring */}
            <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', width: 30, height: 30 }}>
              {/* Ring (behind planet) */}
              <div style={{
                position: 'absolute', zIndex: 0,
                width: 60, height: 13,
                top: 8, left: '50%', marginLeft: -30,
                borderRadius: '50%',
                border: '2.5px solid rgba(210,170,80,0.55)',
              }} />
              {/* Planet */}
              <div style={{
                position: 'absolute', zIndex: 1,
                width: 30, height: 30, borderRadius: '50%',
                background: `
                  radial-gradient(ellipse 70% 22% at 50% 45%, rgba(255,245,180,0.22) 0%, transparent 100%),
                  radial-gradient(ellipse 50% 50% at 50% 50%, transparent 60%, rgba(0,0,0,0.38) 100%),
                  #C8A84B
                `,
                boxShadow: '0 0 12px rgba(200,168,75,0.55)',
              }} />
            </div>
            {/* Neptune — simple blue-purple */}
            <div style={{ position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%',
                background: `
                  radial-gradient(ellipse 50% 50% at 50% 50%, transparent 60%, rgba(0,0,0,0.38) 100%),
                  #4C1D95
                `,
                boxShadow: '0 0 10px rgba(124,58,237,0.55)',
              }} />
            </div>
          </div>

          {/* Middle ring */}
          <div className="absolute w-[440px] h-[440px] border border-[#00E5CC]/10 rounded-full" />
          <div ref={ring2Ref} className="absolute w-[440px] h-[440px]" style={{ willChange: 'transform', transform: `rotate(${RING2_INIT}deg)` }}>
            {/* Mars — orange with dark patches */}
            <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: `
                  radial-gradient(circle at 66% 60%, rgba(80,20,5,0.6) 0%, transparent 30%),
                  radial-gradient(circle at 28% 74%, rgba(100,30,8,0.5) 0%, transparent 22%),
                  radial-gradient(ellipse 50% 50% at 50% 50%, transparent 60%, rgba(0,0,0,0.38) 100%),
                  #C2521A
                `,
                boxShadow: '0 0 10px rgba(194,82,26,0.55)',
              }} />
            </div>
          </div>

          {/* Inner ring */}
          <div className="absolute w-[280px] h-[280px] border border-[#00E5CC]/18 rounded-full" />
          <div ref={ring1Ref} className="absolute w-[280px] h-[280px]" style={{ willChange: 'transform', transform: `rotate(${RING1_INIT}deg)` }}>
            {/* Earth — blue with green continents */}
            <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%',
                background: `
                  radial-gradient(circle at 62% 40%, #16A34A 0%, transparent 28%),
                  radial-gradient(circle at 30% 65%, #15803D 0%, transparent 22%),
                  radial-gradient(circle at 16% 42%, #16A34A 0%, transparent 14%),
                  radial-gradient(ellipse 50% 50% at 50% 50%, transparent 60%, rgba(0,0,0,0.38) 100%),
                  #1D74D1
                `,
                boxShadow: '0 0 12px rgba(29,116,209,0.55)',
              }} />
            </div>
          </div>
        </div>

        {/* Parallax glow */}
        <div ref={blobRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00E5CC]/20 rounded-full blur-[120px] animate-breathe" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#00E5CC] to-[#00B8A3] flex items-center justify-center shadow-2xl shadow-[#00E5CC]/30 animate-pulse-glow">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </div>

          <div className="mb-4 animate-fade-in">
            <span className="font-mono text-[#00E5CC] text-sm tracking-[0.3em] uppercase">{f.eyebrow || 'Mission Control'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
            Focus<span className="text-gradient-cyan">Mission</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up delay-100 font-light">
            {f.sub || 'Deine Produktivitätsreise durchs All'}
          </p>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto animate-slide-up delay-200 leading-relaxed">
            {f.body || 'Verwandle deine Fokus-Sessions in interstellare Missionen.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <a href="#" className="btn-primary inline-flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              {f.ctaDownload || 'Für iOS laden'}
            </a>
            <a href="#features" className="btn-secondary">{f.ctaFeatures || 'Features entdecken'}</a>
          </div>
        </div>

      </section>

      {/* PHONE MOCKUP */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div id="mission-display" ref={addToRefs} className={`relative ${isVisible['mission-display'] ? 'animate-rise-up' : 'opacity-0'}`}>
            <div className="relative mx-auto max-w-sm">
              <div className="relative bg-[#1A1A24] phone-mockup">
                <div className="bg-[#0A0A0F]" style={{ borderRadius: '2.5rem', overflow: 'hidden', aspectRatio: '9/19.5', position: 'relative' }}>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10" />
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
                      style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animationDelay: `${Math.random()*3}s`, opacity: Math.random()*0.5+0.2 }} />
                  ))}
                  <div className="pt-16 px-6 text-center h-full flex flex-col">
                    <div className="mb-4">
                      <p className="text-white/60 text-sm font-semibold tracking-wider">MISSION 002</p>
                      <div className="inline-block mt-2 px-4 py-1 border border-[#00E5CC] rounded-full">
                        <span className="text-[#00E5CC] text-sm font-medium">LUNAR ORBIT</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <svg width="200" height="200" className="transform -rotate-90">
                          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                          <circle cx="100" cy="100" r="90" fill="none" stroke="#00E5CC" strokeWidth="4" strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 90}`}
                            strokeDashoffset={`${2 * Math.PI * 90 * 0.17}`}
                            style={{ filter: 'drop-shadow(0 0 10px #00E5CC)' }} />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl font-light text-white tracking-wider">24:57</span>
                        </div>
                        <div className="absolute w-3 h-3 bg-[#00E5CC] rounded-full shadow-[0_0_10px_#00E5CC]" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }} />
                      </div>
                    </div>
                    <div className="pb-12 flex justify-center gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-red-900/50 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </div>
                        <span className="text-red-400 text-xs mt-2 block font-medium">ABORT</span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[#00E5CC]/20 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2">
                            <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </div>
                        <span className="text-[#00E5CC] text-xs mt-2 block font-medium">PAUSE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#00E5CC]/15 rounded-[3rem] blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div id="features-header" ref={addToRefs} className={`text-center mb-20 ${vis('features-header')}`}>
            <span className="text-[#00E5CC] font-mono text-sm tracking-widest uppercase mb-4 block">Features</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {(() => {
                const title = f.featuresTitle || (lang === 'de' ? 'Entwickelt für Fokus' : 'Engineered for focus')
                const words = title.split(' ')
                const last = words.pop()
                return <>{words.join(' ')} <span className="text-gradient-cyan">{last}</span></>
              })()}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{f.featuresSub || ''}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                id={`feature-${i}`}
                ref={addToRefs}
                className={`glass rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300 ${isVisible[`feature-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00E5CC]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {featureIcons[i]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5CC]/4 rounded-full blur-[200px]" />
        <div className="max-w-6xl mx-auto relative">
          <div id="journey" ref={addToRefs} className={`text-center ${vis('journey')}`}>
            <span className="text-[#00E5CC] font-mono text-sm tracking-widest uppercase mb-4 block">
              {lang === 'de' ? 'Ihre Reise' : 'Your Journey'}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
              {(() => {
                const title = f.journeyTitle || (lang === 'de' ? 'Von der Erde zum Neptun' : 'From Earth to Neptune')
                const words = title.split(' ')
                const last = words.pop()
                return <>{words.join(' ')} <span className="text-gradient-cyan">{last}</span></>
              })()}
            </h2>
            <OrbitalSystem active={isVisible['journey']} lang={lang} />
            <p className="text-gray-400 mt-10 max-w-xl mx-auto">{f.journeySub || ''}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="fm-cta" ref={addToRefs} className={`glass rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden ${isVisible['fm-cta'] ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5CC]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{f.ctaTitle || 'Bereit für den Start?'}</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">{f.ctaSub || ''}</p>
              <a href="#" className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                {f.ctaBtn || 'Kostenlos im App Store laden'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  )
}
