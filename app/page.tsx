import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Wrench, Users, Shield, Zap, Truck, ChevronDown } from 'lucide-react'
import { getAssetPath } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Authorized HELI Forklift Distributor in the Philippines',
  description: 'Heli Forklift Philippines is an authorized HELI sales agent offering lithium battery forklifts, electric forklifts, diesel forklifts, reach trucks, and warehouse equipment with full after-sales support.',
  openGraph: {
    title: 'Heli Forklift Philippines | Authorized HELI Distributor',
    description: 'Authorized HELI distributor in the Philippines. Premium forklifts and material handling equipment with full sales, maintenance, and repair support.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 600, height: 450, alt: 'HELI Forklift Philippines' }],
  },
}

const solutions = [
  {
    id: 'counterbalanced',
    title: 'Counterbalanced Forklifts',
    desc: 'Diesel, LPG, and electric counterbalanced forklifts for every load capacity.',
    image: '/Heli/Internal Combustion Forklift Series/G series 8.5-10 tons diesel counterbalanced forklift.avif',
  },
  {
    id: 'lithium-electric',
    title: 'Lithium & Electric Solutions',
    desc: 'Zero-emission, fast-charging solutions for multi-shift indoor operations.',
    image: '/Heli/Lithium Batter Forklift/G2 series 1.5-3.8 tons lithium battery counterbalanced forklift.avif',
  },
  {
    id: 'warehouse',
    title: 'Warehouse Equipment',
    desc: 'Reach trucks, stackers, order pickers, and pallet jacks for high-density storage.',
    image: '/Heli/Electric Storage Series/1.4 tons narrow leg electric stacker truck.avif',
  },
  {
    id: 'heavy',
    title: 'Heavy & Specialty Equipment',
    desc: 'Heavy forklifts and wheel loaders built for the toughest industrial applications.',
    image: '/Heli/Wheel Loader/IMG_9478.JPG',
  },
]

const services = [
  { icon: Wrench, title: 'Maintenance & Repair', desc: 'Preventive schedules, genuine parts, and emergency on-site repair.' },
  { icon: Users, title: 'Operator Training', desc: 'Certified programs covering safety protocols and hands-on operation.' },
  { icon: Shield, title: 'Installation', desc: 'Professional setup with safety compliance checks and commissioning.' },
  { icon: Zap, title: 'Customization', desc: 'Tailored attachments and configurations for your specific workflow.' },
  { icon: Truck, title: 'Parts Supply', desc: 'Genuine HELI spare parts with fast turnaround to minimize downtime.' },
  { icon: Shield, title: 'Consulting', desc: 'Operational assessments to optimize your material handling costs.' },
]

const eventPreviews = [
  { src: '/Events/Bocaue display/IMG_0565.JPG', label: 'Bocaue Client Display', loc: 'Bocaue, Bulacan — Philippines' },
  { src: '/Events/Bocaue display/IMG_1457.JPG', label: 'Equipment Demonstration', loc: 'Bocaue, Bulacan — Philippines' },
  { src: '/Events/malaysia exhibit/Image_20260523104627_3590_8.jpg', label: 'Malaysia International Exhibit', loc: 'Kuala Lumpur, Malaysia' },
]

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0C1019]">
        <Image
          src={getAssetPath('/Events/Bocaue display/IMG_0565.JPG')}
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1019] via-[#0C1019]/90 to-[#0C1019]/40" />

        <div className="relative z-10 container mx-auto px-4 py-28">
          <div className="max-w-2xl">
            <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Authorized HELI Sales Agent · Philippines
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6" style={{ color: '#ffffff' }}>
              Industrial<br />Material Handling<br />Excellence
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Premium HELI forklifts and warehouse equipment with full sales, installation, and service support across the Philippines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#E60012] hover:bg-[#B8000F] text-white font-semibold px-7 py-3.5 transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white font-semibold px-7 py-3.5 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 opacity-60" />
        </div>
      </section>

      {/* ── Company Introduction — mirrors helichina.net about section ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

            {/* Left: description */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273240' }}>
                HELI, Leading Industrial Lift Truck Brand
              </h2>
              <div className="w-12 h-0.5 bg-[#E60012] mb-7" />
              <p className="text-gray-600 leading-relaxed mb-4">
                HELI is one of the world&apos;s largest forklift manufacturers, founded in 1958 and now exporting to over 100 countries. With more than 600 product models and a top-ranked position in China, HELI equipment is trusted by businesses across every major industry for its performance, reliability, and innovation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As an authorized HELI sales agent in the Philippines, we bring that global manufacturing excellence to local businesses — with full sales support, professional installation, operator training, genuine parts, and dedicated after-sales service across Metro Manila and the wider Philippines.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#E60012] font-semibold text-sm hover:gap-3 transition-all duration-150"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: 4 stats in 2×2 grid */}
            <div className="lg:w-2/5 grid grid-cols-2 gap-4 w-full">
              {[
                { value: '1958', label: 'Year Founded' },
                { value: '100+', label: 'Countries Served' },
                { value: '600+', label: 'Product Models' },
                { value: '#1', label: 'Forklift Brand in China' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center justify-center py-10 px-6 bg-[#F7F7F7] border border-gray-100">
                  <div className="text-4xl font-bold text-[#E60012] mb-2">{value}</div>
                  <div className="text-xs text-gray-500 text-center leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Heli Solutions — 4 large image cards, mirrors helichina.net solutions grid ── */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273240' }}>
              HELI Equipment Range
            </h2>
            <div className="w-12 h-0.5 bg-[#E60012]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((sol) => (
              <Link key={sol.id} href="/products" className="group block relative overflow-hidden aspect-[3/4] bg-[#0C1019]">
                <Image
                  src={getAssetPath(sol.image)}
                  alt={sol.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay — stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg leading-tight mb-2">{sol.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {sol.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#E60012] text-sm font-semibold">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-[#E60012] text-[#E60012] hover:bg-[#E60012] hover:text-white font-semibold px-8 py-3 transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Events — 3 cards like helichina.net news section ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273240' }}>
                  Events & Exhibits
                </h2>
                <div className="w-12 h-0.5 bg-[#E60012]" />
              </div>
              <Link
                href="/events"
                className="shrink-0 inline-flex items-center gap-2 border border-[#E60012] text-[#E60012] hover:bg-[#E60012] hover:text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
              >
                View All <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventPreviews.map((event, i) => (
                <Link key={i} href="/events" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={getAssetPath(event.src)}
                      alt={event.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-[#E60012] text-xs font-semibold uppercase tracking-wide mb-1.5">{event.loc}</p>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#E60012] transition-colors duration-150">
                    {event.label}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273240' }}>
              Our Services
            </h2>
            <div className="w-12 h-0.5 bg-[#E60012]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFF0F0] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#E60012]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#E60012] text-[#E60012] hover:bg-[#E60012] hover:text-white font-semibold px-8 py-3 transition-colors duration-200"
            >
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — red like helichina.net ── */}
      <section className="py-24 bg-[#E60012]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Contact us to discuss your material handling requirements and receive a competitive quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#E60012] hover:bg-red-50 font-bold px-8 py-4 transition-colors duration-200"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
