import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iamjmlim.github.io/heli-forklift-ph'

const ogImage = {
  url: `${siteUrl}/og-image.jpg`,
  width: 600,
  height: 450,
  alt: 'HELI Forklift Philippines — Authorized HELI Distributor',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Heli Forklift Philippines | Authorized HELI Distributor',
    template: '%s | Heli Forklift Philippines',
  },
  description: 'Authorized HELI forklift distributor in the Philippines. We supply lithium battery forklifts, electric forklifts, diesel forklifts, reach trucks, warehouse equipment, and wheel loaders — with full sales, maintenance, repair, and training support.',
  keywords: [
    'HELI forklift Philippines',
    'forklift supplier Philippines',
    'lithium battery forklift Philippines',
    'electric forklift Philippines',
    'diesel forklift Philippines',
    'reach truck Philippines',
    'warehouse equipment Philippines',
    'wheel loader Philippines',
    'forklift for sale Philippines',
    'forklift maintenance Philippines',
    'HELI distributor Philippines',
    'material handling equipment Philippines',
    'pallet jack Philippines',
    'scissor lift Philippines',
  ],
  authors: [{ name: 'Heli Forklift Philippines' }],
  creator: 'Heli Forklift Philippines',
  publisher: 'Heli Forklift Philippines',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: siteUrl,
    siteName: 'Heli Forklift Philippines',
    title: 'Heli Forklift Philippines | Authorized HELI Distributor',
    description: 'Authorized HELI forklift distributor in the Philippines. Lithium battery, electric, diesel forklifts, reach trucks, and warehouse equipment with full service support.',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heli Forklift Philippines | Authorized HELI Distributor',
    description: 'Authorized HELI forklift distributor in the Philippines. Electric, diesel, and lithium battery forklifts with full sales and service support.',
    images: [`${siteUrl}/og-image.jpg`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Heli Forklift Philippines',
  url: siteUrl,
  logo: `${siteUrl}/og-image.jpg`,
  description: 'Authorized HELI forklift distributor in the Philippines specializing in lithium battery, electric, and diesel forklifts, reach trucks, warehouse equipment, and wheel loaders.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manila',
    addressCountry: 'PH',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@heliforklift.ph',
    areaServed: 'PH',
    availableLanguage: ['English', 'Filipino'],
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
