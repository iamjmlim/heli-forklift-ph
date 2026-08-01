'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none select-none" onClick={() => setOpen(false)}>
            <span className="text-[#E60012] font-bold text-xl tracking-wide" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
              HELI
            </span>
            <span className="text-gray-500 text-[10px] font-medium tracking-[0.18em] uppercase">
              Forklift Philippines
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'relative px-4 py-5 text-sm font-medium transition-colors duration-150',
                    active ? 'text-[#E60012]' : 'text-gray-600 hover:text-[#E60012]'
                  )}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E60012] rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-[#E60012] hover:bg-[#B8000F] text-white text-sm font-semibold px-5 py-2 rounded-sm transition-colors duration-150"
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

      {/* Mobile menu — slide down */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-white border-t border-gray-100',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 pb-5 pt-2 flex flex-col">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'py-3 px-2 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors',
                pathname === href
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
            className="mt-4 bg-[#E60012] hover:bg-[#B8000F] text-white text-sm font-semibold px-4 py-3 rounded-sm text-center transition-colors duration-150"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
