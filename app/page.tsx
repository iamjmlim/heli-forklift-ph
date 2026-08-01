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

const productCategories = [
  {
    id: 'lithium-battery',
    title: 'Lithium Battery Forklift',
    desc: 'Fast-charging, zero-emission forklifts built for demanding multi-shift operations.',
    image: '/Heli/Lithium Batter Forklift/G2 series 1.5-3.8 tons lithium battery counterbalanced forklift.avif',
  },
  {
    id: 'electric-forklift',
    title: 'Electric Forklift',
    desc: 'Quiet, efficient electric forklifts ideal for indoor warehouses and clean environments.',
    image: '/Heli/Electric Forklift Series/G series 1.3-1.5 tons rear looking three-fulcrum battery counterbalanced forklift.avif',
  },
  {
    id: 'internal-combustion',
    title: 'Internal Combustion Forklift',
    desc: 'Powerful diesel and LPG forklifts engineered for outdoor and heavy-duty applications.',
    image: '/Heli/Internal Combustion Forklift Series/G series 8.5-10 tons diesel counterbalanced forklift.avif',
  },
  {
    id: 'electric-storage',
    title: 'Electric Storage Series',
    desc: 'Reach trucks, order pickers, and stackers maximizing high-density warehouse storage.',
    image: '/Heli/Electric Storage Series/1.4 tons narrow leg electric stacker truck.avif',
  },
  {
    id: 'warehouse-truck',
    title: 'Warehouse Truck',
    desc: 'Compact pallet jacks and stackers for agile, cost-effective material movement.',
    image: '/Heli/Warehouse Truck/Electric Hand Pallet Truck  2 tons.avif',
  },
  {
    id: 'wheel-loader',
    title: 'Wheel Loader',
    desc: 'Heavy-duty loaders for construction, bulk handling, and all-terrain earthmoving.',
    image: '/Heli/Wheel Loader/IMG_9478.JPG',
  },
]

const services = [
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    desc: 'Preventive maintenance schedules, genuine parts replacement, and emergency on-site repair services.',
  },
  {
    icon: Users,
    title: 'Operator Training',
    desc: 'Certified operator training programs covering safety protocols and hands-on equipment operation.',
  },
  {
    icon: Shield,
    title: 'Installation',
    desc: 'Professional equipment installation with safety compliance checks and full commissioning support.',
  },
  {
    icon: Zap,
    title: 'Customization',
    desc: 'Tailored attachments, modifications, and specialized configurations for your workflow.',
  },
  {
    icon: Truck,
    title: 'Parts Supply',
    desc: 'Genuine HELI spare parts available with fast turnaround to minimize equipment downtime.',
  },
  {
    icon: Shield,
    title: 'Consulting',
    desc: 'Operational assessments and equipment recommendations to optimize your material handling costs.',
  },
]

const eventPreviews = [
  { src: '/Events/Bocaue display/IMG_0565.JPG', label: 'Bocaue Client Display' },
  { src: '/Events/Bocaue display/IMG_1457.JPG', label: 'Bocaue Client Display' },
  { src: '/Events/malaysia exhibit/Image_20260523104627_3590_8.jpg', label: 'Malaysia Exhibit' },
  { src: '/Events/malaysia exhibit/Image_20260523105513_3610_8.jpg', label: 'Malaysia Exhibit' },
]

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#001A47]">
        <Image
          src={getAssetPath('/Events/Bocaue display/IMG_0565.JPG')}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A47] via-[#001A47]/90 to-[#001A47]/50" />

        <div className="relative z-10 container mx-auto px-4 py-28">
          <div className="max-w-2xl">
            <p className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Authorized HELI Sales Agent · Philippines
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Industrial<br />Material Handling<br />Excellence
            </h1>
            <p className="text-lg text-blue-100 mb-10 max-w-lg leading-relaxed">
              Premium HELI forklifts and warehouse equipment with full sales, installation, and service support across the Philippines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D8A] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white hover:bg-white/8 font-semibold px-7 py-3.5 rounded-sm transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-blue-400">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 opacity-60" />
        </div>
      </section>

      {/* ── Product Range ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Product Range</h2>
            <div className="w-10 h-0.5 bg-[#0052B4]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link key={cat.id} href="/products" className="group block">
                <div className="overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 rounded-sm">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <Image
                      src={getAssetPath(cat.image)}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-[#0052B4] transition-colors duration-150">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0052B4]">
                      Learn More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-[#0052B4] text-[#0052B4] hover:bg-[#0052B4] hover:text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / Stats ── */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                HELI Forklift Philippines
              </h2>
              <div className="w-10 h-0.5 bg-[#0052B4] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Authorized HELI sales agent in the Philippines — delivering world-class material handling equipment backed by one of the global industry's leading manufacturers, with roots going back to 1958.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We serve businesses across Metro Manila and the wider Philippines with genuine HELI equipment, professional installation, operator training, and dedicated after-sales service.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#0052B4] font-semibold hover:gap-3 transition-all duration-150"
              >
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-3 gap-4 lg:pl-8">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Happy Clients' },
                { value: '24/7', label: 'Service Support' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center py-8 px-4 bg-white border border-gray-100 rounded-sm">
                  <div className="text-4xl font-bold text-[#0052B4] mb-1.5">{value}</div>
                  <div className="text-xs text-gray-500 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
            <div className="w-10 h-0.5 bg-[#0052B4]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#E8F2FF] rounded-sm flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#0052B4]" />
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
              className="inline-flex items-center gap-2 border border-[#0052B4] text-[#0052B4] hover:bg-[#0052B4] hover:text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
            >
              All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Events Preview ── */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Events & Exhibits</h2>
                <div className="w-10 h-0.5 bg-[#0052B4]" />
                <p className="text-gray-500 mt-4 text-sm">From client demos to international trade shows — HELI equipment up close</p>
              </div>
              <Link
                href="/events"
                className="shrink-0 inline-flex items-center gap-2 border border-[#0052B4] text-[#0052B4] hover:bg-[#0052B4] hover:text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200"
              >
                View All Events
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {eventPreviews.map((event, i) => (
                <Link key={i} href="/events" className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={getAssetPath(event.src)}
                      alt={event.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[#001A47]/0 group-hover:bg-[#001A47]/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {event.label}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0052B4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Contact us to discuss your material handling requirements and receive a competitive quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0052B4] hover:bg-blue-50 font-bold px-8 py-4 rounded-sm transition-colors duration-200"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
