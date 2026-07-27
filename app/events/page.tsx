import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAssetPath } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Events & Exhibits',
  description: 'See Heli Forklift Philippines in action — from client equipment displays in Bocaue to international HELI trade exhibitions in Malaysia. Real equipment, real demos.',
  openGraph: {
    title: 'Events & Exhibits | Heli Forklift Philippines',
    description: 'Photo gallery of HELI forklift events and exhibits — Bocaue client display and Malaysia international trade show.',
    url: '/events',
  },
}

const events = [
  {
    title: 'Bocaue Client Display',
    subtitle: 'Bocaue, Bulacan — Philippines',
    description: 'Live equipment display and demonstration event for clients, showcasing HELI forklifts in action with on-site service demos and our sales team.',
    images: [
      '/Events/Bocaue display/IMG_0565.JPG',
      '/Events/Bocaue display/IMG_1457.JPG',
      '/Events/Bocaue display/IMG_0505.JPG',
      '/Events/Bocaue display/IMG_0598.JPG',
      '/Events/Bocaue display/IMG_0467.JPG',
      '/Events/Bocaue display/IMG_0468.JPG',
    ],
  },
  {
    title: 'Malaysia International Exhibit',
    subtitle: 'Kuala Lumpur, Malaysia',
    description: 'HELI equipment on display at an international trade exhibition in Malaysia, featuring the latest electric pallet trucks, reach trucks, and counterbalanced forklifts.',
    images: [
      '/Events/malaysia exhibit/Image_20260523104627_3590_8.jpg',
      '/Events/malaysia exhibit/Image_20260523105205_3604_8.jpg',
      '/Events/malaysia exhibit/Image_20260523105513_3610_8.jpg',
      '/Events/malaysia exhibit/Image_20260523111514_3614_8.jpg',
      '/Events/malaysia exhibit/Image_20260601101126_294_89.jpg',
      '/Events/malaysia exhibit/Image_20260601101131_300_89.jpg',
    ],
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Events & Exhibits
            </h1>
            <p className="text-xl text-gray-600">
              From local client displays to international trade exhibitions — see HELI equipment up close
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {events.map((event, eventIndex) => (
              <div key={eventIndex}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{event.title}</h2>
                  <p className="text-orange-500 font-medium text-sm mb-3">{event.subtitle}</p>
                  <p className="text-gray-600 max-w-2xl">{event.description}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={getAssetPath(src)}
                        alt={`${event.title} photo ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in a Live Demo?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us to arrange a product demonstration at your facility
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
