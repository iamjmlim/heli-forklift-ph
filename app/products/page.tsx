import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Battery, Truck, PackageOpen, Boxes, Forklift, Package, Zap, Factory, Warehouse, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-l-orange-500'
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
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-l-red-600'
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
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-l-orange-500'
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
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-l-red-600'
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
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-l-orange-500'
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
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-l-red-600'
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              HELI Forklift Product Range
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Discover exceptional HELI Forklifts where cutting-edge technology meets unparalleled performance
            </p>
            <p className="text-lg text-gray-500">
              From powerful internal combustion models to efficient electric solutions, HELI offers tailored equipment 
              designed to enhance productivity and reliability in any industrial setting
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - Detailed Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {productCategories.map((product, index) => {
              const IconComponent = product.icon
              return (
                <Card key={index} className={`hover:shadow-2xl transition-all duration-300 border-l-4 ${product.borderColor}`}>
                  <CardHeader className={product.bgColor}>
                    <div className="flex flex-col gap-4">
                      {/* Title and Description Row */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`p-3 rounded-lg ${index % 2 === 0 ? 'bg-orange-100' : 'bg-red-100'}`}>
                              <IconComponent className={`h-8 w-8 ${product.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl md:text-3xl">{product.category}</CardTitle>
                              <p className={`text-sm font-semibold ${product.color} mt-1`}>
                                {product.tagline}
                              </p>
                            </div>
                          </div>
                          <CardDescription className="text-base md:text-lg">
                            {product.description}
                          </CardDescription>
                        </div>
                        <div className="text-center md:text-right">
                          <div className={`inline-block px-4 py-2 rounded-lg ${index % 2 === 0 ? 'bg-orange-100' : 'bg-red-100'}`}>
                            <p className="text-xs text-gray-600 uppercase font-semibold">Capacity Range</p>
                            <p className={`text-lg font-bold ${product.color}`}>{product.capacityRange}</p>
                          </div>
                        </div>
                      </div>

                      {/* Product Images Row */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {product.images.map((imagePath, imgIndex) => (
                          <div key={imgIndex} className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <Image
                              src={imagePath}
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
                      {/* Key Features */}
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-orange-500" />
                          Key Features & Benefits
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.highlights.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className={`${product.color} mr-2 font-bold`}>✓</span>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                          <Warehouse className="h-5 w-5 text-red-600" />
                          Ideal Applications
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {product.applications}
                        </p>
                        <Link href="/contact">
                          <Button variant={index % 2 === 0 ? "default" : "secondary"} className="w-full">
                            Request Quote
                          </Button>
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

      {/* Why Choose HELI */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose HELI Forklifts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">35+</div>
                  <p className="text-gray-600">Years Manufacturing Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                  <p className="text-gray-600">Product Models Available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <p className="text-gray-600">Quality Assurance</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <p className="text-gray-600">Service Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Find Your Perfect Material Handling Solution
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team of experts will help you select the right equipment for your specific needs and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Request Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-orange-600">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
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
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
