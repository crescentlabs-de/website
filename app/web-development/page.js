'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function WebDevelopment() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [typedLines, setTypedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  
  const codeLines = [
    { text: 'const website = {', color: 'text-purple-400' },
    { text: '  design: "stunning",', color: 'text-green-400' },
    { text: '  performance: "blazing",', color: 'text-green-400' },
    { text: '  conversion: "maximum",', color: 'text-green-400' },
    { text: '  client: "happy"', color: 'text-green-400' },
    { text: '};', color: 'text-purple-400' },
    { text: '', color: '' },
    { text: 'crescentlabs.build(website);', color: 'text-blue-400' },
    { text: '// ✨ Magic happens here', color: 'text-gray-500' },
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (currentLine >= codeLines.length) return
    
    const line = codeLines[currentLine]
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
       setTypedLines(prev => {
  const newLines = [...prev]
  newLines[currentLine] = { 
    text: line.text.substring(0, currentChar + 1), 
    color: line.color || 'text-white' 
  }
  return newLines
})
        setCurrentChar(prev => prev + 1)
      }, 30 + Math.random() * 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar])

  return (
    <main className="bg-[#0A0A0F] min-h-svh overflow-hidden cursor-default">
      <Navbar variant="dark" />

      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] transition-all duration-300 ease-out z-0"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-svh flex items-center justify-center px-6 pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
        </div>

        {/* Floating Gradient Orbs */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)',
            top: '-20%',
            right: '-20%',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 60%)',
            bottom: '-10%',
            left: '-10%',
            transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.04}px)`,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-gray-400 text-sm">Available for new projects</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Websites that
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  make an impact
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                We build digital experiences that captivate users and drive results. 
                Your vision, engineered to perfection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="#work" className="btn-secondary inline-flex items-center justify-center gap-2">
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Right - Code Terminal */}
            <div className="relative animate-slide-up delay-200">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#0a0a0f] border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">website.js</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm md:text-base min-h-[300px]">
                  {typedLines.filter(Boolean).map((line, i) => (
                    <div key={i} className={`${line.color || 'text-white'} leading-relaxed`}>
                      {line.text}
                      {i === currentLine - 1 || (i === currentLine && currentChar > 0) ? '' : ''}
                    </div>
                  ))}
                  {currentLine < codeLines.length && (
                    <span className="inline-block w-2 h-5 bg-white/80 animate-pulse ml-0.5"></span>
                  )}
                  {currentLine >= codeLines.length && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-400 ml-2">Build successful</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '<1s', label: 'Avg. Load Time' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section id="work" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What we build</h2>
            <p className="text-gray-400 text-lg">Tailored solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Landing Pages - Large */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] group-hover:bg-indigo-500/30 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Landing Pages</h3>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  High-converting pages designed to turn visitors into customers. 
                  Every element optimized for maximum impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Conversion Optimized', 'A/B Testing', 'Analytics'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* UI/UX - Small */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm">Beautiful interfaces users love</p>
            </div>

            {/* Web Apps - Medium */}
            <div className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Web Applications</h3>
                <p className="text-gray-400 text-sm mb-4">Full-stack apps with complex functionality, auth, and databases.</p>
                <div className="flex gap-2">
                  {['React', 'Node.js', 'PostgreSQL'].map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-gray-500 text-xs rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* E-Commerce - Medium */}
            <div className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">E-Commerce</h3>
              <p className="text-gray-400 text-sm mb-4">Online stores that convert. Beautiful products, smooth checkout.</p>
              <div className="flex gap-2">
                {['Stripe', 'Shopify', 'Custom'].map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-white/5 text-gray-500 text-xs rounded">{tag}</span>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
              <p className="text-gray-400 text-sm">100/100 Lighthouse scores guaranteed</p>
            </div>

            {/* SEO */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO</h3>
              <p className="text-gray-400 text-sm">Rank higher, get found faster</p>
            </div>

            {/* Maintenance */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-500/10 to-gray-500/10 border border-white/5 p-8 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-slate-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Maintenance</h3>
              <p className="text-gray-400 text-sm">Ongoing support & updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How we work</h2>
            <p className="text-gray-400 text-lg">A proven process for exceptional results</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { num: '01', title: 'Discover', desc: 'We dive deep into your goals, audience, and vision.', icon: '🔍' },
                { num: '02', title: 'Design', desc: 'Wireframes to high-fidelity mockups, pixel perfect.', icon: '✏️' },
                { num: '03', title: 'Develop', desc: 'Clean code, modern stack, built for performance.', icon: '⚡' },
                { num: '04', title: 'Launch', desc: 'Testing, optimization, and a flawless deployment.', icon: '🚀' },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="text-xs text-gray-600 font-mono mb-2">{step.num}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-3xl bg-[#12121a] border border-white/10 p-12 lg:p-20">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
              
              <div className="relative text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to build<br />something amazing?
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                  Let's turn your vision into reality. Book a free consultation and 
                  let's discuss how we can help your business grow.
                </p>
                <Link 
                  href="/#contact" 
                  className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5 group"
                >
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  )
}