import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Award, Users } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Heli Forklift Philippines — an authorized HELI sales agent with 15+ years of experience delivering premium material handling equipment and services across the Philippines.',
  openGraph: {
    title: 'About Us | Heli Forklift Philippines',
    description: 'Authorized HELI sales agent in the Philippines with 15+ years of experience. 500+ happy clients, 1000+ units deployed, and 24/7 technical support.',
    url: '/about',
    images: [{ url: '/og-image.jpg', width: 600, height: 450, alt: 'HELI Forklift Philippines' }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#001A47] to-[#002E7D] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About Us
            </h1>
            <p className="text-xl text-blue-200">
              Your trusted partner in industrial material handling solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Story</h2>
            <div className="w-10 h-0.5 bg-[#0052B4] mb-8" />
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Heli Forklift Philippines has been an authorized HELI sales agent delivering
                premium material handling equipment in the Philippines for over 15 years. As a trusted
                local partner of HELI — one of the world&apos;s largest forklift manufacturers — we specialize
                in supplying high-quality forklifts, reach trucks, warehouse equipment, and comprehensive
                service solutions to businesses across various industries.
              </p>
              <p>
                Our partnership with HELI gives us access to cutting-edge technology and a comprehensive
                product range that spans from compact warehouse trucks to heavy-duty industrial forklifts.
                HELI&apos;s decades of manufacturing excellence combined with our local expertise ensures that
                our clients receive world-class equipment backed by exceptional service and support.
              </p>
              <p>
                Our commitment to excellence, combined with a deep understanding of the Philippine market,
                has made us the preferred choice for companies seeking reliable material handling solutions.
                We pride ourselves on building long-term partnerships through comprehensive support, training,
                and maintenance services — not just selling equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#F5F7FB]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border-gray-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#E8F2FF] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-[#0052B4]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To provide innovative, reliable, and cost-effective material handling solutions through
                    world-class HELI equipment that enhance operational efficiency and safety for businesses
                    across the Philippines — backed by factory-trained expertise and exceptional service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#E8F2FF] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Eye className="h-5 w-5 text-[#0052B4]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted HELI partner for industrial material handling in the Philippines,
                    recognized for commitment to innovation, customer success, and unparalleled local service
                    and support.
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
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Core Values</h2>
            <div className="w-10 h-0.5 bg-[#0052B4] mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, label: 'Quality', desc: 'We never compromise on the quality of our products and services' },
                { icon: Users, label: 'Customer Focus', desc: 'Our customers\' success is our success' },
                { icon: Target, label: 'Integrity', desc: 'We conduct business with honesty and transparency' },
                { icon: Eye, label: 'Innovation', desc: 'We embrace new technologies and continuous improvement' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="w-14 h-14 bg-[#E8F2FF] rounded-sm flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-[#0052B4]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F5F7FB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Impact</h2>
            <div className="w-10 h-0.5 bg-[#0052B4] mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '15+', label: 'Years in Business' },
                { value: '500+', label: 'Happy Clients' },
                { value: '1000+', label: 'HELI Units Deployed' },
                { value: '24/7', label: 'Technical Support' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center py-8 px-4 bg-white border border-gray-100 rounded-sm">
                  <div className="text-4xl font-bold text-[#0052B4] mb-1.5">{value}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-[#001A47] rounded-sm text-center">
              <h3 className="text-xl font-bold mb-3 text-white">
                Authorized HELI Sales Agent
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed max-w-2xl mx-auto">
                As an authorized sales agent of HELI — one of the world&apos;s top forklift manufacturers
                with decades of manufacturing excellence — we provide access to a comprehensive product range,
                genuine parts, factory-trained technicians, and full warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0052B4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-blue-100 text-lg mb-8">
              Discover how we can help optimize your material handling operations
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0052B4] hover:bg-blue-50 font-bold px-8 py-4 rounded-sm transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
