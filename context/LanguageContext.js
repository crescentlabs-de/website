'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('de')

  useEffect(() => {
    const saved = localStorage.getItem('cl_lang')
    if (saved === 'en' || saved === 'de') setLangState(saved)
  }, [])

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('cl_lang', l)
  }

  const t = (page, key) => {
    try {
      const val = translations[lang][page][key]
      return val !== undefined ? val : key
    } catch {
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
