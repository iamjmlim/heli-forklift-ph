'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: 1958, suffix: '', label: 'Year Founded' },
  { value: 100, suffix: '+', label: 'Countries Served' },
  { value: 600, suffix: '+', label: 'Product Models' },
  { value: 1, prefix: '#', suffix: '', label: 'Brand in China' },
]

function Counter({ value, suffix = '', prefix = '', label }: { value: number; suffix?: string; prefix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const startTime = Date.now()
    const startVal = value > 100 ? Math.floor(value * 0.6) : 0

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(startVal + eased * (value - startVal))
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, value])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-10 px-4 bg-[#F7F7F7] text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#E60012] mb-2 tabular-nums leading-none">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-[0.12em]">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

          {/* Left: text */}
          <div className="lg:w-3/5">
            <p className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-4">About</p>
            <h2 className="font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#273240' }}>
              About <span className="text-[#E60012]">HELI</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#E60012] mb-7" />
            <p className="text-gray-500 leading-relaxed mb-4">
              Anhui Heli Co., Ltd. — HELI — is one of the world&apos;s largest forklift manufacturers. Founded in 1958 and headquartered in Hefei, China, HELI has grown to export to over 100 countries with a comprehensive lineup of 600+ product models covering every material handling need.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              As an authorized HELI sales agent in the Philippines, we bring that global manufacturing excellence directly to local businesses — with genuine equipment, professional installation, certified operator training, and dedicated after-sales support.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#E60012] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: 2×2 animated counters */}
          <div className="lg:w-2/5 grid grid-cols-2 gap-3 w-full">
            {stats.map((s) => (
              <Counter key={s.label} value={s.value} suffix={s.suffix} prefix={s.prefix} label={s.label} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
