'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

const PHONE = '+63 991 113 4556'
const PHONE_RAW = '+639911134556'

const socialLinks = [
  {
    label: 'Messenger',
    href: 'https://m.me/ropher.guion',
    color: '#006AFF',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.622 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.554-6.962 3.066 3.26 5.963-3.26-6.565 6.962z" />
      </svg>
    ),
  },
  {
    label: 'Viber',
    href: `viber://chat?number=%2B639911134556`,
    color: '#7360F2',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M11.985 0h.03C18.64 0 24 5.373 24 12a11.982 11.982 0 01-3.512 8.488A11.982 11.982 0 0112 24a12.052 12.052 0 01-3.67-.572l-4.11 1.1 1.1-4.017A11.96 11.96 0 010 12C0 5.373 5.36 0 11.985 0zm3.808 14.865c-.32-.16-1.894-.935-2.188-1.042-.295-.107-.51-.16-.724.16-.214.319-.83 1.042-.017 1.308-.107.267.723.374.883.48.16.107 1.894 1.148 2.24 1.308.293.133.8.16 1.09-.08.24-.184 1.042-.723 1.202-1.41.16-.694-.16-.924-.48-1.05-.321-.126-2.347-1.127-2.827-1.307zm-3.2-10.76c-3.74 0-6.774 3.034-6.774 6.774 0 1.281.348 2.481.957 3.513L6.4 16.93l2.59-.683a6.737 6.737 0 003.603 1.036c3.74 0 6.774-3.034 6.774-6.774s-3.034-6.774-6.774-6.774zm0 1.334a5.44 5.44 0 015.44 5.44 5.44 5.44 0 01-5.44 5.44 5.414 5.414 0 01-2.935-.862l-2.054.534.534-1.976a5.41 5.41 0 01-.985-3.136 5.44 5.44 0 015.44-5.44z" />
      </svg>
    ),
  },
  {
    label: 'WeChat',
    href: `weixin://dl/chat?${PHONE_RAW}`,
    color: '#07C160',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.895-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.11.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C22.5 18.fork 24 16.2 24 14.2c0-3.144-2.923-5.45-7.062-5.342zm-3.501 2.58a.988.988 0 110 1.976.988.988 0 010-1.975zm6.991 0a.988.988 0 110 1.976.988.988 0 010-1.975z" />
      </svg>
    ),
  },
]

const EMPTY_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

export function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'f6732e85-0ec8-4102-aafb-cfebe00c43fe',
          from_name: formData.name,
          ...formData,
          subject: `New inquiry: ${formData.subject}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData(EMPTY_FORM)
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Send Us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we&apos;ll get back to you as soon as possible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+63 XXX XXX XXXX" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us more about your requirements..." rows={5} />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <p className="text-sm text-green-600 font-medium text-center pt-1">
                ✓ Message sent! We&apos;ll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 font-medium text-center pt-1">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
            <CardDescription>Reach out to us through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="h-4 w-4 text-[#E60012]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href={`tel:${PHONE_RAW}`} className="text-gray-600 hover:text-[#E60012] transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="h-4 w-4 text-[#E60012]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:agaropher111@gmail.com" className="text-gray-600 hover:text-[#E60012] transition-colors">
                  agaropher111@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="h-4 w-4 text-[#E60012]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-600 leading-relaxed">
                  Km. 60 Plaridel Bypass Road<br />
                  Brgy. Cutcut, Guiguinto, Bulacan<br />
                  Philippines
                </p>
                <p className="text-xs text-[#E60012] font-semibold mt-1">Main Branch</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="h-4 w-4 text-[#E60012]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Business Hours</p>
                <p className="text-gray-600">Monday – Sunday</p>
                <p className="text-gray-600">8:30 AM – 5:30 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Chat With Us</CardTitle>
            <CardDescription>We&apos;re available on these messaging platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors group"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: link.color }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{link.label}</p>
                  <p className="text-gray-500 text-xs">{PHONE}</p>
                </div>
              </a>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
