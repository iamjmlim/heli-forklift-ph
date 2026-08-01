'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

// Update these with actual Messenger username and Viber number
const MESSENGER_URL = 'https://m.me/ropher.guion'
const VIBER_URL = 'viber://chat?number=%2B639911134556'

const options = [
  {
    label: 'Messenger',
    href: MESSENGER_URL,
    bg: '#006AFF',
    icon: (
      // Facebook Messenger "M" bolt icon
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.622 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.554-6.962 3.066 3.26 5.963-3.26-6.565 6.962z" />
      </svg>
    ),
  },
  {
    label: 'Viber',
    href: VIBER_URL,
    bg: '#7360F2',
    icon: (
      // Viber phone-in-bubble icon
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M11.985 0h.03C18.64 0 24 5.373 24 12a11.982 11.982 0 01-3.512 8.488A11.982 11.982 0 0112 24a12.052 12.052 0 01-3.67-.572l-4.11 1.1 1.1-4.017A11.96 11.96 0 010 12C0 5.373 5.36 0 11.985 0zm3.808 14.865c-.32-.16-1.894-.935-2.188-1.042-.295-.107-.51-.16-.724.16-.214.319-.83 1.042-.017 1.308-.107.267.723.374.883.48.16.107 1.894 1.148 2.24 1.308.293.133.8.16 1.09-.08.24-.184 1.042-.723 1.202-1.41.16-.694-.16-.924-.48-1.05-.321-.126-2.347-1.127-2.827-1.307zm-3.2-10.76c-3.74 0-6.774 3.034-6.774 6.774 0 1.281.348 2.481.957 3.513L6.4 16.93l2.59-.683a6.737 6.737 0 003.603 1.036c3.74 0 6.774-3.034 6.774-6.774s-3.034-6.774-6.774-6.774zm0 1.334a5.44 5.44 0 015.44 5.44 5.44 5.44 0 01-5.44 5.44 5.414 5.414 0 01-2.935-.862l-2.054.534.534-1.976a5.41 5.41 0 01-.985-3.136 5.44 5.44 0 015.44-5.44z" />
      </svg>
    ),
  },
]

export function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {options.map((opt, i) => (
        <a
          key={opt.label}
          href={opt.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : `translateY(${(options.length - i) * 10}px) scale(0.9)`,
            pointerEvents: open ? 'auto' : 'none',
            transition: `opacity 200ms ease, transform 200ms ease`,
            transitionDelay: open ? `${i * 60}ms` : '0ms',
          }}
        >
          {/* Label */}
          <span className="bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 shadow-lg whitespace-nowrap">
            {opt.label}
          </span>
          {/* Icon button */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: opt.bg }}
          >
            {opt.icon}
          </div>
        </a>
      ))}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat options' : 'Open chat options'}
        className="w-14 h-14 rounded-full bg-[#E60012] hover:bg-[#B8000F] text-white flex items-center justify-center shadow-xl transition-all duration-300"
        style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
      >
        {open
          ? <X className="h-5 w-5" />
          : <MessageCircle className="h-6 w-6" />
        }
      </button>
    </div>
  )
}
