import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { FloatingChat } from '@/components/floating-chat'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

const siteUrl = process.env.GITHUB_PAGES === 'true'
  ? 'https://iamjmlim.github.io/heli-forklift-ph'
  : (process.env.NEXT_PUBLIC_SITE_URL || 'https://heli-forklift-ph.vercel.app')

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
  description: 'Authorized HELI forklift dealer in the Philippines, based in Guiguinto, Bulacan. We supply lithium battery forklifts, electric forklifts, diesel forklifts, reach trucks, and warehouse equipment — with full sales, service, and repair support across Luzon.',
  keywords: [
    'HELI forklift Philippines',
    'forklift dealer Philippines',
    'forklift supplier Bulacan',
    'forklift for sale Philippines',
    'lithium battery forklift Philippines',
    'electric forklift Philippines',
    'diesel forklift Philippines',
    'LPG forklift Philippines',
    'reach truck Philippines',
    'warehouse equipment Philippines',
    'pallet jack Philippines',
    'wheel loader Philippines',
    'forklift maintenance Philippines',
    'forklift repair Philippines',
    'material handling equipment Philippines',
    'HELI authorized dealer Philippines',
    'forklift rental Philippines',
    'forklift parts Philippines',
    'forklift operator training Philippines',
    'counterbalanced forklift Philippines',
    'electric pallet truck Philippines',
    'forklift Guiguinto Bulacan',
    'forklift Metro Manila',
    'forklift Central Luzon',
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
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Store'],
  name: 'Heli Forklift Philippines',
  alternateName: 'HELI Forklift PH',
  url: siteUrl,
  logo: `${siteUrl}/og-image.jpg`,
  image: `${siteUrl}/og-image.jpg`,
  description: 'Authorized HELI forklift dealer in the Philippines. We supply and service lithium battery forklifts, electric forklifts, diesel forklifts, reach trucks, and warehouse equipment across Luzon.',
  telephone: '+63-991-113-4556',
  email: 'agaropher111@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Km. 60 Plaridel Bypass Road, Brgy. Cutcut',
    addressLocality: 'Guiguinto',
    addressRegion: 'Bulacan',
    postalCode: '3015',
    addressCountry: 'PH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.8327,
    longitude: 120.8857,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'PHP',
  paymentAccepted: 'Cash, Check, Bank Transfer',
  areaServed: [
    { '@type': 'State', name: 'Bulacan' },
    { '@type': 'State', name: 'Metro Manila' },
    { '@type': 'Country', name: 'Philippines' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+63-991-113-4556',
    contactType: 'sales',
    email: 'agaropher111@gmail.com',
    areaServed: 'PH',
    availableLanguage: ['English', 'Filipino'],
  },
  sameAs: [
    'https://m.me/ropher.guion',
    'https://www.youtube.com/@HELIForklift',
    'https://www.linkedin.com/company/heli-forklift',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HELI Forklift Products',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Lithium Battery Forklift' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Electric Forklift' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Diesel Forklift' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Reach Truck' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Warehouse Truck' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wheel Loader' } },
    ],
  },
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
      <body className={`${inter.className} ${roboto.variable}`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingChat />
        <BackToTop />
      </body>
    </html>
  )
}
