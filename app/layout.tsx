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
  : (process.env.NEXT_PUBLIC_SITE_URL || 'https://heliforkliftph.com')

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
    // Brand
    'HELI forklift Philippines',
    'HELI forklift',
    'Heli Forklift Philippines',
    'heliforkliftph',
    'HELI authorized dealer Philippines',
    'HELI forklift distributor Philippines',
    'HELI forklift agent Philippines',
    'HELI forklift importer Philippines',
    // Generic — dealer/supplier
    'forklift dealer Philippines',
    'forklift supplier Philippines',
    'forklift distributor Philippines',
    'forklift company Philippines',
    'forklift store Philippines',
    'fork lift dealer Philippines',
    'forklift seller Philippines',
    // Buy / price intent
    'forklift for sale Philippines',
    'buy forklift Philippines',
    'purchase forklift Philippines',
    'forklift price Philippines',
    'forklift cost Philippines',
    'cheapest forklift Philippines',
    'affordable forklift Philippines',
    'forklift pricelist Philippines',
    'forklift quotation Philippines',
    // Product types
    'lithium battery forklift Philippines',
    'lithium forklift Philippines',
    'electric forklift Philippines',
    'diesel forklift Philippines',
    'LPG forklift Philippines',
    'gasoline forklift Philippines',
    'counterbalanced forklift Philippines',
    'reach truck Philippines',
    'electric reach truck Philippines',
    'order picker Philippines',
    'pallet jack Philippines',
    'electric pallet truck Philippines',
    'pallet stacker Philippines',
    'warehouse truck Philippines',
    'wheel loader Philippines',
    'heavy forklift Philippines',
    'rough terrain forklift Philippines',
    'narrow aisle forklift Philippines',
    'side loader forklift Philippines',
    'telescopic forklift Philippines',
    // Capacity
    '1 ton forklift Philippines',
    '1.5 ton forklift Philippines',
    '2 ton forklift Philippines',
    '3 ton forklift Philippines',
    '5 ton forklift Philippines',
    '7 ton forklift Philippines',
    '10 ton forklift Philippines',
    // Services
    'forklift maintenance Philippines',
    'forklift repair Philippines',
    'forklift service Philippines',
    'forklift parts Philippines',
    'forklift spare parts Philippines',
    'forklift rental Philippines',
    'forklift lease Philippines',
    'forklift operator training Philippines',
    'forklift operator certification Philippines',
    'forklift installation Philippines',
    'forklift after-sales Philippines',
    // Material handling
    'material handling equipment Philippines',
    'warehouse equipment Philippines',
    'lifting equipment Philippines',
    'industrial equipment Philippines',
    'logistics equipment Philippines',
    // Location — Bulacan
    'forklift Bulacan',
    'forklift supplier Bulacan',
    'forklift dealer Bulacan',
    'forklift Guiguinto Bulacan',
    'forklift Guiguinto',
    'forklift Malolos Bulacan',
    'forklift Meycauayan Bulacan',
    'forklift Marilao Bulacan',
    'forklift Balagtas Bulacan',
    'forklift Plaridel Bulacan',
    'forklift Obando Bulacan',
    'forklift San Jose del Monte Bulacan',
    'forklift Bocaue Bulacan',
    'forklift Pandi Bulacan',
    // Location — Metro Manila / NCR
    'forklift Metro Manila',
    'forklift Manila',
    'forklift Quezon City',
    'forklift Caloocan',
    'forklift Valenzuela',
    'forklift Malabon',
    'forklift Navotas',
    'forklift Pasig',
    'forklift Makati',
    'forklift Taguig',
    'forklift Paranaque',
    // Location — Central Luzon / nearby
    'forklift Central Luzon',
    'forklift Pampanga',
    'forklift Angeles City',
    'forklift Nueva Ecija',
    'forklift Tarlac',
    'forklift Zambales',
    'forklift Bataan',
    // Location — CALABARZON
    'forklift Laguna',
    'forklift Cavite',
    'forklift Batangas',
    'forklift Rizal',
    'forklift Quezon province',
    // Industry use cases
    'forklift for warehouse Philippines',
    'forklift for manufacturing Philippines',
    'forklift for construction Philippines',
    'forklift for logistics Philippines',
    'forklift for cold storage Philippines',
    'forklift for food processing Philippines',
    'forklift for shipyard Philippines',
    'forklift for agriculture Philippines',
    // Filipino search terms
    'forklift Pilipinas',
    'presyo ng forklift Pilipinas',
    'forklift pangmatagalan',
  ],
  alternates: {
    canonical: siteUrl,
  },
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
    latitude: 14.862974228343873,
    longitude: 120.89040530690504,
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
