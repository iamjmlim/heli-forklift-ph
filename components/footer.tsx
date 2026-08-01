import Link from 'next/link'
import { Mail } from 'lucide-react'

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Products'],
  ['/services', 'Services'],
  ['/events', 'Events'],
  ['/contact', 'Contact'],
] as const

const productLinks = [
  'Lithium Battery Forklift',
  'Electric Forklift',
  'Internal Combustion Forklift',
  'Electric Storage Series',
  'Warehouse Truck',
  'Wheel Loader',
] as const

export function Footer() {
  return (
    <footer className="bg-[#0C1019] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
              <span className="text-white font-bold text-2xl tracking-wide">HELI</span>
              <span className="text-[#E60012] text-sm ml-2.5 font-medium tracking-[0.15em] uppercase">
                Forklift Philippines
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Authorized HELI sales agent in the Philippines. We supply premium material handling equipment with full local sales, installation, and after-sales support.
            </p>
            <a
              href="mailto:info@heliforklift.ph"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              info@heliforklift.ph
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A2E]">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Heli Forklift Philippines. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Authorized HELI Sales Agent
          </p>
        </div>
      </div>
    </footer>
  )
}
