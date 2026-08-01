'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { getAssetPath } from '@/lib/paths'

const slides = [
  {
    image: '/helichina/hero-ph-facility.png',
    number: '01',
    letter: 'H',
    heading: 'Industrial Material\nHandling Excellence',
    sub: 'Premium HELI forklifts and warehouse equipment with full sales, installation, and service support across the Philippines.',
    cta: { label: 'Explore Products', href: '/products' },
  },
  {
    image: '/helichina/hero-2.jpg',
    number: '02',
    letter: 'E',
    heading: 'Lithium Battery\nElectric Solutions',
    sub: 'Fast-charging, zero-emission forklifts built for demanding multi-shift operations in every industry.',
    cta: { label: 'View Electric Range', href: '/products' },
  },
  {
    image: '/helichina/hero-3.jpg',
    number: '03',
    letter: 'L',
    heading: 'Your Authorized\nHELI Partner\nin Philippines',
    sub: 'Genuine HELI equipment backed by local expertise, professional installation, and dedicated after-sales service.',
    cta: { label: 'Get a Quote', href: '/contact' },
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index: number) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setFading(false), 50)
    }, 350)
  }, [fading])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden bg-[#0C1019]" style={{ height: '100vh', minHeight: '600px' }}>
      {/* Background images — all mounted, opacity driven */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={getAssetPath(s.image)}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1019]/90 via-[#0C1019]/65 to-[#0C1019]/30" />
        </div>
      ))}

      {/* Content */}
      <div
        className="absolute inset-0 z-10 flex items-center transition-opacity duration-350"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <div className="w-full">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-2xl">
              {/* Slide number */}
              <p className="text-[#E60012] text-xs font-bold tracking-[0.4em] uppercase mb-5">
                {slide.number} / {String(slides.length).padStart(2, '0')}
              </p>

              {/* Big accent letter (like helichina.net HELI theme) */}
              <p className="text-white/8 font-black leading-none select-none mb-[-2rem]" style={{ fontSize: 'clamp(100px, 18vw, 220px)', lineHeight: 1 }}>
                {slide.letter}
              </p>

              {/* Heading */}
              <h1 className="font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#ffffff' }}>
                {slide.heading.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>

              <p className="text-gray-300 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                {slide.sub}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 bg-[#E60012] hover:bg-[#B8000F] text-white font-semibold px-7 py-3.5 text-sm transition-colors duration-300"
                >
                  {slide.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 text-sm transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 hover:border-white/70 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 hover:border-white/70 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot navigation — scaleX instead of width to avoid layout thrash */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: '28px',
              height: '3px',
              borderRadius: '2px',
              background: i === current ? '#E60012' : 'rgba(255,255,255,0.35)',
              transform: `scaleX(${i === current ? 1 : 0.286})`,
              transformOrigin: 'left center',
              transition: 'transform 300ms ease, background 300ms ease',
            }}
          />
        ))}
      </div>

      {/* Progress bar — scaleX instead of width to avoid layout thrash */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div
          className="h-full w-full bg-[#E60012]"
          style={{
            transformOrigin: 'left center',
            transform: `scaleX(${(current + 1) / slides.length})`,
            transition: 'transform 5s linear',
          }}
        />
      </div>
    </section>
  )
}
