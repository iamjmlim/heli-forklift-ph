import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in industrial material handling solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Heli Forklift Philippines has been a leading authorized distributor of HELI material handling equipment 
                in the Philippines for over 15 years. As a trusted partner of HELI - one of the world&apos;s largest forklift 
                manufacturers - we specialize in delivering high-quality forklifts, reach trucks, warehouse equipment, 
                and comprehensive service solutions to businesses across various industries.
              </p>
              <p>
                Our partnership with HELI gives us access to cutting-edge technology and a comprehensive product range 
                that spans from compact warehouse trucks to heavy-duty industrial forklifts. HELI&apos;s 35+ years of manufacturing 
                excellence combined with our local expertise ensures that our clients receive world-class equipment backed 
                by exceptional service and support.
              </p>
              <p>
                Our commitment to excellence, combined with our deep understanding of the Philippine market needs, has 
                made us the preferred choice for companies seeking reliable material handling solutions. We pride ourselves 
                on not just selling equipment, but building long-term partnerships with our clients through comprehensive 
                support, training, and maintenance services.
              </p>
              <p>
                With a team of factory-trained professionals and a comprehensive service network, we ensure that your 
                operations run smoothly and efficiently. From initial consultation and equipment selection to installation, 
                training, and ongoing after-sales support, we&apos;re with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-10 w-10 text-orange-500" />
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To provide innovative, reliable, and cost-effective material handling solutions through 
                    world-class HELI equipment that enhance operational efficiency and safety for businesses 
                    across the Philippines. We strive to exceed customer expectations through quality products, 
                    factory-trained expertise, and exceptional service backed by HELI&apos;s global manufacturing excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-10 w-10 text-red-600" />
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    To be the most trusted and preferred HELI distributor and partner for industrial material 
                    handling solutions in the Philippines, recognized for our commitment to innovation, 
                    sustainability, customer success, and delivering world-class HELI equipment with unparalleled 
                    local service and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">
                  We never compromise on the quality of our products and services
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Customer Focus</h3>
                <p className="text-gray-600 text-sm">
                  Our customers&apos; success is our success
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We conduct business with honesty and transparency
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We embrace new technologies and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <p className="text-gray-600">Years in Business</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
                <p className="text-gray-600">HELI Units Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-600">Technical Support</p>
              </div>
            </div>
            
            {/* HELI Partnership Highlight */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Authorized HELI Distributor
                  </h3>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    As an authorized distributor of HELI - one of the world&apos;s top forklift manufacturers with 35+ years 
                    of excellence - we bring you access to over 200 product models, genuine parts, factory-trained 
                    technicians, and comprehensive warranty coverage. HELI&apos;s global reputation for quality and innovation 
                    is your guarantee of reliable material handling solutions.
                  </p>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how we can help optimize your material handling operations
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

