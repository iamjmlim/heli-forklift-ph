import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Settings, Truck, Users, ClipboardCheck, Cog } from 'lucide-react'
import Link from 'next/link'

const ogImage = '/og-image.jpg'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Forklift Services in the Philippines — Heli Forklift Philippines',
  description: 'Complete forklift maintenance, repair, installation, and operator training services across the Philippines from authorized HELI dealer in Guiguinto, Bulacan.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Forklift Preventive Maintenance Philippines', description: 'Scheduled preventive maintenance (PMS) for HELI forklifts and all brands across Metro Manila, Bulacan, Central Luzon, and surrounding provinces.', provider: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'Philippines', serviceType: 'Forklift Maintenance' } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Forklift Repair Philippines', description: 'Emergency and scheduled forklift repair services for all brands. On-site and workshop repairs with genuine parts. Fast response time across Luzon.', provider: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'Philippines', serviceType: 'Forklift Repair' } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Forklift Operator Training Philippines', description: 'Certified forklift operator training and safety programs for warehouse and industrial workers across the Philippines.', provider: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'Philippines', serviceType: 'Forklift Training' } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Forklift Parts and Spare Parts Philippines', description: 'Genuine HELI forklift spare parts and accessories available for all models. Fast delivery across Luzon.', provider: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'Philippines', serviceType: 'Forklift Parts' } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Forklift Installation Philippines', description: 'Professional forklift installation, setup, and commissioning services with safety compliance checks and operator orientation.', provider: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'Philippines', serviceType: 'Forklift Installation' } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Forklift Rental Philippines', description: 'Short-term and long-term forklift rental and leasing options for businesses across the Philippines.', provider: { '@type': 'LocalBusiness', name: 'Heli Forklift Philippines' }, areaServed: 'Philippines', serviceType: 'Forklift Rental' } },
  ],
}

const serviceFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you service forklifts outside Bulacan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Heli Forklift Philippines provides forklift maintenance and repair services across Metro Manila, Bulacan, Pampanga, Nueva Ecija, Tarlac, Laguna, Cavite, Batangas, Rizal, and surrounding provinces throughout Luzon.' } },
    { '@type': 'Question', name: 'How often should a forklift be serviced?', acceptedAnswer: { '@type': 'Answer', text: 'HELI recommends preventive maintenance every 250 operating hours or every 3 months, whichever comes first. High-usage forklifts in multi-shift operations may require more frequent servicing. Our team can set up a customized maintenance schedule for your fleet.' } },
    { '@type': 'Question', name: 'Do you offer emergency forklift repair in the Philippines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer emergency forklift repair services with fast response times. Contact us immediately at +63 991 113 4556 via call, Viber, or Messenger for urgent repair assistance.' } },
    { '@type': 'Question', name: 'Do you sell genuine HELI forklift spare parts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We supply genuine HELI forklift spare parts and accessories for all models including lithium battery forklifts, electric forklifts, diesel forklifts, and reach trucks. Parts are available at our Guiguinto, Bulacan branch.' } },
  ],
}

export const metadata: Metadata = {
  title: 'Services — Forklift Maintenance, Repair & Training in the Philippines',
  description: 'Complete forklift after-sales services in the Philippines from our Bulacan base: preventive maintenance, emergency repair, professional installation, operator training, and equipment customization for HELI forklifts.',
  keywords: [
    // Maintenance
    'forklift maintenance Philippines',
    'forklift preventive maintenance Philippines',
    'forklift scheduled maintenance Philippines',
    'HELI forklift maintenance Philippines',
    'forklift PMS Philippines',
    'forklift check up Philippines',
    // Repair
    'forklift repair Philippines',
    'forklift repair Bulacan',
    'forklift repair Metro Manila',
    'HELI forklift repair',
    'forklift troubleshooting Philippines',
    'forklift emergency repair Philippines',
    'forklift breakdown repair Philippines',
    'forklift overhaul Philippines',
    // Parts
    'forklift parts Philippines',
    'forklift spare parts Philippines',
    'HELI forklift parts Philippines',
    'forklift battery Philippines',
    'forklift tires Philippines',
    'forklift mast Philippines',
    'forklift hydraulic Philippines',
    // Service general
    'forklift service Philippines',
    'forklift service Bulacan',
    'forklift service Guiguinto',
    'forklift service Metro Manila',
    'forklift service Central Luzon',
    'forklift after-sales Philippines',
    'forklift after-sales service Philippines',
    'forklift technician Philippines',
    'forklift mechanic Philippines',
    // Installation
    'forklift installation Philippines',
    'forklift setup Philippines',
    // Training
    'forklift operator training Philippines',
    'forklift training Philippines',
    'forklift operator certification Philippines',
    'TESDA forklift training Philippines',
    'forklift safety training Philippines',
    // Rental
    'forklift rental Philippines',
    'forklift for rent Philippines',
    'forklift hire Philippines',
    'forklift lease Philippines',
    'monthly forklift rental Philippines',
    // Location
    'forklift service Pampanga',
    'forklift service Laguna',
    'forklift service Cavite',
    'forklift service Nueva Ecija',
    'forklift service Tarlac',
  ],
  alternates: { canonical: 'https://heliforkliftph.com/services' },
  openGraph: {
    title: 'Forklift Maintenance, Repair & Service in the Philippines',
    description: 'Full after-sales support for HELI forklifts in the Philippines — preventive maintenance, emergency repairs, installation, and certified operator training. Based in Guiguinto, Bulacan.',
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
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0C1019] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Forklift Maintenance, Repair & Service in the Philippines
            </h1>
            <p className="text-xl text-gray-400">
              Complete after-sales support for HELI forklifts — based in Guiguinto, Bulacan, serving all of Luzon
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
                      <IconComponent className="h-10 w-10 text-[#E60012]" />
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
                          <span className="text-[#E60012] mr-2">✓</span>
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
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Service Commitment</h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '24/7', label: 'Available Support', desc: 'Round-the-clock assistance when you need it most' },
                { value: '100%', label: 'Satisfaction Guarantee', desc: 'We stand behind the quality of our work' },
                { value: '<2h', label: 'Fast Response', desc: 'Quick response times for urgent service needs' },
              ].map(({ value, label, desc }) => (
                <div key={label} className="text-center py-8 px-6 bg-white border border-gray-100">
                  <div className="text-3xl font-bold text-[#E60012] mb-2">{value}</div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{label}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rich content + coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Forklift Service Coverage Across the Philippines</h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-8" />
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4 mb-10">
              <p>
                <strong>Heli Forklift Philippines</strong> provides comprehensive forklift maintenance and repair services across <strong>Metro Manila, Bulacan, Pampanga, Nueva Ecija, Tarlac, Laguna, Cavite, Batangas, Rizal</strong>, and all surrounding provinces. Our team of factory-trained technicians handles all HELI forklift models — lithium battery, electric, diesel, and LPG — with guaranteed genuine spare parts.
              </p>
              <p>
                We offer <strong>preventive maintenance (PMS)</strong> scheduled every 250 operating hours, <strong>emergency repair</strong> with fast on-site response, <strong>forklift overhaul</strong> for aging units, and <strong>certified operator training</strong> for warehouse and industrial staff. All services are performed by experienced HELI-certified technicians from our base in <strong>Guiguinto, Bulacan</strong>.
              </p>
              <p>
                For urgent breakdown repairs, contact us immediately at <strong>+63 991 113 4556</strong> via call, Viber, or Messenger. We respond fast to minimize your operational downtime.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Metro Manila', 'Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Laguna', 'Cavite', 'Batangas', 'Rizal', 'Zambales', 'Bataan', 'Quezon Province'].map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-gray-700 bg-[#F7F7F7] px-3 py-2">
                  <span className="text-[#E60012] font-bold">✓</span> {area}
                </div>
              ))}
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
                { q: 'Do you service forklifts outside Bulacan?', a: 'Yes. We cover Metro Manila, Bulacan, Pampanga, Nueva Ecija, Tarlac, Laguna, Cavite, Batangas, Rizal, and surrounding Luzon provinces.' },
                { q: 'How often should a forklift be serviced?', a: 'HELI recommends preventive maintenance every 250 operating hours or every 3 months, whichever comes first. We can set up a custom maintenance schedule for your fleet.' },
                { q: 'Do you offer emergency forklift repair?', a: 'Yes. Call or message us at +63 991 113 4556 via call, Viber, or Messenger for urgent breakdown assistance. Fast on-site response across Luzon.' },
                { q: 'Do you sell genuine HELI spare parts?', a: 'Yes. We supply genuine HELI spare parts for all models — lithium battery, electric, diesel forklifts, reach trucks, and warehouse equipment. Available at our Guiguinto, Bulacan branch.' },
                { q: 'Do you offer forklift rental in the Philippines?', a: 'Yes, short-term and long-term forklift rental and leasing options are available. Contact us to discuss rates and availability.' },
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

      {/* CTA */}
      <section className="py-16 bg-[#E60012]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Forklift Service in the Philippines?</h2>
            <p className="text-red-100 text-lg mb-8">
              Contact us today to schedule maintenance, request a repair, or get a service quotation
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#E60012] hover:bg-red-50 font-bold px-8 py-4 transition-colors duration-200"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
