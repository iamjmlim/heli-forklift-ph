import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Settings, Truck, Users, ClipboardCheck, Cog } from 'lucide-react'
import Link from 'next/link'

const ogImage = '/og-image.jpg'

export const metadata: Metadata = {
  title: 'Services — Forklift Maintenance, Repair & Training',
  description: 'Comprehensive forklift services in the Philippines: preventive maintenance, emergency repair, professional installation, operator training, consulting, and equipment customization. 24/7 support available.',
  openGraph: {
    title: 'Forklift Services | Heli Forklift Philippines',
    description: 'Full-service forklift support in the Philippines — maintenance, repair, installation, operator training, and customization. 24/7 availability with fast response times.',
    url: '/services',
    images: [{ url: ogImage, width: 600, height: 450, alt: 'HELI Forklift Services Philippines' }],
  },
}

const services = [
  {
    title: 'Maintenance',
    icon: Wrench,
    description: 'Keep your equipment running at peak performance with our comprehensive maintenance services',
    benefits: [
      'Preventive maintenance schedules',
      'Regular inspections and servicing',
      'Extended equipment lifespan',
      'Reduced downtime',
      'Genuine parts replacement',
      'Detailed service reports'
    ],
    color: 'text-[#0052B4]'
  },
  {
    title: 'Repair',
    icon: Settings,
    description: 'Fast and reliable repair services to minimize downtime and restore operations',
    benefits: [
      'Emergency repair services',
      'Experienced technicians',
      'Quick response time',
      'Quality workmanship',
      'Warranty on repairs',
      'On-site and workshop repairs'
    ],
    color: 'text-[#0052B4]'
  },
  {
    title: 'Installation',
    icon: Truck,
    description: 'Professional installation services ensuring proper setup and safety compliance',
    benefits: [
      'Expert installation team',
      'Safety compliance checks',
      'Equipment testing and calibration',
      'Site assessment',
      'Training on new equipment',
      'Documentation and certification'
    ],
    color: 'text-[#0052B4]'
  },
  {
    title: 'Training',
    icon: Users,
    description: 'Comprehensive training programs for safe and efficient equipment operation',
    benefits: [
      'Certified operator training',
      'Safety protocol education',
      'Hands-on practice sessions',
      'Theory and practical exams',
      'Refresher courses available',
      'Training certificates issued'
    ],
    color: 'text-[#0052B4]'
  },
  {
    title: 'Consulting',
    icon: ClipboardCheck,
    description: 'Expert consulting to optimize your material handling operations and workflows',
    benefits: [
      'Operational assessment',
      'Efficiency improvement strategies',
      'Equipment recommendations',
      'Workflow optimization',
      'Cost-benefit analysis',
      'Long-term planning support'
    ],
    color: 'text-[#0052B4]'
  },
  {
    title: 'Customization',
    icon: Cog,
    description: 'Tailored solutions and modifications to meet your specific operational requirements',
    benefits: [
      'Custom attachments and accessories',
      'Equipment modifications',
      'Specialized configurations',
      'Industry-specific adaptations',
      'Enhanced safety features',
      'Performance upgrades'
    ],
    color: 'text-[#0052B4]'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001A47] to-[#002E7D] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Services
            </h1>
            <p className="text-xl text-blue-200">
              Comprehensive support services to keep your operations running smoothly and efficiently
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className={`h-10 w-10 ${service.color}`} />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-gray-900">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <span className="text-[#0052B4] mr-2">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-16 bg-[#F5F7FB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Service Commitment</h2>
            <div className="w-10 h-0.5 bg-[#0052B4] mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '24/7', label: 'Available Support', desc: 'Round-the-clock assistance when you need it most' },
                { value: '100%', label: 'Satisfaction Guarantee', desc: 'We stand behind the quality of our work' },
                { value: '<2h', label: 'Fast Response', desc: 'Quick response times for urgent service needs' },
              ].map(({ value, label, desc }) => (
                <div key={label} className="text-center py-8 px-6 bg-white border border-gray-100 rounded-sm">
                  <div className="text-3xl font-bold text-[#0052B4] mb-2">{value}</div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{label}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0052B4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Service Support?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us today to schedule a service or discuss your requirements
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0052B4] hover:bg-blue-50 font-bold px-8 py-4 rounded-sm transition-colors duration-200"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

