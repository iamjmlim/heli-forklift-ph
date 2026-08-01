import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HELI Forklift Philippines — Authorized HELI Dealer in Bulacan'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C1019',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 80px 80px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large H watermark */}
        <div
          style={{
            position: 'absolute',
            right: -60,
            top: -60,
            fontSize: 520,
            fontWeight: 900,
            color: 'rgba(230, 0, 18, 0.07)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
          }}
        >
          H
        </div>

        {/* Red accent bar */}
        <div style={{ width: 56, height: 4, background: '#E60012', marginBottom: 36, display: 'flex' }} />

        {/* Brand name */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 4 }}>
          <span style={{ fontSize: 100, fontWeight: 900, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}>
            HELI
          </span>
          <span style={{ fontSize: 26, fontWeight: 600, color: '#E60012', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Forklift Philippines
          </span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 28, color: '#9CA3AF', fontWeight: 400, marginBottom: 56, marginTop: 12, display: 'flex' }}>
          Authorized HELI Dealer — Premium Material Handling Equipment
        </div>

        {/* Info chips */}
        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 40 }}>
            <span style={{ fontSize: 12, color: '#E60012', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex' }}>
              Location
            </span>
            <span style={{ fontSize: 22, color: '#ffffff', fontWeight: 500, display: 'flex' }}>
              Guiguinto, Bulacan
            </span>
          </div>
          <div style={{ width: 1, background: '#1F2937', marginRight: 40, display: 'flex' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 40 }}>
            <span style={{ fontSize: 12, color: '#E60012', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex' }}>
              Contact
            </span>
            <span style={{ fontSize: 22, color: '#ffffff', fontWeight: 500, display: 'flex' }}>
              +63 991 113 4556
            </span>
          </div>
          <div style={{ width: 1, background: '#1F2937', marginRight: 40, display: 'flex' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, color: '#E60012', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex' }}>
              Open Daily
            </span>
            <span style={{ fontSize: 22, color: '#ffffff', fontWeight: 500, display: 'flex' }}>
              8:30 AM – 5:30 PM
            </span>
          </div>
        </div>

        {/* Domain badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 80,
            fontSize: 17,
            color: '#374151',
            fontWeight: 500,
            display: 'flex',
          }}
        >
          heliforkliftph.com
        </div>

        {/* Bottom red line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: '#E60012',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
