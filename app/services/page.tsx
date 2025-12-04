import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Settings, Truck, Users, ClipboardCheck, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
    color: 'text-orange-500'
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
    color: 'text-red-600'
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
    color: 'text-orange-500'
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
    color: 'text-red-600'
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
    color: 'text-orange-500'
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
    color: 'text-red-600'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
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
                          <span className="text-orange-500 mr-2">✓</span>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Service Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">24/7</span>
                </div>
                <h3 className="font-semibold mb-2">Available Support</h3>
                <p className="text-gray-600">Round-the-clock assistance when you need it most</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">100%</span>
                </div>
                <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
                <p className="text-gray-600">We stand behind the quality of our work</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">&lt;2h</span>
                </div>
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600">Quick response times for urgent service needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Service Support?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to schedule a service or discuss your requirements
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

