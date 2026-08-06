import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getAssetPath } from '@/lib/paths'
import { HeroCarousel } from '@/components/hero-carousel'
import { StatsSection } from '@/components/stats-section'
import { VideoCard } from '@/components/video-card'

export const metadata: Metadata = {
  title: 'HELI Forklift Philippines | Authorized Dealer in Bulacan',
  description: 'Authorized HELI forklift dealer in Guiguinto, Bulacan. Buy lithium battery, electric, and diesel forklifts, reach trucks, and warehouse equipment with full sales and after-sales support across the Philippines.',
  alternates: { canonical: 'https://heliforkliftph.com' },
  openGraph: {
    title: 'HELI Forklift Philippines | Authorized Dealer — Bulacan',
    description: 'Buy genuine HELI forklifts in the Philippines from our Guiguinto, Bulacan branch. Lithium battery, electric & diesel forklifts, reach trucks, and full after-sales service. Call +63 991 113 4556.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HELI Forklift Philippines — Authorized Dealer in Bulacan' }],
  },
}

// ── 4 portrait solution cards — helichina.net "Solution in Factory" style ──
const solutions = [
  {
    number: '01',
    title: 'Complete Equipment',
    desc: 'Full range of counterbalanced forklifts for every load capacity and application.',
    image: '/helichina/highlight-lithium.jpg',
    href: '/products',
  },
  {
    number: '02',
    title: 'Electric Solutions',
    desc: 'Lithium battery and electric forklifts for zero-emission multi-shift operations.',
    image: '/helichina/solution-electric.webp',
    href: '/products',
  },
  {
    number: '03',
    title: 'Warehouse Equipment',
    desc: 'Reach trucks, stackers, and pallet jacks for high-density storage operations.',
    image: '/helichina/solution-warehouse.webp',
    href: '/products',
  },
  {
    number: '04',
    title: 'Industry Solutions',
    desc: 'Specialized equipment and service packages tailored to your industry.',
    image: '/helichina/solution-industry.webp',
    href: '/services',
  },
]

// ── 3 YouTube video sections — helichina.net dark video area ──
const videos = [
  {
    thumbSrc: '/helichina/video-thumb-1.jpg',
    videoId: 'iQkFM2HNaFQ',
    title: 'Learn About Our Lithium Battery Systems',
    desc: 'See how HELI\'s advanced lithium battery forklifts deliver fast-charging, zero-emission performance for multi-shift operations.',
  },
  {
    thumbSrc: '/helichina/video-thumb-2.jpg',
    videoId: 'iR7pEQei3p4',
    title: 'HELI Electric Forklift Range',
    desc: 'Discover HELI\'s complete electric forklift lineup — from compact warehouse models to high-capacity counterbalanced trucks.',
  },
  {
    thumbSrc: '/helichina/video-thumb-3.jpg',
    videoId: 'f9r3o9-xe3o',
    title: 'Who is HELI?',
    desc: 'Founded in 1958, HELI is one of the world\'s largest forklift manufacturers — exported to 100+ countries with 600+ product models.',
  },
]

// ── 3 news/events cards — helichina.net HELI NEWS style ──
const news = [
  {
    image: '/helichina/news-1.jpg',
    category: 'Philippines',
    title: 'HELI Forklifts Deployed Across Philippine Industries',
    desc: 'From warehousing to construction — see HELI equipment performing in real-world Philippine operations, backed by our local service team.',
    href: '/events',
  },
  {
    image: '/helichina/news-2.jpg',
    category: 'Events',
    title: 'Live Equipment Display and Client Demonstrations',
    desc: 'HELI Philippines holds regular client demonstration events showcasing the latest forklift models in action with our technical team on-site.',
    href: '/events',
  },
  {
    image: '/helichina/news-3.webp',
    category: 'Technology',
    title: 'HELI AGV and Intelligent Logistics Solutions',
    desc: 'Explore HELI\'s automated guided vehicle (AGV) lineup — bringing intelligent warehouse automation to Philippine operations.',
    href: '/products',
  },
]

export default function HomePage() {
  return (
    <div>

      {/* ── 1. HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── 2. ABOUT HELI + ANIMATED COUNTERS ── */}
      <StatsSection />

      {/* ── 3. SOLUTION IN FACTORY — 4 numbered portrait cards, exact helichina.net style ── */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-3">Solutions</p>
            <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#273240' }}>
              Solution in <span className="text-[#E60012]">Factory</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#E60012]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((sol) => (
              <Link
                key={sol.number}
                href={sol.href}
                className="group block relative overflow-hidden bg-[#0C1019]"
                style={{ aspectRatio: '4/5' }}
              >
                {/* Background image */}
                <Image
                  src={getAssetPath(sol.image)}
                  alt={sol.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Default overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition-colors duration-300" />

                {/* Number watermark — top left */}
                <div
                  aria-hidden
                  className="absolute top-4 left-5 font-black select-none leading-none text-white/20 group-hover:text-white/30 transition-colors duration-300"
                  style={{ fontSize: 'clamp(56px, 9vw, 80px)' }}
                >
                  {sol.number}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg leading-snug mb-2">{sol.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {sol.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#E60012] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VIDEO SECTIONS — dark bg, YouTube embeds, exact helichina.net style ── */}
      <section className="py-24 bg-[#0C1019]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-3">Products</p>
            <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff' }}>
              Learn About Our <span className="text-[#E60012]">Products</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#E60012]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((v) => (
              <VideoCard
                key={v.videoId}
                thumbSrc={v.thumbSrc}
                videoId={v.videoId}
                title={v.title}
                desc={v.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HELI EVENTS — 3-col news cards, exact helichina.net HELI NEWS style ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-3">News</p>
              <h2 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#273240' }}>
                HELI <span className="text-[#E60012]">Events</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#E60012] mt-4" />
            </div>
            <Link
              href="/events"
              className="shrink-0 inline-flex items-center gap-2 border border-[#E60012] text-[#E60012] hover:bg-[#E60012] hover:text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <Link key={i} href={item.href} className="group block">
                <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-[#E60012] text-xs font-bold uppercase tracking-[0.15em] mb-2">{item.category}</p>
                <h3 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#E60012] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[#E60012] text-sm font-semibold">
                  Read More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SEO LOCAL BUSINESS CONTENT ── */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authorized HELI Forklift Dealer in the Philippines
            </h2>
            <div className="w-10 h-0.5 bg-[#E60012] mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-900">Heli Forklift Philippines</strong> is the authorized HELI forklift dealer and distributor serving Metro Manila, Bulacan, Central Luzon, CALABARZON, and all major industrial areas across Luzon. Our main branch is located at <strong className="text-gray-900">Km. 60 Plaridel Bypass Road, Brgy. Cutcut, Guiguinto, Bulacan</strong> — open Monday to Sunday, 8:30 AM to 5:30 PM.
                </p>
                <p>
                  We supply the complete HELI lineup: <strong className="text-gray-900">lithium battery forklifts, electric forklifts, diesel forklifts, LPG forklifts, reach trucks, pallet trucks, warehouse stackers, heavy forklifts, and wheel loaders</strong> — ranging from 1 ton to 32 tons capacity. Whether you need a single unit or an entire fleet, we provide competitive pricing and flexible payment options.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Beyond sales, we offer <strong className="text-gray-900">forklift maintenance, emergency repair, spare parts supply, installation, operator training, and equipment customization</strong>. Our factory-trained technicians are deployed across Luzon to ensure fast on-site service response for all clients.
                </p>
                <p>
                  HELI is one of the world&apos;s largest forklift manufacturers with over 35 years of experience, exporting to 100+ countries. As your local authorized dealer, we bring global-quality equipment with full local after-sales support. Contact us at <strong className="text-gray-900">+63 991 113 4556</strong> via call, Viber, or Messenger to request a quotation or arrange a product demonstration.
                </p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Service Areas', value: 'Luzon-Wide' },
                { label: 'Capacity Range', value: '1 – 32 tons' },
                { label: 'Business Hours', value: 'Mon–Sun 8:30–5:30' },
                { label: 'Contact', value: '+63 991 113 4556' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white border border-gray-100 p-4 text-center">
                  <p className="text-xs text-[#E60012] font-bold uppercase tracking-wider mb-1">{label}</p>
                  <p className="font-bold text-gray-900 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CONTACT CTA ── */}
      <section className="py-24 bg-[#E60012]">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Contact us to discuss your material handling requirements and receive a competitive quote from our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#E60012] hover:bg-red-50 font-bold px-8 py-4 transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-semibold px-8 py-4 transition-all duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
