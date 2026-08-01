import type { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Battery, Truck, PackageOpen, Zap, Factory, Package, Warehouse, TrendingUp, Tractor } from 'lucide-react'
import Link from 'next/link'
import { getAssetPath } from '@/lib/paths'

const ogImage = '/og-image.jpg'

export const metadata: Metadata = {
  title: 'Products — HELI Forklifts & Material Handling Equipment',
  description: 'Browse the full HELI forklift range in the Philippines: lithium battery forklifts, electric forklifts, diesel forklifts, reach trucks, electric storage equipment, heavy forklifts, warehouse trucks, and wheel loaders.',
  openGraph: {
    title: 'HELI Forklift Products | Heli Forklift Philippines',
    description: 'Complete HELI forklift product range — lithium battery, electric, diesel, reach trucks, heavy forklifts, warehouse equipment, and wheel loaders available in the Philippines.',
    url: '/products',
    images: [{ url: ogImage, width: 600, height: 450, alt: 'HELI Forklift Products' }],
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
      {/* Hero */}
      <section className="bg-[#0C1019] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              HELI Forklift Product Range
            </h1>
            <p className="text-xl text-gray-400 mb-3">
              Cutting-edge technology meets unparalleled performance
            </p>
            <p className="text-gray-500 text-base">
              From powerful internal combustion models to efficient electric solutions — tailored for every industrial application
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
                              alt={`${product.category} - Model ${imgIndex + 1}`}
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
            <h2 className="text-3xl font-bold text-center mb-8">Complete Material Handling Solutions</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                As an authorized HELI distributor in the Philippines, we provide access to one of the world&apos;s leading
                forklift manufacturers. HELI&apos;s comprehensive product range ensures we have the perfect solution for
                every material handling challenge, from light-duty warehouse operations to heavy industrial applications.
              </p>
              <p>
                Every HELI forklift is engineered with precision and built to international quality standards. Our
                partnership with HELI allows us to offer competitive pricing, genuine parts, factory-trained technicians,
                and comprehensive warranty coverage.
              </p>
              <p>
                Whether you need a single unit or a complete fleet, we provide tailored solutions including equipment
                selection, site assessment, operator training, preventive maintenance programs, and 24/7 emergency support.
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
    </div>
  )
}
