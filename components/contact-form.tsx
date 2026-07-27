'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Facebook, Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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
            <Button type="submit" size="lg" className="w-full">Send Message</Button>
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
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+63 XXX XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@heliforklift.ph</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">Manila, Philippines</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Social Media</CardTitle>
            <CardDescription>Connect with us on social media</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Facebook className="h-6 w-6 text-orange-500" />
              <span className="font-medium">Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <MessageCircle className="h-6 w-6 text-orange-500" />
              <span className="font-medium">Viber</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <MessageCircle className="h-6 w-6 text-orange-500" />
              <span className="font-medium">WeChat</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
