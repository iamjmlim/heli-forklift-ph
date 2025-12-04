import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Truck, Wrench, Users, Shield, ArrowRight, Battery, PackageOpen, Boxes } from 'lucide-react'
import { getAssetPath } from '@/lib/paths'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Industrial Material Handling Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Premium HELI forklifts, reach trucks, and material handling equipment with comprehensive service and support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={getAssetPath('/Heli/Lithium Batter Forklift/G2 series 1.5-3.8 tons lithium battery counterbalanced forklift.avif')}
                alt="HELI Lithium Battery Forklift - Premium Material Handling Equipment"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            HELI Forklift Product Range
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive material handling solutions from one of the world&apos;s leading forklift manufacturers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Lithium Battery Forklift</CardTitle>
                <CardDescription>
                  Advanced eco-friendly forklifts with fast-charging lithium technology. Zero emissions, 
                  minimal maintenance, ideal for multi-shift operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Internal Combustion Series</CardTitle>
                <CardDescription>
                  Powerful diesel, LPG, and gasoline forklifts for outdoor operations. 
                  Built for tough jobs and all-weather performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Electric Forklift Series</CardTitle>
                <CardDescription>
                  Quiet, efficient electric forklifts perfect for indoor operations. 
                  Lower costs with zero emissions and smooth operation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <PackageOpen className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Electric Storage Series</CardTitle>
                <CardDescription>
                  Reach trucks, order pickers, and stackers for high-density warehouse 
                  storage. Maximize vertical space efficiently.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Boxes className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Heavy Forklift Series</CardTitle>
                <CardDescription>
                  Extra heavy-duty forklifts (8-46 tons) for demanding industrial applications. 
                  Built for extreme loads and conditions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <PackageOpen className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Warehouse Truck Series</CardTitle>
                <CardDescription>
                  Pallet jacks, stackers, and material handling equipment. 
                  Agile solutions for efficient warehouse operations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products & Specifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-orange-500 mb-3" />
                <CardTitle>Maintenance & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional maintenance and repair services to keep your equipment running at peak performance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-red-600 mb-3" />
                <CardTitle>Training & Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert training programs and consulting services to optimize your material handling operations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-orange-500 mb-3" />
                <CardTitle>Installation & Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tailored installation and customization solutions to meet your specific operational requirements
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" size="lg">
                Learn More About Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Heli Forklift Philippines?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us today to discuss your material handling needs
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

