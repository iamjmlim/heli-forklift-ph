import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'

const ogImage = '/og-image.jpg'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Heli Forklift Philippines. Request a quote, schedule a demo, or inquire about forklift sales, maintenance, and repair services across the Philippines.',
  openGraph: {
    title: 'Contact Us | Heli Forklift Philippines',
    description: 'Get in touch with Heli Forklift Philippines. Request a quote, schedule a demo, or inquire about forklift sales and service.',
    url: '/contact',
    images: [{ url: ogImage, width: 600, height: 450, alt: 'Contact Heli Forklift Philippines' }],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
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
              <Card>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What warranty do you provide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All our equipment comes with manufacturer warranties. Extended warranty options are also available.
                    Specific warranty terms vary by product - contact us for detailed information.
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
