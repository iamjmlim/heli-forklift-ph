import Link from 'next/link'
import { Mail, Youtube, Linkedin, Twitter } from 'lucide-react'

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Products'],
  ['/services', 'Services'],
  ['/events', 'Events'],
  ['/contact', 'Contact'],
] as const

const productLinks = [
  ['Lithium Battery Forklift', '/products#lithium-battery'],
  ['Electric Forklift', '/products#electric-forklift'],
  ['Internal Combustion Forklift', '/products#internal-combustion'],
  ['Electric Storage Series', '/products#electric-storage'],
  ['Warehouse Truck', '/products#warehouse-truck'],
  ['Wheel Loader', '/products#wheel-loader'],
] as const

const messengerIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.622 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.554-6.962 3.066 3.26 5.963-3.26-6.565 6.962z" />
  </svg>
)

const viberIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M11.985 0h.03C18.64 0 24 5.373 24 12a11.982 11.982 0 01-3.512 8.488A11.982 11.982 0 0112 24a12.052 12.052 0 01-3.67-.572l-4.11 1.1 1.1-4.017A11.96 11.96 0 010 12C0 5.373 5.36 0 11.985 0zm3.808 14.865c-.32-.16-1.894-.935-2.188-1.042-.295-.107-.51-.16-.724.16-.214.319-.83 1.042-.017 1.308-.107.267.723.374.883.48.16.107 1.894 1.148 2.24 1.308.293.133.8.16 1.09-.08.24-.184 1.042-.723 1.202-1.41.16-.694-.16-.924-.48-1.05-.321-.126-2.347-1.127-2.827-1.307zm-3.2-10.76c-3.74 0-6.774 3.034-6.774 6.774 0 1.281.348 2.481.957 3.513L6.4 16.93l2.59-.683a6.737 6.737 0 003.603 1.036c3.74 0 6.774-3.034 6.774-6.774s-3.034-6.774-6.774-6.774zm0 1.334a5.44 5.44 0 015.44 5.44 5.44 5.44 0 01-5.44 5.44 5.414 5.414 0 01-2.935-.862l-2.054.534.534-1.976a5.41 5.41 0 01-.985-3.136 5.44 5.44 0 015.44-5.44z" />
  </svg>
)

const wechatIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838C17.562 5.087 14.356 2.188 8.691 2.188zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.11.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C22.5 18.1 24 16.2 24 14.2c0-3.144-2.923-5.45-7.062-5.342zm-3.501 2.58a.988.988 0 110 1.976.988.988 0 010-1.975zm6.991 0a.988.988 0 110 1.976.988.988 0 010-1.975z" />
  </svg>
)

const socialLinks = [
  { svg: null, icon: Youtube, href: 'https://www.youtube.com/@HELIForklift', label: 'YouTube' },
  { svg: null, icon: Linkedin, href: 'https://www.linkedin.com/company/heli-forklift', label: 'LinkedIn' },
  { svg: null, icon: Twitter, href: 'https://twitter.com/HELIForklift', label: 'Twitter / X' },
  { svg: messengerIcon, icon: null, href: 'https://m.me/ropher.guion', label: 'Messenger' },
  { svg: viberIcon, icon: null, href: 'viber://chat?number=%2B639911134556', label: 'Viber' },
  { svg: wechatIcon, icon: null, href: 'weixin://dl/chat?+639911134556', label: 'WeChat' },
]

export function Footer() {
  return (
    <footer className="bg-[#0C1019] text-white">
      <div className="container mx-auto px-6 md:px-10 py-16">
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
              Authorized HELI sales agent in the Philippines. Premium material handling equipment with full local sales, installation, and after-sales support.
            </p>
            <a
              href="mailto:agaropher111@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              agaropher111@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map(({ svg, icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-gray-700 hover:border-[#E60012] hover:bg-[#E60012] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {svg ?? (Icon && <Icon className="h-4 w-4" />)}
                </a>
              ))}
            </div>
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
              {productLinks.map(([label, href]) => (
                <li key={label}>
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

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
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
