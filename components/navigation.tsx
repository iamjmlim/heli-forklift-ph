'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const productCategories = [
  { label: 'Lithium Battery Forklift', href: '/products#lithium-battery' },
  { label: 'Electric Forklift', href: '/products#electric-forklift' },
  { label: 'Internal Combustion Forklift', href: '/products#internal-combustion' },
  { label: 'Electric Storage Series', href: '/products#electric-storage' },
  { label: 'Heavy Forklift Series', href: '/products#heavy-forklift' },
  { label: 'Warehouse Truck', href: '/products#warehouse-truck' },
  { label: 'Wheel Loader', href: '/products#wheel-loader' },
]

const serviceCategories = [
  { label: 'Maintenance', href: '/services#maintenance' },
  { label: 'Repair', href: '/services#repair' },
  { label: 'Installation', href: '/services#installation' },
  { label: 'Operator Training', href: '/services#training' },
  { label: 'Consulting', href: '/services#consulting' },
  { label: 'Customization', href: '/services#customization' },
]

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products', dropdown: productCategories },
  { href: '/services', label: 'Services', dropdown: serviceCategories },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none select-none shrink-0"
            onClick={() => setOpen(false)}
          >
            <span
              className="text-[#E60012] font-bold text-xl tracking-wide"
              style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
            >
              HELI
            </span>
            <span className="text-gray-400 text-[9px] font-medium tracking-[0.2em] uppercase">
              Forklift Philippines
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navItems.map(({ href, label, dropdown }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))

              if (dropdown) {
                return (
                  <div key={href} className="group relative">
                    <Link
                      href={href}
                      className={cn(
                        'flex items-center gap-0.5 px-4 py-[26px] text-sm font-medium transition-colors duration-200',
                        active ? 'text-[#E60012]' : 'text-gray-600 hover:text-[#E60012]'
                      )}
                    >
                      {label}
                      <ChevronDown className="h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E60012]" />
                    )}

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 min-w-[220px] bg-[#0C1019] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
                      <div className="py-2">
                        {dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#E60012] transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'relative px-4 py-[26px] text-sm font-medium transition-colors duration-200',
                    active ? 'text-[#E60012]' : 'text-gray-600 hover:text-[#E60012]'
                  )}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E60012]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-[#E60012] hover:bg-[#B8000F] text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-[#E60012] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-white border-t border-gray-100',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-6 pb-5 pt-2 flex flex-col">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'py-3 px-2 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors',
                pathname === href || (href !== '/' && pathname.startsWith(href))
                  ? 'text-[#E60012]'
                  : 'text-gray-700 hover:text-[#E60012]'
              )}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 bg-[#E60012] hover:bg-[#B8000F] text-white text-sm font-semibold px-4 py-3 text-center transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
