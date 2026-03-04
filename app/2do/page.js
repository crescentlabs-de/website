'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function TwoDo() {
  const { tr, lang } = useLanguage()
  const t = tr?.twodo || {}
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const blobRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (blobRef.current) blobRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
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

  const features = t.features || [
    { title: 'Smart Lists', desc: 'Organisiere Aufgaben automatisch.' },
    { title: 'Widgets', desc: 'Schöne Home-Screen-Widgets.' },
    { title: 'Smart Reminders', desc: 'Zur richtigen Zeit erinnert werden.' },
    { title: 'Quick Add', desc: 'Natürliche Spracheingabe.' },
    { title: 'E-Mail zu Aufgabe', desc: 'E-Mails direkt in Aufgaben umwandeln.' },
    { title: 'Prioritätsstufen', desc: 'Fokussiere dich auf das Wesentliche.' },
  ]

  const featureIcons = [
    <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
    <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
    <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
    <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  ]

  return (
    <main className="bg-[#0F0F1A] min-h-screen overflow-hidden">
      <Navbar variant="dark" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div ref={blobRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-[150px] animate-breathe" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[150px] animate-breathe delay-500" />
        </div>

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-slide-up">
            2<span className="text-gradient-purple">Do</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up delay-100 font-light">
            {t.sub || 'Aufgaben, neu gedacht'}
          </p>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto animate-slide-up delay-200 leading-relaxed">
            {t.body || 'Ein leistungsstarker und einfacher Aufgabenmanager.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <a href="#"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              {t.ctaDownload || 'Für iOS laden'}
            </a>
            <a href="#features"
              className="inline-flex items-center justify-center gap-2 text-gray-400 px-8 py-4 rounded-full font-medium border border-gray-700 hover:border-indigo-500 hover:text-indigo-400 transition-all hover:-translate-y-0.5">
              {t.ctaFeatures || 'Features ansehen'}
            </a>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-48 glass rounded-xl p-4 animate-float hidden lg:block">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-indigo-500 flex-shrink-0" />
            <span className="text-sm text-gray-400">Design new landing page</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 right-10 w-52 glass rounded-xl p-4 animate-float delay-300 hidden lg:block">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <span className="text-sm text-gray-500 line-through">Review project proposal</span>
          </div>
        </div>
      </section>

      {/* PHONE MOCKUP */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div id="todo-preview" ref={addToRefs} className={`relative ${isVisible['todo-preview'] ? 'animate-rise-up' : 'opacity-0'}`}>
            <div className="relative mx-auto max-w-sm">
              <div className="relative bg-gray-800 phone-mockup">
                <div className="bg-[#0F0F1A]" style={{ borderRadius: '2.5rem', overflow: 'hidden', aspectRatio: '9/19.5', position: 'relative' }}>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10" />
                  <div className="pt-16 px-5 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{lang === 'de' ? 'Guten Morgen' : 'Good morning'}</p>
                        <h2 className="text-xl font-semibold text-white mt-1">{lang === 'de' ? 'Meine Aufgaben' : 'My Tasks'}</h2>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">A</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <p className="text-white font-medium text-sm">{lang === 'de' ? 'Heute' : 'Today'}</p>
                        <p className="text-gray-500 text-xs">{lang === 'de' ? '5 Aufgaben' : '5 tasks'}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </div>
                        <p className="text-white font-medium text-sm">{lang === 'de' ? 'Wichtig' : 'Important'}</p>
                        <p className="text-gray-500 text-xs">{lang === 'de' ? '2 Aufgaben' : '2 tasks'}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {(lang === 'de' ? [
                        { text: 'Q4-Budget überprüfen', done: false, priority: true },
                        { text: 'Meeting mit Design-Team', done: false, priority: false },
                        { text: 'Wochenbericht senden', done: true, priority: false },
                      ] : [
                        { text: 'Review Q4 budget proposal', done: false, priority: true },
                        { text: 'Call with design team', done: false, priority: false },
                        { text: 'Send weekly report', done: true, priority: false },
                      ]).map((task, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${task.done ? 'bg-purple-500' : 'border-2 border-gray-600'}`}>
                            {task.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                          </div>
                          <span className={`text-sm flex-1 ${task.done ? 'text-gray-500 line-through' : 'text-white'}`}>{task.text}</span>
                          {task.priority && <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>}
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-8 right-5">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-[3rem] blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div id="todo-features-header" ref={addToRefs} className={`text-center mb-20 ${vis('todo-features-header')}`}>
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">Features</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {(t.featuresTitle || 'Alles was du brauchst,\nnichts was du nicht brauchst').split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'block text-gradient-purple' : 'block'}>{line}</span>
              ))}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.featuresSub || ''}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                id={`todo-feature-${i}`}
                ref={addToRefs}
                className={`group p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/5 transition-all duration-300 ${isVisible[`todo-feature-${i}`] ? 'animate-reveal-spring' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                  {featureIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div id="todo-cta" ref={addToRefs} className={`text-center ${isVisible['todo-cta'] ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.ctaTitle || 'Bereit loszulegen?'}</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">{t.ctaSub || ''}</p>
            <a href="#"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 text-lg shadow-lg shadow-indigo-500/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              {t.ctaBtn || 'Kostenlos im App Store laden'}
            </a>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  )
}
