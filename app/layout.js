import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'CrescentLabs | iOS Apps & Webentwicklung',
  description: 'CrescentLabs entwickelt hochwertige iOS-Apps und professionelle Websites. Entdecken Sie FocusMission, Memorandum und 2Do.',
  keywords: 'iOS Apps, Webentwicklung, Produktivitäts-Apps, Tagebuch, Aufgabenverwaltung, CrescentLabs',
  openGraph: {
    title: 'CrescentLabs | iOS Apps & Webentwicklung',
    description: 'Wir schaffen digitale Erlebnisse die begeistern.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#0A0A0F" />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
