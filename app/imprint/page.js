'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

function Section({ label, children }) {
  return (
    <div className="py-8 border-b border-white/8 last:border-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">
        {label}
      </p>
      <div className="text-white/75 text-[1.0625rem] leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  )
}

export default function ImprintPage() {
  const { tr } = useLanguage()
  const t = tr?.imprint || {}
  const year = new Date().getFullYear()

  return (
    <div className="min-h-svh bg-[#050508] text-white">
      <Navbar variant="dark" />

      <main className="max-w-2xl mx-auto px-6 lg:px-8 pt-40 pb-32">

        <h1 className="text-5xl font-semibold tracking-tight mb-2">
          {t.title || 'Impressum'}
        </h1>
        <p className="text-white/35 text-sm mb-14">{t.asOf || 'Stand:'} {year}</p>

        <div className="divide-y divide-white/8">

          <Section label={t.tmg || 'Angaben gemäß § 5 TMG'}>
            <p className="font-medium text-white">CrescentLabs UG (haftungsbeschränkt)</p>
            <p>Abdul Kerim Erkus</p>
            <p>Auf dem Ziel 13d</p>
            <p>79379 Müllheim</p>
            <p>Deutschland</p>
          </Section>

          <Section label={t.contact || 'Kontakt'}>
            <p>
              Telefon:{' '}
              <a href="tel:+4915511347840" className="text-white hover:text-white/60 transition-colors">
                +49 155 11347840
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:kerim@crescentlabs.de" className="text-white hover:text-white/60 transition-colors">
                kerim@crescentlabs.de
              </a>
            </p>
            <p>
              Website:{' '}
              <a href="https://www.crescentlabs.de" className="text-white hover:text-white/60 transition-colors">
                www.crescentlabs.de
              </a>
            </p>
          </Section>

          <Section label={t.director || 'Vertretungsberechtigter Geschäftsführer'}>
            <p>Abdul Kerim Erkus</p>
          </Section>

          <Section label={t.register || 'Registereintrag'}>
            <p>{t.registerLine1 || 'Eingetragen im Handelsregister'}</p>
            <p>{t.registerCourt || 'Registergericht:'} Amtsgericht 79098 Freiburg im Breisgau</p>
            <p>{t.registerNumber || 'Registernummer:'} HRB 735012</p>
          </Section>

          <Section label="D-U-N-S®-Nummer">
            <p>317107961</p>
          </Section>

        </div>
      </main>

      <Footer variant="dark" />
    </div>
  )
}
