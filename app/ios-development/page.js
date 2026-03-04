'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function iOSDevelopment() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      { threshold: 0.1 }
    )
    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el)
    }
  }

  return (
    <main className="bg-[#000000] min-h-screen overflow-hidden">
      <Navbar variant="dark" />

      {/* Hero - Apple Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Subtle Gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(120,120,150,0.15) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Small Label */}
          <div 
            className="mb-6 animate-fade-in"
            style={{ animationDuration: '1s' }}
          >
            <span className="text-gray-500 text-sm font-medium tracking-wide">iOS Development</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 tracking-tight animate-slide-up"
            style={{ animationDuration: '0.8s', lineHeight: 1.1 }}
          >
            Apps people
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              fall in love with
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light animate-slide-up"
            style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}
          >
            Native iOS experiences crafted with SwiftUI.
            <br className="hidden md:block" />
            Designed in Germany. Built for the world.
          </p>

          {/* CTA */}
          <div 
            className="animate-slide-up"
            style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}
          >
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 text-blue-400 text-lg font-medium hover:text-blue-300 transition-colors group"
            >
              Start your app project
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Floating iPhones */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] pointer-events-none"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.2}px)` }}
        >
          {/* Center iPhone */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[280px] animate-slide-up"
            style={{ animationDelay: '0.6s', animationDuration: '1s' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-white/10 to-transparent rounded-[3rem] blur-xl"></div>
              <div className="relative bg-[#1a1a1a] rounded-[3rem] p-2 border border-white/10">
                <div className="bg-black rounded-[2.5rem] aspect-[9/19] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00E5CC] to-[#00B8A3] flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium">FocusMission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left iPhone */}
          <div 
            className="absolute left-[10%] bottom-[-20px] w-[240px] opacity-60 hidden lg:block animate-slide-up"
            style={{ animationDelay: '0.8s', animationDuration: '1s', transform: `rotate(-12deg) translateY(${scrollY * 0.1}px)` }}
          >
            <div className="bg-[#1a1a1a] rounded-[2.5rem] p-2 border border-white/5">
              <div className="bg-black rounded-[2rem] aspect-[9/19] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    <span className="text-2xl font-serif text-gray-700">M</span>
                  </div>
                  <p className="text-white/60 text-xs">Memorandum</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right iPhone */}
          <div 
            className="absolute right-[10%] bottom-[-20px] w-[240px] opacity-60 hidden lg:block animate-slide-up"
            style={{ animationDelay: '1s', animationDuration: '1s', transform: `rotate(12deg) translateY(${scrollY * 0.1}px)` }}
          >
            <div className="bg-[#1a1a1a] rounded-[2.5rem] p-2 border border-white/5">
              <div className="bg-black rounded-[2rem] aspect-[9/19] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-xs">2Do</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div 
            id="apps-header"
            ref={addToRefs}
            className={`text-center mb-20 transition-all duration-1000 ${isVisible['apps-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
              Built by us.
              <br />
              <span className="text-gray-500">Loved by users.</span>
            </h2>
          </div>

          {/* App Cards */}
          <div className="space-y-8">
            {/* FocusMission */}
            <div 
              id="app-focus"
              ref={addToRefs}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1a1a] to-[#001a15] border border-white/5 transition-all duration-1000 ${isVisible['app-focus'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E5CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#00E5CC] to-[#00B8A3] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">FocusMission</h3>
                  <p className="text-gray-400 mb-4 max-w-lg">
                    Space-themed Pomodoro timer with gamification. Complete missions, progress through the solar system, 
                    and build lasting focus habits.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#00E5CC]/10 text-[#00E5CC] text-xs rounded-full">SwiftUI</span>
                    <span className="px-3 py-1 bg-[#00E5CC]/10 text-[#00E5CC] text-xs rounded-full">Widgets</span>
                    <span className="px-3 py-1 bg-[#00E5CC]/10 text-[#00E5CC] text-xs rounded-full">Live Activities</span>
                  </div>
                </div>
                <Link href="/focusmission" className="text-[#00E5CC] font-medium hover:underline flex items-center gap-1">
                  View <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Memorandum */}
            <div 
              id="app-memo"
              ref={addToRefs}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/5 transition-all duration-1000 delay-100 ${isVisible['app-memo'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl font-serif text-gray-700">M</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Memorandum</h3>
                  <p className="text-gray-400 mb-4 max-w-lg">
                    Minimalist journaling app. Capture your thoughts with elegance. 
                    No distractions, no clutter — just you and your words.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">SwiftUI</span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">SwiftData</span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Privacy-First</span>
                  </div>
                </div>
                <Link href="/memorandum" className="text-gray-300 font-medium hover:underline flex items-center gap-1">
                  View <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* 2Do */}
            <div 
              id="app-2do"
              ref={addToRefs}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f0f1a] to-[#0a0a15] border border-white/5 transition-all duration-1000 delay-200 ${isVisible['app-2do'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">2Do</h3>
                  <p className="text-gray-400 mb-4 max-w-lg">
                    Task management, reimagined. Smart lists, powerful filtering, 
                    beautiful widgets — everything you need to get things done.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">SwiftUI</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">WidgetKit</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">CloudKit</span>
                  </div>
                </div>
                <Link href="/2do" className="text-indigo-400 font-medium hover:underline flex items-center gap-1">
                  View <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div 
            id="expertise-header"
            ref={addToRefs}
            className={`text-center mb-20 transition-all duration-1000 ${isVisible['expertise-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Native excellence.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              No cross-platform compromises. Pure SwiftUI for the experience Apple intended.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'SwiftUI Native',
                desc: 'Built with Apple\'s latest framework for fluid animations and seamless performance.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Full Ecosystem',
                desc: 'Widgets, Live Activities, Watch apps, iCloud sync — the complete Apple experience.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'App Store Ready',
                desc: 'From icon design to metadata. We handle submission and help you get featured.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: 'Modern Architecture',
                desc: 'SwiftData, async/await, and MVVM. Clean code that scales and stays maintainable.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
            ].map((feature, i) => (
              <div 
                key={i}
                id={`feature-${i}`}
                ref={addToRefs}
                className={`group p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 ${isVisible[`feature-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-gray-500 mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm uppercase tracking-widest mb-8">Technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Swift', 'SwiftUI', 'SwiftData', 'WidgetKit', 'CloudKit', 
              'StoreKit 2', 'App Intents', 'Live Activities', 'Core Data'
            ].map((tech, i) => (
              <span 
                key={i} 
                className="px-5 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:border-white/20 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            id="cta"
            ref={addToRefs}
            className={`transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Your app idea
              <br />
              <span className="text-gray-500">deserves the best.</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
              Let's build something users will love. From concept to App Store, we're with you every step.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors group"
            >
              Get in Touch
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  )
}