import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'

const ogImage = '/og-image.jpg'

export const metadata: Metadata = {
  title: 'Contact Us — Heli Forklift Philippines, Guiguinto Bulacan',
  description: 'Contact Heli Forklift Philippines at Km. 60 Plaridel Bypass Road, Guiguinto, Bulacan. Call +63 991 113 4556 or email agaropher111@gmail.com. Open Monday–Sunday, 8:30AM–5:30PM.',
  keywords: [
    // Contact intent
    'contact forklift dealer Philippines',
    'forklift supplier Bulacan contact',
    'HELI forklift Philippines contact',
    'HELI forklift phone number Philippines',
    'forklift dealer phone number Philippines',
    'HELI forklift email Philippines',
    'forklift inquiry Philippines',
    'forklift quote Philippines',
    'forklift quotation Philippines',
    'request forklift quote Philippines',
    'forklift consultation Philippines',
    // Buy intent with location
    'buy forklift Bulacan',
    'buy forklift Guiguinto',
    'buy forklift Central Luzon',
    'buy forklift Metro Manila',
    'forklift dealer Guiguinto Bulacan',
    'forklift dealer near me Philippines',
    'forklift supplier near me Philippines',
    // Directions / visit
    'forklift showroom Philippines',
    'forklift showroom Bulacan',
    'Heli Forklift Philippines address',
    'Heli Forklift Philippines location',
    'Km 60 Plaridel Bypass Road forklift',
    'Guiguinto Bulacan forklift dealer',
    // Messenger / chat
    'forklift dealer Viber Philippines',
    'forklift dealer Messenger Philippines',
    'chat forklift dealer Philippines',
  ],
  alternates: { canonical: 'https://heliforkliftph.com/contact' },
  openGraph: {
    title: 'Contact Heli Forklift Philippines | Guiguinto, Bulacan',
    description: 'Reach us at Km. 60 Plaridel Bypass Road, Guiguinto, Bulacan — call +63 991 113 4556 or message us on Messenger, Viber, or WeChat. Open daily 8:30AM–5:30PM.',
    url: '/contact',
    images: [{ url: ogImage, width: 600, height: 450, alt: 'Contact Heli Forklift Philippines' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas in the Philippines do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve clients throughout the Philippines from our main branch in Guiguinto, Bulacan, with a strong focus on Metro Manila, Central Luzon, and surrounding regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer financing options for HELI forklifts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer flexible financing options to suit your budget. Contact our sales team at +63 991 113 4556 to discuss available payment plans and financing solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty do HELI forklifts come with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All HELI equipment comes with manufacturer warranties. Extended warranty options are also available. Specific warranty terms vary by product — contact us for detailed information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is your showroom or branch located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our main branch is located at Km. 60 Plaridel Bypass Road, Brgy. Cutcut, Guiguinto, Bulacan, Philippines. We are open Monday to Sunday, 8:30AM to 5:30PM.',
      },
    },
  ],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-[#0C1019] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-400">
              Get in touch with us today. We&apos;re here to help with all your material handling needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-white">
        <div className="container mx-auto px-6 md:px-10 pb-16">
          <div className="mb-6">
            <p className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-2">Find Us</p>
            <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
            <p className="text-gray-500 text-sm mt-1">Km. 60 Plaridel Bypass Road, Brgy. Cutcut, Guiguinto, Bulacan</p>
          </div>
          <div className="w-full overflow-hidden border border-gray-100" style={{ height: '420px' }}>
            <iframe
              src="https://maps.google.com/maps?q=14.862974228343873,120.89040530690504&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heli Forklift Philippines — Guiguinto, Bulacan"
            />
          </div>
          <a
            href="https://maps.google.com/maps?q=14.862974228343873,120.89040530690504"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#E60012] text-sm font-semibold mt-3 hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-10" />
            <div className="space-y-6">
              <Card className="border-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg">What areas do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We serve clients throughout the Philippines, with a focus on Metro Manila and surrounding regions.
                    Contact us to discuss service availability in your area.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer financing options?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we offer flexible financing options to suit your budget. Contact our sales team to discuss
                    available payment plans and financing solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg">What warranty do you provide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All our equipment comes with manufacturer warranties. Extended warranty options are also available.
                    Specific warranty terms vary by product — contact us for detailed information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
