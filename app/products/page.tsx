import type { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Battery, Truck, PackageOpen, Zap, Factory, Package, Warehouse, TrendingUp, Tractor } from 'lucide-react'
import Link from 'next/link'
import { getAssetPath } from '@/lib/paths'

const ogImage = '/og-image.jpg'

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'HELI Forklift Products for Sale in the Philippines',
  description: 'Complete lineup of HELI forklifts available from authorized dealer in Guiguinto, Bulacan, Philippines.',
  numberOfItems: 7,
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: {
        '@type': 'Product',
        name: 'HELI Lithium Battery Forklift Philippines',
        description: 'Advanced lithium-ion powered counterbalanced forklifts for zero-emission indoor operations. Available in 1.0 to 10.0 ton capacity. Fast charging, long battery life, ideal for multi-shift warehouse operations in the Philippines.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Lithium Battery Forklift',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
    {
      '@type': 'ListItem', position: 2,
      item: {
        '@type': 'Product',
        name: 'HELI Electric Forklift Philippines',
        description: 'Quiet, zero-emission electric counterbalanced forklifts for indoor warehouse and logistics operations. Available in 1.3 to 2.0 ton capacity.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Electric Forklift',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
    {
      '@type': 'ListItem', position: 3,
      item: {
        '@type': 'Product',
        name: 'HELI Diesel Forklift Philippines',
        description: 'Heavy-duty diesel and LPG internal combustion forklifts for outdoor and tough industrial operations. Available in 6.0 to 10.0 ton capacity.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Diesel Forklift',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
    {
      '@type': 'ListItem', position: 4,
      item: {
        '@type': 'Product',
        name: 'HELI Reach Truck Philippines',
        description: 'Electric reach trucks and stackers for narrow aisle, high-bay warehouse storage. Available in 1.4 to 2.0 ton capacity, reach up to 12 meters.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Reach Truck',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
    {
      '@type': 'ListItem', position: 5,
      item: {
        '@type': 'Product',
        name: 'HELI Heavy Forklift Philippines',
        description: 'Extra heavy-duty internal combustion forklifts for steel mills, ports, and heavy manufacturing. Available in 20.0 to 32.0 ton capacity.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Heavy Forklift',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
    {
      '@type': 'ListItem', position: 6,
      item: {
        '@type': 'Product',
        name: 'HELI Electric Pallet Truck Philippines',
        description: 'Electric hand pallet trucks, stackers, and warehouse trucks for horizontal transport and loading dock operations. Up to 2.0 ton capacity.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Warehouse Truck',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
    {
      '@type': 'ListItem', position: 7,
      item: {
        '@type': 'Product',
        name: 'HELI Wheel Loader Philippines',
        description: 'Heavy-duty wheel loaders for construction, earthmoving, and bulk material handling. Available in 1.0 to 5.0 ton capacity.',
        brand: { '@type': 'Brand', name: 'HELI' },
        category: 'Wheel Loader',
        offers: { '@type': 'Offer', seller: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'PH', availability: 'https://schema.org/InStock', priceCurrency: 'PHP' },
      },
    },
  ],
}

const productFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the price of a HELI forklift in the Philippines?',
      acceptedAnswer: { '@type': 'Answer', text: 'HELI forklift prices in the Philippines vary by model and capacity. Entry-level electric and warehouse forklifts start at lower price points, while heavy-duty diesel and lithium battery models are priced higher. Contact Heli Forklift Philippines at +63 991 113 4556 for an exact quotation based on your requirements.' },
    },
    {
      '@type': 'Question',
      name: 'What types of forklifts are available in the Philippines?',
      acceptedAnswer: { '@type': 'Answer', text: 'Heli Forklift Philippines offers lithium battery forklifts, electric forklifts, diesel forklifts, LPG forklifts, reach trucks, electric pallet trucks, warehouse stackers, heavy forklifts (up to 32 tons), and wheel loaders — all from the HELI brand, one of the world\'s largest forklift manufacturers.' },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver forklifts outside Bulacan?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Heli Forklift Philippines delivers and services forklifts across Luzon including Metro Manila, Pampanga, Nueva Ecija, Tarlac, Laguna, Cavite, Batangas, and all surrounding provinces. Contact us to arrange delivery to your location.' },
    },
    {
      '@type': 'Question',
      name: 'Which forklift is best for a warehouse in the Philippines?',
      acceptedAnswer: { '@type': 'Answer', text: 'For warehouse operations in the Philippines, we recommend HELI lithium battery forklifts or electric forklifts for indoor use — they produce zero emissions, operate quietly, and have low running costs. For high-bay storage, HELI reach trucks maximize vertical space efficiency. Contact our team for a site-specific recommendation.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get financing or installment for a forklift in the Philippines?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, flexible financing options are available for HELI forklifts in the Philippines. Contact Heli Forklift Philippines at +63 991 113 4556 or email agaropher111@gmail.com to discuss payment plans and installment schemes.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'HELI Forklifts for Sale Philippines | Buy Direct from Authorized Dealer in Bulacan',
  description: 'Browse the complete HELI forklift lineup available in the Philippines: lithium battery forklifts, electric forklifts, diesel forklifts, reach trucks, heavy forklifts, warehouse trucks, and wheel loaders. Buy direct from authorized dealer in Bulacan.',
  keywords: [
    // Buy intent
    'buy forklift Philippines',
    'forklift for sale Philippines',
    'forklift price Philippines',
    'forklift pricelist Philippines',
    'HELI forklift price Philippines',
    'HELI forklift models Philippines',
    'cheapest forklift Philippines',
    'affordable forklift Philippines',
    'forklift quotation Philippines',
    'forklift dealer Philippines',
    // Lithium
    'lithium battery forklift Philippines',
    'lithium forklift Philippines',
    'lithium forklift price Philippines',
    'lithium ion forklift Philippines',
    'HELI lithium forklift',
    // Electric
    'electric forklift Philippines',
    'electric forklift price Philippines',
    'electric forklift for sale Philippines',
    'electric counterbalanced forklift Philippines',
    // Diesel
    'diesel forklift Philippines',
    'diesel forklift price Philippines',
    'diesel forklift for sale Philippines',
    'diesel counterbalanced forklift Philippines',
    // LPG
    'LPG forklift Philippines',
    'gas forklift Philippines',
    // Reach truck
    'reach truck Philippines',
    'electric reach truck Philippines',
    'reach truck price Philippines',
    'narrow aisle reach truck Philippines',
    // Warehouse / pallet
    'warehouse truck Philippines',
    'pallet truck Philippines',
    'electric pallet truck Philippines',
    'pallet stacker Philippines',
    'order picker Philippines',
    'pallet jack Philippines',
    // Heavy / large
    'heavy forklift Philippines',
    'large forklift Philippines',
    'high capacity forklift Philippines',
    // Wheel loader
    'wheel loader Philippines',
    'wheel loader price Philippines',
    'small wheel loader Philippines',
    // Capacity-specific
    '1 ton forklift Philippines',
    '1.5 ton forklift Philippines',
    '2 ton forklift Philippines',
    '3 ton forklift Philippines',
    '5 ton forklift Philippines',
    '7 ton forklift Philippines',
    '10 ton forklift Philippines',
    '15 ton forklift Philippines',
    // Location
    'forklift for sale Bulacan',
    'forklift for sale Guiguinto',
    'forklift for sale Metro Manila',
    'forklift for sale Central Luzon',
    'forklift for sale Pampanga',
    'forklift for sale Laguna',
    'forklift for sale Cavite',
    // Industry
    'forklift for warehouse Philippines',
    'forklift for cold storage Philippines',
    'forklift for manufacturing Philippines',
    'forklift for logistics Philippines',
    'forklift for construction Philippines',
    'indoor forklift Philippines',
    'outdoor forklift Philippines',
  ],
  alternates: { canonical: 'https://heliforkliftph.com/products' },
  openGraph: {
    title: 'HELI Forklift Products for Sale in the Philippines',
    description: 'Lithium battery, electric, diesel forklifts, reach trucks, and warehouse equipment — complete HELI lineup available from authorized dealer in Guiguinto, Bulacan.',
    url: '/products',
    images: [{ url: ogImage, width: 600, height: 450, alt: 'HELI Forklift Products Philippines' }],
  },
}

const productCategories = [
  {
    id: 'lithium-battery',
    category: 'Lithium Battery Forklift',
    icon: Battery,
    tagline: 'The Future of Material Handling',
    description: 'Advanced eco-friendly electric forklifts powered by cutting-edge lithium-ion technology for superior performance and efficiency',
    capacityRange: '1.0 - 10.0 tons',
    images: [
      '/Heli/Lithium Batter Forklift/H3 series 1-2.5 tons lithium battery counterbalanced forklift.avif',
      '/Heli/Lithium Batter Forklift/G2 series 1.5-3.8 tons lithium battery counterbalanced forklift.avif',
      '/Heli/Lithium Batter Forklift/G3 series 4-5 tons lithium battery counterbalanced forklift.avif',
      '/Heli/Lithium Batter Forklift/IMG_1493.JPG',
      '/Heli/Lithium Batter Forklift/IMG_1497.JPG',
      '/Heli/Lithium Batter Forklift/IMG_1524.JPG',
      '/Heli/Lithium Batter Forklift/IMG_1501.JPG',
      '/Heli/Lithium Batter Forklift/IMG_1502.JPG',
      '/Heli/Lithium Batter Forklift/IMG_1500.JPG',
    ],
    highlights: [
      'Zero emissions for indoor operations',
      'Ultra-fast charging (1-2 hours full charge)',
      'Opportunity charging during breaks',
      'Up to 5x longer battery life vs lead-acid',
      'Consistent power throughout shift',
      'Minimal maintenance requirements',
      'Ideal for multi-shift operations',
      'Smart battery management system'
    ],
    applications: 'Warehouses, Distribution Centers, Cold Storage, Manufacturing Facilities, Retail Operations',
  },
  {
    id: 'electric-forklift',
    category: 'Electric Forklift Series',
    icon: Zap,
    tagline: 'Clean Power, Maximum Efficiency',
    description: 'Versatile electric-powered forklifts designed for indoor operations with quiet performance and zero emissions',
    capacityRange: '1.3 - 2.0 tons',
    images: [
      '/Heli/Electric Forklift Series/G series 1.3-1.5 tons rear looking three-fulcrum battery counterbalanced forklift.avif',
      '/Heli/Electric Forklift Series/G Series 1.5-2 tons standing three-fulcrum battery balanced heavy duty forklift.avif',
    ],
    highlights: [
      'Quiet operation for noise-sensitive environments',
      'Zero emissions for indoor use',
      'Lower operating costs vs IC forklifts',
      'Compact design for tight spaces',
      'Smooth acceleration and braking',
      'Ergonomic operator compartment',
      'Advanced safety features',
      'Various battery options available'
    ],
    applications: 'Warehouses, Food & Beverage, Pharmaceuticals, Electronics, Indoor Logistics',
  },
  {
    id: 'internal-combustion',
    category: 'Internal Combustion Forklift Series',
    icon: Truck,
    tagline: 'Unstoppable Power & Performance',
    description: 'Robust diesel, LPG, and gasoline forklifts engineered for demanding outdoor applications and heavy-duty operations',
    capacityRange: '6.0 - 10.0 tons',
    images: [
      '/Heli/Internal Combustion Forklift Series/G series 8.5-10 tons diesel counterbalanced forklift.avif',
      '/Heli/Internal Combustion Forklift Series/IMG_1483.JPG',
      '/Heli/Internal Combustion Forklift Series/IMG_1479.JPG',
      '/Heli/Internal Combustion Forklift Series/IMG_1480.JPG',
      '/Heli/Internal Combustion Forklift Series/IMG_1481.JPG',
    ],
    highlights: [
      'Powerful engine performance for tough jobs',
      'Suitable for outdoor and rough terrain',
      'High load capacity options',
      'Long continuous operating hours',
      'Durable all-weather construction',
      'Quick refueling for minimal downtime',
      'Excellent traction and stability',
      'Multiple fuel options: Diesel/LPG/Gas'
    ],
    applications: 'Construction Sites, Lumber Yards, Shipping Yards, Heavy Manufacturing, Outdoor Storage',
  },
  {
    id: 'electric-storage',
    category: 'Electric Storage Series',
    icon: PackageOpen,
    tagline: 'Precision in Every Lift',
    description: 'Specialized warehouse equipment including reach trucks, order pickers, and stackers for high-density storage optimization',
    capacityRange: '1.4 - 2.0 tons',
    images: [
      '/Heli/Electric Storage Series/1.4 tons narrow leg electric stacker truck.avif',
      '/Heli/Electric Storage Series/IMG_1534.JPG',
      '/Heli/Electric Storage Series/IMG_1535.JPG',
    ],
    highlights: [
      'Extended vertical reach (up to 12m)',
      'Narrow aisle operation capability',
      'Maximize warehouse storage density',
      'Precise load positioning',
      'Enhanced operator visibility',
      'Smooth lifting and lowering',
      'Energy-efficient operation',
      'Advanced safety systems'
    ],
    applications: 'High-Bay Warehouses, Distribution Centers, Narrow Aisle Storage, Cold Storage Facilities',
  },
  {
    id: 'heavy-forklift',
    category: 'Heavy Forklift Series',
    icon: Factory,
    tagline: 'Built for the Toughest Jobs',
    description: 'Extra heavy-duty forklifts designed to handle the most demanding loads in challenging industrial environments',
    capacityRange: '20.0 - 32.0 tons',
    images: [
      '/Heli/Heavy Forklift Series/G series 20-25 tons internal combustion counterbalanced forklift.avif',
      '/Heli/Heavy Forklift Series/G series 28-32 tons  internal combustion counterbalanced forklift.avif',
    ],
    highlights: [
      'Exceptional lifting capacity',
      'Reinforced frame construction',
      'Heavy-duty transmission',
      'Superior stability under load',
      'Advanced hydraulic systems',
      'Designed for extreme conditions',
      'Long service life',
      'Specialized attachments available'
    ],
    applications: 'Steel Mills, Heavy Manufacturing, Mining Operations, Port Operations, Container Handling',
  },
  {
    id: 'warehouse-truck',
    category: 'Warehouse Truck Series',
    icon: Package,
    tagline: 'Agile Solutions for Every Task',
    description: 'Comprehensive range of material handling equipment including pallet jacks, stackers, and order pickers for efficient warehouse operations',
    capacityRange: '2.0 tons',
    images: [
      '/Heli/Warehouse Truck/Electric Hand Pallet Truck  2 tons.avif',
      '/Heli/Warehouse Truck/IMG_1486.JPG',
    ],
    highlights: [
      'Compact and highly maneuverable',
      'Manual and powered options',
      'Cost-effective solutions',
      'Easy to operate and maintain',
      'Versatile for various applications',
      'Ergonomic design reduces fatigue',
      'Quick deployment and setup',
      'Ideal for horizontal transport'
    ],
    applications: 'Retail Stores, Small Warehouses, Loading Docks, Manufacturing Floors, Distribution',
  },
  {
    id: 'wheel-loader',
    category: 'Wheel Loader Series',
    icon: Tractor,
    tagline: 'Power Meets Versatility',
    description: 'Heavy-duty wheel loaders engineered for construction, earthmoving, and bulk material handling with superior digging force and lifting capacity',
    capacityRange: '1.0 - 5.0 tons',
    images: [
      '/Heli/Wheel Loader/IMG_9478.JPG',
      '/Heli/Wheel Loader/IMG_9466.JPG',
      '/Heli/Wheel Loader/IMG_9665.JPG',
    ],
    highlights: [
      'High breakout force and lift capacity',
      'Durable all-terrain tyres',
      'Powerful hydraulic system',
      'Spacious ergonomic cab',
      'Multiple attachment options',
      'Fuel-efficient engine',
      'Designed for outdoor and rough terrain',
      'Ideal for construction and bulk handling'
    ],
    applications: 'Construction Sites, Quarries, Mining, Ports, Agriculture, Road Building, Bulk Material Handling',
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productFaqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0C1019] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              HELI Forklifts for Sale in the Philippines
            </h1>
            <p className="text-xl text-gray-400 mb-3">
              Authorized HELI Dealer — Guiguinto, Bulacan
            </p>
            <p className="text-gray-500 text-base">
              Lithium battery, electric, diesel forklifts, reach trucks, warehouse equipment & wheel loaders — complete product range with competitive pricing and full after-sales support across Luzon
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {productCategories.map((product, index) => {
              const IconComponent = product.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <CardHeader className="bg-[#F7F7F7]">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 bg-[#FFF0F0]">
                              <IconComponent className="h-8 w-8 text-[#E60012]" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl md:text-3xl">{product.category}</CardTitle>
                              <p className="text-sm font-semibold text-[#E60012] mt-1">
                                {product.tagline}
                              </p>
                            </div>
                          </div>
                          <CardDescription className="text-base md:text-lg">
                            {product.description}
                          </CardDescription>
                        </div>
                        <div className="text-center md:text-right">
                          <div className="inline-block px-4 py-2 bg-[#FFF0F0]">
                            <p className="text-xs text-gray-600 uppercase font-semibold">Capacity Range</p>
                            <p className="text-lg font-bold text-[#E60012]">{product.capacityRange}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {product.images.map((imagePath, imgIndex) => (
                          <div key={imgIndex} className="relative aspect-[4/3] bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <Image
                              src={getAssetPath(imagePath)}
                              alt={`HELI ${product.category} for sale Philippines - ${product.capacityRange} - authorized dealer Bulacan`}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 768px) 50vw, 33vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-[#E60012]" />
                          Key Features & Benefits
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.highlights.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="text-[#E60012] mr-2 font-bold">✓</span>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                          <Warehouse className="h-5 w-5 text-[#E60012]" />
                          Ideal Applications
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {product.applications}
                        </p>
                        <Link
                          href="/contact"
                          className="block text-center bg-[#E60012] hover:bg-[#B8000F] text-white font-semibold px-4 py-2.5 transition-colors duration-150 text-sm"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why HELI */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Why Choose HELI Forklifts?</h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '35+', label: 'Years Manufacturing Experience' },
                { value: '200+', label: 'Product Models Available' },
                { value: '100%', label: 'Quality Assurance' },
                { value: '24/7', label: 'Service Support' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center py-8 px-4 bg-white border border-gray-100">
                  <div className="text-3xl font-bold text-[#E60012] mb-1.5">{value}</div>
                  <p className="text-sm text-gray-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E60012]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Find Your Perfect Material Handling Solution
            </h2>
            <p className="text-red-100 text-lg mb-8">
              Our experts will help you select the right equipment for your specific needs and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E60012] hover:bg-red-50 font-bold px-8 py-4 transition-colors duration-200"
              >
                Request Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Buy HELI Forklifts in the Philippines — Authorized Dealer in Bulacan</h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-8" />
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                <strong>Heli Forklift Philippines</strong> is the authorized HELI forklift dealer serving Metro Manila, Bulacan, Central Luzon, and surrounding provinces. Our showroom and main branch is located at <strong>Km. 60 Plaridel Bypass Road, Brgy. Cutcut, Guiguinto, Bulacan</strong> — conveniently accessible from NLEX and major industrial zones across Luzon.
              </p>
              <p>
                We carry the complete HELI lineup: <strong>lithium battery forklifts</strong> (1–10 tons), <strong>electric forklifts</strong> (1.3–2.0 tons), <strong>diesel and LPG forklifts</strong> (6–10 tons), <strong>reach trucks</strong>, <strong>electric pallet trucks</strong>, <strong>warehouse stackers</strong>, <strong>heavy forklifts</strong> (20–32 tons), and <strong>wheel loaders</strong> (1–5 tons). Whether you need a forklift for a warehouse, cold storage, manufacturing plant, construction site, or logistics hub, we have the right unit at a competitive price.
              </p>
              <p>
                Every purchase comes with full after-sales support: <strong>genuine HELI spare parts</strong>, factory-trained technicians, preventive maintenance programs, and on-site service coverage across the Philippines. Contact us at <strong>+63 991 113 4556</strong> to get a quotation or arrange a product demonstration at your facility.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#E60012] text-[#E60012] hover:bg-[#E60012] hover:text-white font-semibold px-8 py-3 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-10" />
            <div className="space-y-6">
              {[
                {
                  q: 'What is the price of a HELI forklift in the Philippines?',
                  a: 'HELI forklift prices vary by model, type, and capacity. Contact us at +63 991 113 4556 for a detailed quotation tailored to your requirements and budget.'
                },
                {
                  q: 'What types of forklifts do you sell in the Philippines?',
                  a: 'We sell lithium battery forklifts, electric forklifts, diesel forklifts, LPG forklifts, reach trucks, electric pallet trucks, warehouse stackers, heavy forklifts up to 32 tons, and wheel loaders — all HELI brand.'
                },
                {
                  q: 'Do you deliver forklifts outside Bulacan?',
                  a: 'Yes. We deliver and service forklifts across Luzon including Metro Manila, Pampanga, Nueva Ecija, Tarlac, Laguna, Cavite, Batangas, Rizal, and all surrounding provinces.'
                },
                {
                  q: 'Which forklift is best for indoor warehouse use in the Philippines?',
                  a: 'For indoor warehouses, we recommend HELI lithium battery forklifts or electric forklifts — zero emissions, quiet operation, and low running costs. For narrow aisles and vertical storage, HELI reach trucks are ideal.'
                },
                {
                  q: 'Is financing available for forklift purchases?',
                  a: 'Yes, flexible payment plans and financing options are available. Contact us to discuss installment schemes suited to your budget.'
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
